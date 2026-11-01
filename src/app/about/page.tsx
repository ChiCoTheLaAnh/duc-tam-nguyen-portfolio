import { pageMetadata } from "@/lib/metadata";
import { PageIntro, ContactCTA } from "@/components/shared";
import { site, capabilities } from "@/content/site";
export const metadata = pageMetadata(
  "About",
  "Meet Tam Nguyen, a UIC computer science student focused on data engineering, machine learning, and production software.",
  "/about",
);
export default function About() {
  return (
    <>
      <div className="container page-shell">
        <PageIntro label="ABOUT TAM" title="A bit about me.">
          I’m {site.fullName}, but I go by Tam. I’m a Computer Science student
          at UIC, with a minor in Mathematics and an interest in data and
          machine learning.
        </PageIntro>
        <div className="about-layout">
          <div className="education-card">
            <span className="eyebrow">CURRENTLY AT</span>
            <span className="uic-mark">
              UIC<span>↗</span>
            </span>
            <h2>{site.university}</h2>
            <p>
              {site.education}
              <br />
              Minor in {site.minor}
            </p>
            <div className="education-facts">
              <span>
                GPA <strong>{site.gpa}</strong>
              </span>
              <span>{site.achievement}</span>
            </div>
            <div className="education-bottom">
              Expected graduation<strong>{site.graduation}</strong>
            </div>
          </div>
          <div className="about-story">
            <h2>What I like working on.</h2>
            <p>
              I like projects where I can follow the whole process: get the
              data, build something with it, and figure out whether it actually
              works. That’s taken me from football data pipelines to
              recommendation systems and video tracking.
            </p>
            <p>
              I’ve also learned a lot from two industry internships and from
              teaching. Explaining a concept in office hours is a good way to
              find out whether I understand it myself.
            </p>
            <p>
              {site.introduction.opportunities} I’d like to keep learning from
              people who care about both the models and the software around
              them.
            </p>
            <div className="tags">
              {[
                "Python & SQL",
                "Data pipelines",
                "Machine learning",
                "Backend APIs",
                "Testing & MLOps",
              ].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="coursework">
              <p className="eyebrow">SELECTED COURSEWORK</p>
              <p>{site.coursework.join(" · ")}</p>
            </div>
          </div>
        </div>
        <section className="about-capabilities">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>The tools I work with.</h2>
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
      </div>
      <ContactCTA />
    </>
  );
}
