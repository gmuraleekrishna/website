import { profile } from "@/data/profile";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
        <div className="flex items-center gap-2.5">
          <span
            className="inline-flex size-2.5 rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          <span className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
            Open to senior AI / ML roles
          </span>
        </div>

        <h1 className="mt-7 text-4xl font-semibold tracking-tight text-balance text-fg-strong sm:text-6xl">
          {profile.name}
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-4 font-mono text-sm tracking-tight text-accent sm:text-base">
          {profile.role}
        </p>

        <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {profile.summary}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {profile.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border-base bg-surface px-3 py-1 text-xs text-muted sm:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="inline-flex h-11 items-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            View experience
          </a>
          <a
            href={profile.links.resume}
            download
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border-base bg-surface px-5 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-hover"
          >
            <DownloadIcon className="size-4" />
            Download CV
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border-base bg-surface px-5 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-hover"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-subtle">
          <span className="inline-flex items-center gap-1.5">
            <PinIcon className="size-4" />
            {profile.location}
          </span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <MailIcon className="size-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
