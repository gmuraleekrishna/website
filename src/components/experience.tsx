"use client";

import { useState } from "react";
import { experience } from "@/data/profile";
import { Section } from "./section";
import { ChevronDownIcon } from "./icons";

export function Experience() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? experience : experience.filter((role) => !role.collapsed);
  const hiddenCount = experience.length - visible.length;

  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      title="Professional experience"
      description="Twelve years across industry and academia, from embedded and web engineering to production machine learning and generative AI."
    >
      <ol className="relative space-y-10">
        {/* Timeline rail */}
        <span
          className="absolute top-2 bottom-2 left-[7px] w-px bg-border-base sm:left-[9px]"
          aria-hidden="true"
        />

        {visible.map((role) => (
          <li key={`${role.company}-${role.title}`} className="relative pl-8 sm:pl-10">
            <span
              className="absolute top-1.5 left-0 size-[15px] rounded-full border-2 border-accent bg-bg sm:size-[19px]"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-lg font-semibold tracking-tight text-fg-strong">
                {role.title}
                <span className="text-subtle"> · </span>
                <span className="text-fg">{role.company}</span>
              </h3>
              <p className="shrink-0 font-mono text-xs tracking-tight text-subtle sm:text-right">
                {role.period}
                <span className="block sm:inline sm:before:content-[',_']">{role.location}</span>
              </p>
            </div>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {role.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border-base bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <ul className="mt-4 space-y-2">
              {role.highlights.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-[9px] size-1 shrink-0 rounded-full bg-subtle"
                    aria-hidden="true"
                  />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {hiddenCount > 0 ? (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          className="mt-10 inline-flex h-11 items-center gap-2 rounded-lg border border-border-base bg-surface px-5 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-hover"
        >
          {showAll ? "Show recent roles only" : `Show ${hiddenCount} earlier roles`}
          <ChevronDownIcon
            className={`size-4 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      ) : null}
    </Section>
  );
}
