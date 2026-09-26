import { profile } from "@/data/profile";
import { Section } from "./section";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "./icons";

const channels = [
  {
    label: "Email",
    value: "gmuraleekrishna@outlook.com",
    href: profile.links.email,
    icon: MailIcon,
  },
  {
    label: "GitHub",
    value: "github.com/gmuraleekrishna",
    href: profile.links.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gmuraleekrishna",
    href: profile.links.linkedin,
    icon: LinkedInIcon,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title="Get in touch"
      description="Happy to discuss senior AI/ML and data engineering roles, or consult on generative AI architecture."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const external = channel.href.startsWith("http");

          return (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 rounded-xl border border-border-base bg-surface p-5 transition-colors hover:border-border-strong hover:bg-surface-hover"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-xs tracking-[0.14em] text-subtle uppercase">
                    {channel.label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-medium text-fg-strong">
                    {channel.value}
                  </span>
                </span>
                <ArrowUpRightIcon className="size-4 shrink-0 text-subtle transition-colors group-hover:text-accent" />
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex items-center gap-2 text-sm text-subtle">
        <PinIcon className="size-4" />
        {profile.location} · {profile.timezone}
      </div>
    </Section>
  );
}
