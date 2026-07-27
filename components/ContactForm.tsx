"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { SendIcon } from "./icons";

/**
 * No backend to submit to, so this composes a pre-filled email in the
 * visitor's own mail client — a genuinely working "send message" action
 * without needing a form-handling service.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${name || "your website"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-lg">
      <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
        <div className="space-y-sm">
          <label
            htmlFor="name"
            className="text-label-md font-label-md text-on-surface-variant"
          >
            FULL NAME
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-xl border border-white/10 bg-surface-container px-lg py-md text-on-surface transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>
        <div className="space-y-sm">
          <label
            htmlFor="email"
            className="text-label-md font-label-md text-on-surface-variant"
          >
            EMAIL ADDRESS
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-white/10 bg-surface-container px-lg py-md text-on-surface transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="space-y-sm">
        <label
          htmlFor="message"
          className="text-label-md font-label-md text-on-surface-variant"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project..."
          className="w-full rounded-xl border border-white/10 bg-surface-container px-lg py-md text-on-surface transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-md rounded-xl bg-primary py-md text-label-md font-label-md text-on-primary transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(192,193,255,0.4)]"
      >
        Send Message
        <SendIcon className="h-[18px] w-[18px]" />
      </button>
    </form>
  );
}
