import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Point = { x: number; y: number; ox: number; oy: number };

const N = 10; // số đoạn dây
const L = 84; // chiều dài dây (px)
const SEG = L / N;
const PX = 22; // x của điểm treo (giữa box rộng 44px)
const GRAV = 0.5; // trọng lực
const ITER = 16; // số lần giải ràng buộc mỗi bước
const STIFF = 0.9; // độ cứng: nhỏ thì mềm như dây thun
const TRIG = 20; // độ dãn cần để đổi giao diện (px)
const MAXPULL = 45; // độ dãn tối đa (px)
const KNOB = 22; // đường kính hạt (px)

interface ThemeCordProps {
  dark: boolean;
  onToggle: () => void;
  className?: string;
}

const ThemeCord = ({ dark, onToggle, className }: ThemeCordProps) => {
  const gid = useId().replace(/:/g, '');
  const boxRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const knobRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef(onToggle);

  useEffect(() => {
    toggleRef.current = onToggle;
  }, [onToggle]);

  const [armed, setArmed] = useState(false); // đã kéo đủ lực: thả ra là đổi
  const [pulse, setPulse] = useState(0); // mỗi lần tăng = một vòng sóng mới

  const sim = useRef({
    pts: Array.from(
      { length: N + 1 },
      (_, i): Point => ({
        x: PX,
        y: i * SEG,
        ox: PX,
        oy: i * SEG,
      }),
    ),
    dragging: false,
    armed: false,
    skipClick: false,
    gx: 0,
    gy: 0,
    sx: 0,
    sy: 0,
    moved: 0,
    tx: PX,
    ty: L,
    raf: 0,
    calm: 0,
    acc: 0,
    last: 0,
  });

  /* ---------- Mô phỏng dây (Verlet) ---------- */
  useEffect(() => {
    const box = boxRef.current;
    const path = pathRef.current;
    const knob = knobRef.current;
    if (!box || !path || !knob) return;

    const s = sim.current;
    const pts = s.pts;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const step = () => {
      const damp = still ? 0.8 : 0.93;
      for (let i = 1; i <= N; i++) {
        if (s.dragging && i === N) continue;
        const p = pts[i];
        const vx = (p.x - p.ox) * damp;
        const vy = (p.y - p.oy) * damp;
        p.ox = p.x;
        p.oy = p.y;
        p.x += vx;
        p.y += vy + GRAV;
      }
      for (let k = 0; k < ITER; k++) {
        for (let i = 0; i < N; i++) {
          const a = pts[i],
            b = pts[i + 1];
          const dx = b.x - a.x,
            dy = b.y - a.y;
          const d = Math.hypot(dx, dy) || 0.0001;
          const f = ((d - SEG) / d) * STIFF * 0.5;
          a.x += dx * f;
          a.y += dy * f;
          b.x -= dx * f;
          b.y -= dy * f;
        }
        pts[0].x = PX;
        pts[0].y = 0; // điểm treo cố định
        if (s.dragging) {
          pts[N].x = s.tx;
          pts[N].y = s.ty;
        } // đầu dây theo tay
      }
    };

    const render = () => {
      let d = `M${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 1; i < N; i++) {
        const a = pts[i],
          b = pts[i + 1];
        d += ` Q${a.x.toFixed(1)} ${a.y.toFixed(1)} ${((a.x + b.x) / 2).toFixed(1)} ${((a.y + b.y) / 2).toFixed(1)}`;
      }
      const e = pts[N];
      d += ` L${e.x.toFixed(1)} ${e.y.toFixed(1)}`;
      path.setAttribute('d', d);
      knob.style.transform = `translate(${(e.x - KNOB / 2).toFixed(1)}px, ${(e.y - KNOB / 2).toFixed(1)}px)`;
    };

    const energy = () => {
      let sum = 0;
      for (let i = 1; i <= N; i++) {
        sum += Math.abs(pts[i].x - pts[i].ox) + Math.abs(pts[i].y - pts[i].oy);
      }
      return sum;
    };

    const frame = (t: number) => {
      const dt = Math.min((t - s.last) / 1000 || 0.016, 0.05);
      s.last = t;
      s.acc += dt;
      while (s.acc >= 1 / 60) {
        step();
        s.acc -= 1 / 60;
      }
      render();
      s.calm = !s.dragging && energy() < 0.05 ? s.calm + 1 : 0;
      s.raf = s.calm > 40 ? 0 : requestAnimationFrame(frame); // dây đứng yên thì nghỉ
    };

    const wake = () => {
      s.calm = 0;
      if (!s.raf) {
        s.last = performance.now();
        s.raf = requestAnimationFrame(frame);
      }
    };

    const setTarget = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      const x = e.clientX - r.left - s.gx - PX; // vị trí hạt so với điểm treo
      const y = e.clientY - r.top - s.gy;
      const d = Math.hypot(x, y) || 1;
      const eff = d > L ? L + MAXPULL * Math.tanh((d - L) / MAXPULL) : d; // càng kéo càng nặng tay
      s.tx = PX + (x / d) * eff;
      s.ty = (y / d) * eff;
      s.armed = eff - L >= TRIG;
      setArmed(s.armed);
      s.moved = Math.max(
        s.moved,
        Math.hypot(e.clientX - s.sx, e.clientY - s.sy),
      );
    };

    const onDown = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      const end = pts[N];
      s.gx = e.clientX - r.left - end.x;
      s.gy = e.clientY - r.top - end.y;
      s.sx = e.clientX;
      s.sy = e.clientY;
      s.moved = 0;
      s.skipClick = false;
      s.armed = false;
      s.tx = end.x;
      s.ty = end.y;
      s.dragging = true;
      knob.setPointerCapture(e.pointerId);
      wake();
    };

    const onMove = (e: PointerEvent) => {
      if (s.dragging) setTarget(e);
    };

    const release = () => {
      if (!s.dragging) return;
      s.dragging = false;
      const end = pts[N];
      end.ox = end.x;
      end.oy = end.y; // thả tay: bắt đầu từ vận tốc 0
      if (s.armed) toggleRef.current();
      if (s.moved > 6) s.skipClick = true;
      s.armed = false;
      setArmed(false);
      wake();
    };

    const onClick = () => {
      if (s.skipClick) {
        s.skipClick = false;
        return;
      }
      toggleRef.current();
      for (let i = 1; i <= N; i++) pts[i].oy -= (3 * i) / N; // bấm nhẹ: dây giật xuống
      wake();
    };

    knob.addEventListener('pointerdown', onDown);
    knob.addEventListener('pointermove', onMove);
    knob.addEventListener('pointerup', release);
    knob.addEventListener('pointercancel', release);
    knob.addEventListener('click', onClick);
    render();

    return () => {
      cancelAnimationFrame(s.raf);
      s.raf = 0;
      knob.removeEventListener('pointerdown', onDown);
      knob.removeEventListener('pointermove', onMove);
      knob.removeEventListener('pointerup', release);
      knob.removeEventListener('pointercancel', release);
      knob.removeEventListener('click', onClick);
    };
  }, []);

  /* ---------- Sóng tỏa mỗi 5 giây ---------- */
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const emit = () => {
      if (!sim.current.dragging && !document.hidden) setPulse((p) => p + 1);
    };
    const first = setTimeout(emit, 1200);
    const id = setInterval(emit, 5000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={cn(
        'pointer-events-none fixed right-6 top-[env(safe-area-inset-top,0px)] z-50 h-px w-11 max-md:right-3.5',
        className,
      )}
    >
      {/* Sợi dây */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-px w-11 overflow-visible dark:drop-shadow-[0_0_4px_rgba(92,192,255,0.5)]"
      >
        <defs>
          <linearGradient
            id={gid}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2={L}
          >
            <stop
              offset="0"
              className="[stop-color:#4fb3f2] dark:[stop-color:#5cc0ff]"
            />
            <stop
              offset="1"
              className="[stop-color:#4a5bd8] dark:[stop-color:#8b98ff]"
            />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          fill="none"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={`url(#${gid})`}
        />
      </svg>

      {/* Hạt cầm nắm */}
      <button
        ref={knobRef}
        type="button"
        title="Kéo hoặc bấm để đổi giao diện"
        aria-label={
          dark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'
        }
        aria-pressed={dark}
        className={cn(
          'pointer-events-auto absolute left-0 top-0 size-[22px] touch-none cursor-grab rounded-full',
          'border-[3px] border-white bg-linear-to-br from-[#4fb3f2] to-[#4a5bd8]',
          'shadow-[0_4px_12px_rgba(74,91,216,0.45)] will-change-transform active:cursor-grabbing',
          'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4a5bd8]',
          'dark:border-[#1c2142] dark:from-[#5cc0ff] dark:to-[#8b98ff]',
          'dark:shadow-[0_0_14px_rgba(92,192,255,0.75)] dark:focus-visible:outline-[#5cc0ff]',
          armed && 'ring-4 ring-sky-400/30',
        )}
      >
        {/* Một vòng sóng; đổi key để chạy lại animation */}
        {pulse > 0 && (
          <span
            key={pulse}
            aria-hidden
            className={cn(
              'pointer-events-none absolute -inset-[3px] animate-cord-ring rounded-full border-2 border-[#4fb3f2] shadow-[0_0_8px_rgba(79,179,242,0.55)] dark:border-[#5cc0ff]',
            )}
          />
        )}
      </button>
    </div>
  );
};

export default ThemeCord;
