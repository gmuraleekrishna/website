import { fallbackProjects, type Project } from "@/data/profile";

const GITHUB_USER = "gmuraleekrishna";
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`;

/** Maximum number of repositories surfaced in the grid. */
const LIMIT = 12;

type GhRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  fork: boolean;
  pushed_at: string;
  archived: boolean;
};

function toProject(repo: GhRepo): Project {
  return {
    name: repo.name,
    // Many older repos have no description; fall back to a readable name.
    description: repo.description ?? repo.name.replace(/[-_]+/g, " "),
    language: repo.language,
    stars: repo.stargazers_count,
    url: repo.html_url,
    topics: repo.topics ?? [],
  };
}

/**
 * Fetches public repositories at build time. Falls back to a curated static
 * list if the network or the GitHub API is unavailable, so the build never
 * breaks because of a remote outage or rate limit.
 */
export async function getRepos(): Promise<Project[]> {
  try {
    const res = await fetch(API_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "personal-website",
      },
      // Refresh once per day; a new repo appears on the site within 24h.
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);

    const repos = (await res.json()) as GhRepo[];

    const own = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
      .slice(0, LIMIT)
      .map(toProject);

    if (own.length === 0) throw new Error("No usable repositories returned");

    return own;
  } catch {
    return fallbackProjects;
  }
}
