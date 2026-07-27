"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: "div" | "section";
  delay?: number;
  className?: string;
};

/**
 * Lightweight scroll-reveal wrapper — no animation library required.
 * Adds `.is-visible` (see globals.css `.reveal`) once the element
 * enters the viewport, then stops observing.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = { transitionDelay: visible ? `${delay}ms` : "0ms" };
  const combinedClassName = `reveal ${visible ? "is-visible" : ""} ${className}`;

  if (as === "section") {
    return (
      <section ref={ref as never} style={style} className={combinedClassName}>
        {children}
      </section>
    );
  }

  return (
    <div ref={ref} style={style} className={combinedClassName}>
      {children}
    </div>
  );
}
