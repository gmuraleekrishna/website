import { featuredProjects, profile, type Project } from "@/data/profile";
import { getRepos } from "@/lib/github";
import { Section } from "./section";
import { ArrowUpRightIcon, GitHubIcon, StarIcon } from "./icons";

/** Dot colours for the most common GitHub languages. */
const languageColours: Record<string, string> = {
  Python: "#3572A5",
  Jupyter: "#DA5B0B",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Verilog: "#b2b7f8",
  Ruby: "#701516",
  C: "#555555",
  "C++": "#f34b7d",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  Shell: "#89e051",
};

function LanguageDot({ language }: { language: string | null }) {
  if (!language) return null;
  const colour = languageColours[language] ?? "#8b95a7";

  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="size-2 rounded-full"
        style={{ backgroundColor: colour }}
        aria-hidden="true"
      />
      {language}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group relative flex flex-col rounded-xl border border-border-base bg-surface p-5 transition-colors hover:border-border-strong hover:bg-surface-hover">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium tracking-tight break-all text-fg-strong">{project.name}</h3>
        <ArrowUpRightIcon className="mt-0.5 size-4 shrink-0 text-subtle transition-colors group-hover:text-accent" />
      </div>

      <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-subtle">
        <LanguageDot language={project.language} />
        {project.stars > 0 ? (
          <span className="inline-flex items-center gap-1">
            <StarIcon className="size-3" />
            {project.stars}
          </span>
        ) : null}
      </div>

      {/* Sits above the stretched card link so it stays independently clickable. */}
      {project.paper ? (
        <a
          href={project.paper.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-3 inline-flex w-fit items-center gap-1 rounded-md border border-border-base bg-bg px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:border-border-strong hover:text-accent"
        >
          {project.paper.label}
          <ArrowUpRightIcon className="size-3" />
        </a>
      ) : null}

      {/* Stretched link keeps the whole card clickable. */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span className="sr-only">View {project.name} on GitHub</span>
      </a>
    </li>
  );
}

export async function Projects() {
  const repos = await getRepos();
  const featuredNames = new Set(featuredProjects.map((p) => p.name));
  const rest = repos.filter((repo) => !featuredNames.has(repo.name));

  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title="Selected projects"
      description="Research code, robotics experiments and applied machine learning work from my GitHub."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>

      {rest.length > 0 ? (
        <div className="mt-12">
          <h3 className="font-mono text-xs tracking-[0.16em] text-subtle uppercase">
            More from GitHub
          </h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </ul>
        </div>
      ) : null}

      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex h-11 items-center gap-2 rounded-lg border border-border-base bg-surface px-5 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-hover"
      >
        <GitHubIcon className="size-4" />
        See all {`repos`} on GitHub
      </a>
    </Section>
  );
}
