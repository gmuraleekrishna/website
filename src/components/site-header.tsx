import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-base bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent font-mono text-sm font-semibold text-accent-fg">
            MG
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-fg-strong sm:block">
            {profile.shortName}
            <span className="text-subtle">, {profile.credentials}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-fg-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden size-9 items-center justify-center rounded-lg border border-border-base bg-surface text-muted transition-colors hover:border-border-strong hover:text-fg-strong sm:inline-flex"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden size-9 items-center justify-center rounded-lg border border-border-base bg-surface text-muted transition-colors hover:border-border-strong hover:text-fg-strong sm:inline-flex"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href={profile.links.email}
            aria-label="Email me"
            className="hidden size-9 items-center justify-center rounded-lg border border-border-base bg-surface text-muted transition-colors hover:border-border-strong hover:text-fg-strong sm:inline-flex"
          >
            <MailIcon className="size-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Scrollable nav on small screens instead of a hamburger menu. */}
      <nav
        aria-label="Primary mobile"
        className="flex gap-1 overflow-x-auto border-t border-border-base px-6 py-2 md:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-lg px-3 py-1.5 text-sm whitespace-nowrap text-muted transition-colors hover:bg-surface-hover hover:text-fg-strong"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
