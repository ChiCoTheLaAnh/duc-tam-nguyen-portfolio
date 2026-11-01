import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { projectEvidence } from "@/content/evidence";
import { ProjectVisual } from "./project-visual";
import { EvidenceVisual } from "./evidence-visual";
export function ProjectCard({ project: p }: { project: Project }) {
  const proof = projectEvidence[p.slug];
  return (
    <article className={`project-card evidence-card project-${p.visual}`}>
      <div className="card-body">
        <p className="eyebrow">
          {p.number} / {p.category}
        </p>
        <h3>
          <Link href={`/projects/${p.slug}`}>{p.title}</Link>
        </h3>
        {proof ? (
          <>
            <dl className="project-answers">
              <div>
                <dt>Problem</dt>
                <dd>{proof.problem}</dd>
              </div>
              <div>
                <dt>Built</dt>
                <dd>{proof.built}</dd>
              </div>
              <div className="answer-result">
                <dt>Result</dt>
                <dd>{proof.result}</dd>
              </div>
            </dl>
            <p className="validation-scope">{proof.scope}</p>
          </>
        ) : (
          <p>{p.description}</p>
        )}
        <div className="card-bottom">
          <div>
            <strong>{proof?.metric || p.metric}</strong>
            <span>{proof?.metricLabel || p.metricLabel}</span>
          </div>
          <Link href={`/projects/${p.slug}`} className="text-link">
            Case study <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="card-evidence-link">
          <span>Evidence</span>
          <a
            href={proof?.sources[0]?.href || p.github}
            target="_blank"
            rel="noreferrer"
          >
            {proof?.sources[0]?.label || "Source repository"}{" "}
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className="project-evidence-visual">
        {proof?.chart ? (
          <EvidenceVisual kind={proof.chart} />
        ) : (
          <ProjectVisual project={p} />
        )}
      </div>
    </article>
  );
}
