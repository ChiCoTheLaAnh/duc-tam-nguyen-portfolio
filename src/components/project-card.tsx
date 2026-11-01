import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { projectStories } from "@/content/project-stories";
import { ProjectArtifact } from "./project-artifact";
export function ProjectCard({ project: p }: { project: Project }) {
  const story = projectStories[p.slug];
  return (
    <article className={`project-card story-card project-${p.visual}`}>
      <div className="card-body">
        <p className="eyebrow">
          {p.number} / {p.category}
        </p>
        <h3>
          <Link href={`/projects/${p.slug}`}>{p.title}</Link>
        </h3>
        {story ? (
          <div className="project-story">
            <p className="story-heading">{story.heading}</p>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p>{p.description}</p>
        )}
        <div className="story-links">
          <Link href={`/projects/${p.slug}`} className="text-link">
            Read the story <ArrowUpRight size={16} />
          </Link>
          <a href={p.github} target="_blank" rel="noreferrer">
            Code <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      {p.featured && <ProjectArtifact slug={p.slug} />}
    </article>
  );
}
