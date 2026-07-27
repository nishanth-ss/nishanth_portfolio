import { profile } from "@/lib/data";
import { MailIcon, LinkedInIcon, DownloadIcon } from "./icons";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const connect = [
  { href: `mailto:${profile.email}`, label: "Email", icon: MailIcon },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
    external: true,
  },
  { href: profile.resumeHref, label: "Resume", icon: DownloadIcon, download: true },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/5 bg-surface-container-lowest pb-lg pt-2xl">
      <div className="mx-auto mb-xl grid max-w-[1280px] grid-cols-1 gap-xl px-gutter md:grid-cols-4">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-md font-display text-headline-sm text-on-surface">
            Let&apos;s build something exceptional.
          </div>
          <p className="max-w-[28rem] font-body text-body-md text-on-surface-variant">
            {profile.role} specializing in high-performance web and mobile
            architectures, based in {profile.location}.
          </p>
        </div>

        <div>
          <div className="mb-lg text-label-md font-label-md uppercase text-primary">
            Quick Links
          </div>
          <ul className="space-y-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-body-md text-on-surface-variant hover:text-on-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-lg text-label-md font-label-md uppercase text-primary">
            Connect
          </div>
          <div className="flex gap-md">
            {connect.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                download={item.download}
                className="rounded-lg bg-surface-container p-sm transition-colors hover:bg-surface-container-high"
              >
                <item.icon className="h-5 w-5 text-on-surface" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-md border-t border-white/5 px-gutter pt-lg text-label-md text-on-surface-variant sm:flex-row">
        <span>
          &copy; {new Date().getFullYear()} {profile.name}. All rights
          reserved.
        </span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
