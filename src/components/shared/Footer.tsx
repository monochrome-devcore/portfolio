import { cn } from "@/lib/utils";
import React from "react";

const Footer = () => {
  return (
    <footer
      className={cn(
        "py-10 text-xs text-neutral-500 text-center bg-linear-to-b from-[hsla(0,0%,100%,0.1)] to-[hsl(215,100%,94%)] max-w-none",
      )}
    >
      <div className="container mx-auto">
        <p className="">© Monochrome Portfolio ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
