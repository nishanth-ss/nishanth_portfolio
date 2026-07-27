"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/lib/data";

/**
 * Shows /public/profile.jpg (or .png/.jpeg) when present.
 * Falls back to a gradient initials badge so the site looks
 * complete before a real photo is added — just drop a photo at
 * public/profile.jpg (recommended: square, at least 480x480px).
 */
export default function Avatar({
  size = 208,
  shape = "circle",
  className = "",
}: {
  size?: number;
  shape?: "circle" | "square";
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const radius = shape === "circle" ? "rounded-full" : "rounded-2xl";

  if (failed) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`flex shrink-0 items-center justify-center ${radius} bg-gradient-to-br from-primary via-secondary to-tertiary text-on-primary ${className}`}
      >
        <span
          className="font-display font-semibold tracking-wide text-on-primary-fixed"
          style={{ fontSize: size * 0.32 }}
        >
          {profile.initials}
        </span>
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative shrink-0 overflow-hidden ${radius} ${className}`}
    >
      <Image
        src="/profile.jpg"
        alt={profile.name}
        fill
        sizes={`${size}px`}
        priority
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
