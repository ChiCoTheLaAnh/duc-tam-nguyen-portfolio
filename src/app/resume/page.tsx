import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { hasResume } from "@/lib/resume";
import { site, experience, capabilities } from "@/content/site";
import { resumeProjects } from "@/content/resume";
import { projects } from "@/content/projects";
import { SocialLinks } from "@/components/shared";
export const metadata = pageMetadata(
  "Resume",
  `${site.fullName} — education, industry experience, projects, technical skills, and teaching. Read the complete resume online.`,
  "/resume",
);
const sections = [
  ["Education", "resume-education"],
  ["Experience", "resume-experience"],
  ["Projects", "resume-projects"],
  ["Skills", "resume-skills"],
  ["Teaching", "resume-teaching"],
];
export default function Resume() {
  return (
    <div className="container resume-page">
      <div className="resume-page-top">
        <Link href="/" className="back-link">
          <ArrowLeft size={15} /> Back to my portfolio
        </Link>
        {hasResume() && (
          <a
            href="/resume.pdf"
            download="Tam-Nguyen-Resume.pdf"
            className="resume-pdf-action"
          >
            <Download size={16} /> Download PDF
          </a>
        )}
      </div>
      <div className="resume-reading-layout">
        <nav className="resume-toc" aria-label="Resume sections">
          <span className="eyebrow">ON THIS PAGE</span>
          {sections.map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <article className="resume-document">
          <header className="resume-heading">
            <p className="eyebrow">MY RESUME</p>
            <h1>{site.fullName}</h1>
            <p>Computer Science student · {site.location}</p>
            <SocialLinks />
          </header>
          <section id="resume-education" className="resume-section">
            <h2>Education</h2>
            <div className="resume-entry">
              <header>
                <h3>{site.university}</h3>
                <span>{site.educationDates}</span>
              </header>
              <p className="resume-role">
                {site.education} · Minor in {site.minor}
              </p>
              <p className="resume-facts">
                GPA {site.gpa} <span aria-hidden="true">·</span>{" "}
                {site.achievement}
              </p>
              <p className="resume-coursework">
                <strong>Coursework:</strong> {site.coursework.join(", ")}
              </p>
            </div>
          </section>
          <section id="resume-experience" className="resume-section">
            <h2>Industry experience</h2>
            {experience
              .filter((e) => e.kind === "internship")
              .map((e) => (
                <div className="resume-entry" key={e.company}>
                  <header>
                    <h3>
                      {e.company}{" "}
                      <span className="resume-organization">
                        ({e.organization})
                      </span>
                    </h3>
                    <span>{e.dates}</span>
                  </header>
                  <div className="resume-entry-meta">
                    <p className="resume-role">{e.role}</p>
                    <span>{e.location}</span>
                  </div>
                  <ul>
                    {e.resumeBullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {e.company === "Viettel AI" && (
                    <p className="resume-context">
                      The gallery size refers to the external NIST benchmark,
                      not an internal system I deployed.
                    </p>
                  )}
                </div>
              ))}
          </section>
          <section id="resume-projects" className="resume-section">
            <h2>Selected projects</h2>
            {resumeProjects.map((entry) => {
              const p = projects.find((p) => p.slug === entry.slug);
              if (!p) return null;
              return (
                <div className="resume-entry" key={entry.slug}>
                  <h3>
                    <Link href={`/projects/${p.slug}`}>
                      {p.title}
                      <ArrowUpRight size={14} />
                    </Link>
                  </h3>
                  <ul>
                    {entry.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <a
                    className="resume-source"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code <ArrowUpRight size={12} />
                  </a>
                </div>
              );
            })}
          </section>
          <section id="resume-skills" className="resume-section">
            <h2>Technical skills</h2>
            <dl className="resume-skill-list">
              {capabilities.map((c) => (
                <div key={c.title}>
                  <dt>{c.title}</dt>
                  <dd>{c.tools.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section id="resume-teaching" className="resume-section">
            <h2>Teaching experience</h2>
            {experience
              .filter((e) => e.kind === "teaching")
              .map((e) => (
                <div className="resume-entry" key={e.company}>
                  <header>
                    <h3>{e.company}</h3>
                    <span>{e.dates}</span>
                  </header>
                  <div className="resume-entry-meta">
                    <p className="resume-role">
                      {e.role} · {e.field}
                    </p>
                    <span>{e.location}</span>
                  </div>
                  <ul>
                    {e.resumeBullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </section>
        </article>
      </div>
    </div>
  );
}
