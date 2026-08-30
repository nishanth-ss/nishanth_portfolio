"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { SendIcon } from "./icons";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Portfolio inquiry from ${name}`,
          from_name: name,
          email: email,
          message: message,

          // Your email
          to: "nishanthsekar1@gmail.com",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-md rounded-xl bg-primary py-md text-label-md font-label-md text-on-primary transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <SendIcon className="h-[18px] w-[18px]" />
      </button>

      {status === "success" && (
        <p className="text-center text-sm text-green-400">
          Message sent successfully! I'll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}