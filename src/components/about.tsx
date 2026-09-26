import { achievements, profile, skillGroups } from "@/data/profile";
import { Section } from "./section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="Engineer first, scientist second"
      description="I work across the whole path from research to production: modelling, evaluation, and the data platforms that make AI systems reliable at scale."
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-5 text-pretty leading-relaxed text-muted">
          <p>
            I&apos;m a senior-level AI/ML scientist and data engineer based in {profile.location}. My
            current work centres on taking generative AI from prototype to production — designing AI
            architecture, building retrieval and evaluation systems, and leading the data platforms
            underneath them.
          </p>
          <p>
            Before that, I spent five years at Hitachi Rail STS building predictive maintenance
            models and large-scale ETL and lakehouse platforms for autonomous rail systems, including
            custom parsers for multi-format locomotive logs — over 80,000 lines of code.
          </p>
          <p>
            My foundation is software engineering. Ten-plus years shipping production systems in
            Ruby, Python and TypeScript means I can design the architecture, review the code and own
            the operational outcome — not just the model.
          </p>
          <p>
            I hold a PhD in Computer Science from Edith Cowan University, with research spanning
            robotics, computer vision and language modelling, published at IROS 2024 and ACL 2024.
          </p>

          <div className="!mt-8 rounded-xl border border-border-base bg-surface p-5">
            <h3 className="text-sm font-semibold tracking-tight text-fg-strong">
              Leadership &amp; achievements
            </h3>
            <ul className="mt-3 space-y-2">
              {achievements.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs tracking-[0.16em] text-subtle uppercase">
                {group.label}
              </h3>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border-base bg-surface px-2.5 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
