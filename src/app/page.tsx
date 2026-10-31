import Link from "next/link";
import { ArrowRight, ArrowUpRight, MoveDown } from "lucide-react";
import { projects } from "@/content/projects";
import { experience, site, capabilities } from "@/content/site";
import { ProjectCard } from "@/components/project-card";
import { HeroLab } from "@/components/hero-lab";
import { ContactCTA, SocialLinks } from "@/components/shared";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Data, ML & AI Engineering",
  site.description,
  "/",
);
export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> TAM NGUYEN{" "}
            <span className="eyebrow-divider">/</span> {site.location}
          </p>
          <h1>
            Reliable data.
            <br />
            Intelligent <span>applications.</span>
          </h1>
          <p className="hero-description">
            I build the systems
            <br />
            between the two.
          </p>
          <p className="hero-detail">
            I’m {site.name.split(" ")[0]}, a computer science student at UIC. My
            work connects dependable pipelines, measured model decisions, and
            software people can use.
          </p>
          <div className="hero-actions">
            <Link href="/projects" className="button dark">
              Explore My Work <ArrowUpRight size={18} />
            </Link>
            <Link href="/resume" className="button outline">
              View Resume <ArrowUpRight size={17} />
            </Link>
          </div>
          <SocialLinks compact />
        </div>
        <HeroLab />
        <div className="hero-foot">
          <span>DATA ENGINEERING / MACHINE LEARNING / COMPUTER VISION</span>
          <a href="#selected-work">
            Follow the work <MoveDown size={14} />
          </a>
        </div>
      </section>
      <section id="selected-work" className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / ENGINEERING IN PRACTICE</p>
            <h2>
              Different problems.
              <br />
              <span className="muted">The same care in the details.</span>
            </h2>
          </div>
          <Link href="/projects" className="text-link">
            All projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="project-grid featured-grid">
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
      <section className="experience-preview section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">02 / INDUSTRY & TEACHING</p>
            <h2>
              Useful work.
              <br />
              <span className="muted">In good company.</span>
            </h2>
            <p className="section-copy">
              Face recognition at Viettel AI. Customer modeling at Viettel High
              Tech. Helping more than 100 students at UIC.
            </p>
            <Link href="/experience" className="text-link">
              Explore my experience <ArrowRight size={17} />
            </Link>
          </div>
          <div className="experience-list">
            {experience.map((e, i) => (
              <Link
                href="/experience"
                className="experience-row"
                key={e.company}
              >
                <span className="index">0{i + 1}</span>
                <div>
                  <span className="experience-date">{e.dates}</span>
                  <h3>{e.company}</h3>
                  <p>{e.role}</p>
                  <span className="experience-impact">{e.highlight}</span>
                </div>
                <ArrowUpRight size={19} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container section capabilities">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / TECHNICAL CAPABILITIES</p>
            <h2>
              The tools follow
              <br />
              <span className="muted">the problem.</span>
            </h2>
          </div>
          <p className="heading-note">
            A practical toolkit for the path
            <br />
            from source data to running software.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((c, i) => (
            <article key={c.title} className="capability-card">
              <span className="index">0{i + 1}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="tags">
                {c.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="container section about-preview">
        <div>
          <p className="eyebrow">04 / A LITTLE ABOUT ME</p>
          <h2>
            Curious about models.
            <br />
            Careful about systems.
          </h2>
          <div className="about-stamp">
            {site.location.toUpperCase()} <span>↗</span> UIC ’27
          </div>
        </div>
        <div>
          <p>
            I enjoy the space where data science meets software engineering:
            making a pipeline dependable, choosing the right model, and turning
            an experiment into an application someone can use.
          </p>
          <p>
            I’m studying Computer Science with a minor in {site.minor} at{" "}
            {site.university}, graduating in {site.graduation}. I’m looking
            toward work in data, ML, and AI engineering.
          </p>
          <Link href="/about" className="text-link">
            More about me <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
