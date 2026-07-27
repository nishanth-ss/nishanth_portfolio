import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon } from "./icons";

const cards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: PhoneIcon,
  },
  {
    label: "Location",
    value: profile.location,
    icon: MapPinIcon,
  },
  {
    label: "LinkedIn",
    value: "nishanth-sekar",
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-container-low py-2xl">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-2xl px-gutter lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="mb-md block text-label-md font-label-md uppercase text-primary">
            Contact Me
          </span>
          <h2 className="mb-xl font-display text-headline-md text-on-surface">
            Let&apos;s build something exceptional.
          </h2>
          <div className="space-y-md">
            {cards.map((card) => {
              const content = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                    <card.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-body-md text-on-surface">
                      {card.label}
                    </div>
                    <div className="text-label-md text-on-surface-variant">
                      {card.value}
                    </div>
                  </div>
                </>
              );

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-lg rounded-xl border border-white/5 bg-surface-container-highest/30 p-lg transition-colors hover:bg-surface-container-highest/50"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={card.label}
                  className="flex items-center gap-lg rounded-xl border border-white/5 bg-surface-container-highest/30 p-lg"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal
          delay={150}
          className="rounded-3xl border border-white/10 bg-surface-container-highest/20 p-xl shadow-2xl backdrop-blur-2xl lg:col-span-7"
        >
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
