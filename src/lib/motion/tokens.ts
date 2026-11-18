type Bezier = [number, number, number, number];

export const DURATION = {
  fast: 0.15, // hover, dropdown nhỏ
  base: 0.3, // phần lớn UI
  slow: 0.5, // hero, section vào trang
} as const;

export const EASE: Record<'out' | 'inOut', Bezier> = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
};

export const STAGGER = {
  tight: 0.05, // danh sách dài (>8 item)
  base: 0.08,
  loose: 0.12, // 2-4 khối lớn
} as const;

export const DELAY = {
  none: 0,
  short: 0.1,
  base: 0.2, // chờ card cha xuất hiện rồi con mới chạy
} as const;

export type StaggerSpeed = keyof typeof STAGGER;
export type DelayStep = keyof typeof DELAY;
