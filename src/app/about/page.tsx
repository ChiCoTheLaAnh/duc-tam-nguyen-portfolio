import { pageMetadata } from "@/lib/metadata";
import { PageIntro, ContactCTA } from "@/components/shared";
import { site, capabilities } from "@/content/site";
export const metadata = pageMetadata(
  "About",
  "Meet Tam Nguyen, a UIC computer science student focused on data engineering, machine learning, and production software.",
  "/about",
);
const principles = [
  [
    "01",
    "Start with the problem.",
    "I want to understand what needs to work before choosing a model or framework. A useful system begins with a clear purpose.",
  ],
  [
    "02",
    "Make reliability visible.",
    "Tests, validation, and clear interfaces are part of the work. I care about what happens when inputs change or a pipeline runs again.",
  ],
  [
    "03",
    "Let evidence guide complexity.",
    "A simpler model can be the better engineering choice. I’m interested in measurable improvements, reproducible evaluation, and honest trade-offs.",
  ],
];
export default function About() {
  return (
    <>
      <div className="container page-shell">
        <PageIntro
          label="ABOUT TAM"
          title="An engineer’s curiosity. A builder’s mindset."
        >
          I’m {site.fullName}. I go by Tam, and I’m interested in how data
          becomes something useful.
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
            <h2>The space between an experiment and an application.</h2>
            <p>
              That’s where I enjoy working. A model is one part of the story;
              the data feeding it, the API serving it, and the tests keeping it
              dependable matter just as much.
            </p>
            <p>
              My work spans recommendation systems, football data pipelines,
              model-serving APIs, and text-prompted video tracking. I like
              projects that let me follow the entire path, from raw data to
              evaluation and an interface someone can use.
            </p>
            <p>
              Based in {site.location}, I’m working toward roles in data
              engineering, machine learning engineering, AI engineering, data
              science, and analytics engineering. The common thread is practical
              work: building useful systems and understanding why they behave
              the way they do.
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
          <p className="eyebrow">TECHNICAL CAPABILITIES</p>
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
        <section className="principles">
          <p className="eyebrow">HOW I APPROACH THE WORK</p>
          <div className="principle-grid">
            {principles.map(([n, t, d]) => (
              <article key={n}>
                <span className="index">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <ContactCTA />
    </>
  );
}
