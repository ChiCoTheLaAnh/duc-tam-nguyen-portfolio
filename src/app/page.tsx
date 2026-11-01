import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { projects } from "@/content/projects";
import { experience, site } from "@/content/site";
import { ProjectCard } from "@/components/project-card";
import { ContactCTA, SocialLinks } from "@/components/shared";
import { pageMetadata } from "@/lib/metadata";
import { hasResume } from "@/lib/resume";
export const metadata = pageMetadata(
  "Data Engineer & ML Engineer",
  site.description,
  "/",
);
export default function Home() {
  return (
    <>
      <section className="container hero hero-focused">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> TAM NGUYEN{" "}
            <span className="eyebrow-divider">/</span> {site.location}
          </p>
          <h1 className="hero-role">
            {site.positioning.roles[0]} <br />
            <span>&amp; {site.positioning.roles[1]}</span>
          </h1>
          <p className="hero-description">{site.positioning.summary}</p>
          <p className="hero-detail hero-credentials">
            Computer Science @ UIC · Graduating {site.graduation}
          </p>
          <ul className="hero-proof" aria-label="Engineering highlights">
            {site.positioning.proofPoints.map((point) => (
              <li key={point.label}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link href="/projects" className="button dark">
              View Projects <ArrowUpRight size={18} />
            </Link>
            {hasResume() ? (
              <a
                href="/resume.pdf"
                download="Tam-Nguyen-Resume.pdf"
                className="button outline"
              >
                Download Resume <Download size={17} />
              </a>
            ) : (
              <Link href="/resume" className="button outline">
                View Resume <ArrowUpRight size={17} />
              </Link>
            )}
          </div>
          <SocialLinks compact />
        </div>
      </section>
      <section
        id="selected-work"
        className="section container selected-evidence"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED ENGINEERING WORK</p>
            <h2>What I built. What changed.</h2>
          </div>
          <Link href="/projects" className="text-link">
            All projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="project-grid featured-grid evidence-first">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
        <p className="section-note">
          Architecture, decisions, and evaluation—not just the final score. Each
          study links to its source.
        </p>
      </section>
      <section className="container section recruiter-experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / INDUSTRY & TEACHING</p>
            <h2>Experience that supports the work.</h2>
          </div>
          <Link href="/experience" className="text-link">
            Full experience <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="recruiter-experience-grid">
          {experience.map((e) => (
            <article key={e.company}>
              <span className="experience-date">{e.dates}</span>
              <h3>{e.company}</h3>
              <p>{e.role}</p>
              <strong>{e.highlight}</strong>
            </article>
          ))}
        </div>
        <p className="recruiter-about">
          Computer Science at {site.university}, with a minor in {site.minor}.{" "}
          <Link href="/about" className="text-link">
            Background & technical skills <ArrowUpRight size={14} />
          </Link>
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
