import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft, ArrowUpRight, GitFork } from "lucide-react";
import { projects } from "@/content/projects";
import { Diagram } from "@/components/diagram";
import { ProjectVisual } from "@/components/project-visual";
import { Decisions, ResultsTable } from "@/components/case-content";
import { ProjectArtifact } from "@/components/project-artifact";
import { ProjectEvidence } from "@/components/project-evidence";
import { projectEvidence } from "@/content/evidence";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p)
    return {
      title: "Project not found",
      robots: { index: false, follow: false },
    };
  return pageMetadata(p.title, p.description, `/projects/${p.slug}`);
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "handwriting-recognition")
    permanentRedirect("/projects/multilabel-image-classification");
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const proof = projectEvidence[p.slug];
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <article className={`container page-shell case-study case-${p.visual}`}>
      <Link href="/projects" className="back-link">
        <ArrowLeft size={15} /> All projects
      </Link>
      <header className="case-header">
        <p className="eyebrow">
          ENGINEERING STUDY {p.number} / {p.category}
        </p>
        <h1>{p.title}</h1>
        <p className="intro-copy">{p.description}</p>
        <div className="tags">
          {p.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </header>
      <div className="case-summary">
        <div>
          <strong>{proof?.metric || p.metric}</strong>
          <span>{proof?.metricLabel || p.metricLabel}</span>
        </div>
        <p>{p.summary}</p>
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          <GitFork size={15} /> View source <ArrowUpRight size={16} />
        </a>
      </div>
      {p.featured && p.slug !== "quickscout-football" && (
        <section className="case-artifact" aria-labelledby="artifact-title">
          <h2 id="artifact-title">A look at the actual work</h2>
          <ProjectArtifact slug={p.slug} />
        </section>
      )}
      <ProjectEvidence slug={p.slug} />
      <div className="case-art">
        <ProjectVisual project={p} />
        <div className="case-art-note">
          <p className="eyebrow">THE BIG PICTURE</p>
          <p>{p.shortTitle}</p>
        </div>
      </div>
      <section
        className="architecture-section"
        aria-labelledby="architecture-title"
      >
        <div className="architecture-heading">
          <p className="eyebrow">COMPONENT MAP</p>
          <h2 id="architecture-title">How the pieces connect.</h2>
        </div>
        <Diagram
          nodes={p.nodes}
          label={`${p.title} component-level architecture`}
        />
        {p.visual === "pipeline" && (
          <div className="orchestration-lane">
            <span className="eyebrow">SEPARATE LOCAL AIRFLOW PROOF</span>
            <ol>
              {[
                "Validate source",
                "Retry probe",
                "dbt build",
                "dbt test",
                "Verify idempotency",
                "Summarize",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p>
              Runs against seeded local PostgreSQL. Does not call API-Football
              or hosted Supabase.
            </p>
          </div>
        )}
      </section>
      <Decisions project={p} />
      <div className="case-layout">
        <aside className="case-toc">
          <p className="eyebrow">IN THIS STUDY</p>
          <nav aria-label="Case study contents">
            {p.sections.map((s, i) => (
              <a key={s.title} href={`#section-${i}`}>
                {s.title}
              </a>
            ))}
          </nav>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="text-link case-source"
          >
            Browse source <ArrowUpRight size={14} />
          </a>
        </aside>
        <div className="prose">
          {p.sections.map((s, i) => (
            <section id={`section-${i}`} key={s.title}>
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
              {s.points && (
                <ul>
                  {s.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {s.table && <ResultsTable table={s.table} />}{" "}
              {s.details && (
                <details className="technical-details">
                  <summary>{s.details.summary}</summary>
                  <p>{s.details.body}</p>
                </details>
              )}
            </section>
          ))}
          <aside className="evidence-note">
            <p className="eyebrow">EVIDENCE & SCOPE</p>
            <p>{p.evidence}</p>
          </aside>
        </div>
      </div>
      <Link href={`/projects/${next.slug}`} className="next-project">
        <div>
          <p className="eyebrow">NEXT ENGINEERING STUDY</p>
          <h2>{next.title}</h2>
        </div>
        <ArrowUpRight size={28} />
      </Link>
    </article>
  );
}
