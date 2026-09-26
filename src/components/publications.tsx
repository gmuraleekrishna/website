import { education, publications } from "@/data/profile";
import { Section } from "./section";
import { ArrowUpRightIcon } from "./icons";

/** Small outbound link chip, e.g. "arXiv", "Code", "IEEE Xplore". */
function LinkChip({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-md border border-border-base bg-bg px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:border-border-strong hover:text-accent"
    >
      {label}
      <ArrowUpRightIcon className="size-3" />
    </a>
  );
}

export function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="03 — Research"
      title="Publications & research"
      description="Peer-reviewed work at the intersection of robotics, computer vision and language modelling."
    >
      <ol className="space-y-4">
        {publications.map((pub) => (
          <li
            key={pub.title}
            className="group rounded-xl border border-border-base bg-surface p-5 transition-colors hover:border-border-strong"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <h3 className="text-pretty font-medium tracking-tight text-fg-strong">{pub.title}</h3>
              <span className="shrink-0 font-mono text-xs text-subtle">{pub.year}</span>
            </div>
            <p className="mt-2 text-sm text-muted">{pub.venue}</p>
            {pub.note ? (
              <p className="mt-2 text-pretty text-sm text-subtle">{pub.note}</p>
            ) : null}
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {pub.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {pub.links?.length ? (
              <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-border-base pt-4">
                {pub.links.map((link) => (
                  <li key={link.href}>
                    <LinkChip label={link.label} href={link.href} />
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold tracking-tight text-fg-strong sm:text-3xl">
          Education
        </h3>
        <ul className="mt-6 space-y-4">
          {education.map((qual) => (
            <li
              key={qual.degree}
              className="rounded-xl border border-border-base bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h4 className="text-pretty font-medium tracking-tight text-fg-strong">
                  {qual.degree}
                </h4>
                <span className="shrink-0 font-mono text-xs text-subtle">{qual.period}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">
                {qual.institution}
                {qual.detail ? (
                  <span className="text-subtle"> — {qual.detail}</span>
                ) : null}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {qual.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-md border border-border-base px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              {qual.link ? (
                <div className="mt-4 border-t border-border-base pt-4">
                  <LinkChip label={qual.link.label} href={qual.link.href} />
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
