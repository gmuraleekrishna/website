import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Small uppercase label shown above the heading, e.g. "02 — Experience". */
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section scroll-mt-24 border-t border-border-base ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
        <header className="mb-12 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs tracking-[0.18em] text-accent uppercase">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-fg-strong sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted">{description}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
