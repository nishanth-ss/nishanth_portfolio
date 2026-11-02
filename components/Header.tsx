"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { MenuIcon, CloseIcon } from "./icons";
import Avatar from "./Avatar";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-surface-container-lowest/60 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-gutter">
        <a
          href="#top"
          className="font-display text-headline-sm tracking-tight text-primary"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-xl lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-label-md font-label-md transition-all ${
                active === item.href
                  ? "font-bold text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-md">
          <a
            href="#contact"
            className="hidden rounded-xl bg-primary px-lg py-sm text-label-md font-label-md text-on-primary transition-all hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] md:block"
          >
            Get in touch
          </a>
          <Avatar size={36} shape="circle" className="hidden sm:block" />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-white/5 lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-surface-container-lowest px-gutter pb-lg pt-sm lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-md py-sm text-label-md font-label-md ${
                  active === item.href
                    ? "bg-primary/10 font-bold text-primary"
                    : "text-on-surface-variant hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-primary px-md py-sm text-center text-label-md font-label-md text-on-primary"
            >
              Get in touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
