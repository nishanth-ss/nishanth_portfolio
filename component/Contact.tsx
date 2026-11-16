
"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

const contactDetails = [
  {
    label: "Email",
    value: "nishanthsekar1@gmail.com",
    href: "mailto:nishanthsekar1@gmail.com",
    icon: "✉",
  },
  {
    label: "Phone",
    value: "+91 89408 91631",
    href: "tel:+918940891631",
    icon: "☎",
  },
  {
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: null,
    icon: "⌖",
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData(initialFormData);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-primary/40 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-primary/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Get In Touch
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Let's Work Together
          </h2>

          <p className="mt-5 text-base leading-8 text-foreground/70">
            Have a project in mind, a job opportunity, or just
            want to connect? I'd love to hear from you.
            Feel free to reach out anytime.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left Side */}
          <Reveal className="relative overflow-hidden rounded-3xl bg-primary p-8 text-white lg:col-span-2 md:p-10">
            {/* Decorative Background */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold">
                Let's talk!
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                I'm always open to discussing new projects,
                creative ideas, or opportunities to be part
                of your vision.
              </p>

              {/* Contact Details */}
              <div className="mt-12 space-y-7">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl text-secondary">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 inline-block text-sm font-medium transition-colors hover:text-secondary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-14 border-t border-white/15 pt-8">
                <p className="mb-4 text-sm font-semibold">
                  Connect with me
                </p>

                <a
                  href="https://www.linkedin.com/in/nishanth-sekar-2b48082b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition-all hover:border-secondary hover:bg-secondary hover:text-white"
                >
                  LinkedIn <span>↗</span>
                </a>
              </div>

              <div className="mt-12">
                <p className="text-sm font-medium text-white/50">
                  Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Side - Contact Form */}
          <Reveal
            className="rounded-3xl border border-primary/10 bg-white p-8 shadow-xl shadow-primary/[0.06] lg:col-span-3 md:p-10"
            delay={100}
          >
            <h3 className="text-2xl font-bold text-primary">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-foreground/60">
              Fill out the form below and I'll get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              {/* Name & Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-primary"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-foreground/40 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-primary"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-foreground/40 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-primary/15 bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-foreground/40 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full resize-none rounded-xl border border-primary/15 bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-foreground/40 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent ✓"
                    : "Send Message"}
              </button>

              {/* Success & Error Messages */}
              <div aria-live="polite">
                {status === "success" && (
                  <p className="text-sm font-medium text-green-600">
                    Thank you! Your message has been sent successfully.
                    I'll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm font-medium text-red-600">
                    Something went wrong. Please try again or contact me directly via email.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
