"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition duration-700 will-change-transform",
        on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "motion-reduce:transition-none motion-reduce:transform-none",
        className
      )}
    >
      {children}
    </div>
  );
}
