import Link from "next/link";
import { ArrowUpRight, GitFork } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "./project-visual";
export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className={`project-card project-${p.visual}`}>
      <Link
        href={`/projects/${p.slug}`}
        className="project-visual-link"
        aria-label={`Read ${p.title} case study`}
      >
        <ProjectVisual project={p} />
      </Link>
      <div className="card-body">
        <div className="eyebrow">
          <span>
            {p.number} / {p.category}
          </span>
          <ArrowUpRight size={18} />
        </div>
        <h3>
          <Link href={`/projects/${p.slug}`}>{p.title}</Link>
        </h3>
        <p className="card-concept">{p.shortTitle}</p>
        <p>{p.description}</p>
        <div className="tags">
          {p.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="card-bottom">
          <div>
            <strong>{p.metric}</strong>
            <span>{p.metricLabel}</span>
          </div>
          <Link href={`/projects/${p.slug}`} className="text-link">
            Read the study <ArrowUpRight size={16} />
          </Link>
        </div>
        <a
          className="repository-link"
          href={p.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitFork size={14} /> Source repository <ArrowUpRight size={12} />
        </a>
      </div>
    </article>
  );
}
