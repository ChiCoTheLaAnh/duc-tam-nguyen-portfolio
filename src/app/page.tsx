import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { experience, site } from "@/content/site";
import { ProjectCard } from "@/components/project-card";
import { ContactCTA, SocialLinks } from "@/components/shared";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "CS Student & Aspiring Engineer",
  site.description,
  "/",
);
export default function Home() {
  return (
    <>
      <section className="container hero hero-personal">
        <div className="hero-copy">
          <p className="eyebrow">{site.location} · UIC ’27</p>
          <h1>
            Hi, I’m <span>{site.name}.</span>
          </h1>
          <p className="personal-lead">
            I’m studying Computer Science at the University of Illinois Chicago,
            with a minor in {site.minor}. I graduate in {site.graduation}.
          </p>
          <p className="personal-intro">{site.introduction.interests}</p>
          <p className="opportunity-note">{site.introduction.opportunities}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button dark">
              View Projects <ArrowUpRight size={17} />
            </Link>
            <Link href="/resume" className="button outline">
              Read my resume <ArrowUpRight size={16} />
            </Link>
          </div>
          <SocialLinks compact />
        </div>
      </section>
      <section className="container section recruiter-experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ALONG THE WAY</p>
            <h2>Where I’ve worked and taught.</h2>
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
              <p className="experience-ownership">{e.homeSummary}</p>
              <strong>{e.highlight}</strong>
            </article>
          ))}
        </div>
        <div className="resume-at-a-glance" aria-label="Resume at a glance">
          <div>
            <span className="eyebrow">RESUME, AT A GLANCE</span>
            <p>BS Computer Science · Mathematics minor</p>
            <p>
              UIC · {site.graduation} · GPA {site.gpa} · {site.achievement}
            </p>
          </div>
          <Link href="/resume" className="text-link">
            Education, experience & skills <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section
        id="selected-work"
        className="section container selected-evidence"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW PROJECTS</p>
            <h2>Things I’ve been building.</h2>
          </div>
          <Link href="/projects" className="text-link">
            All projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="project-grid featured-grid stories-first">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
        <p className="section-note">
          The case studies include architecture, benchmarks, source records, and
          the parts I’d change next.
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
