import { pageMetadata } from "@/lib/metadata";
import { experience } from "@/content/site";
import { ContactCTA, PageIntro } from "@/components/shared";
export const metadata = pageMetadata(
  "Experience",
  "Tam Nguyen\u2019s experience in data science, computer vision, teaching, and undergraduate machine learning research.",
  "/experience",
);
export default function Experience() {
  return (
    <>
      <div className="container page-shell">
        <PageIntro
          label="EXPERIENCE & RESEARCH"
          title="Practice makes perspective."
        >
          Applied machine learning, thoughtful experimentation, and the ability
          to explain the reasoning behind the work.
        </PageIntro>
        <div className="experience-full">
          {experience.map((e, i) => (
            <article key={e.company} className="job">
              <div className="job-meta">
                <span className="eyebrow">
                  0{i + 1} / {e.field}
                </span>
                <h2>{e.company}</h2>
                <p className="job-date">{e.dates}</p>
              </div>
              <div>
                <h3>{e.role}</h3>
                <p>{e.description}</p>
                {e.outcomes.length > 0 && (
                  <ul>
                    {e.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                )}
                <div className="tags">
                  {e.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="section-note">
          Experience details reflect the confirmed November 2026 resume updates.
          External benchmark analysis is distinguished from implementation work.
        </p>
      </div>
      <ContactCTA />
    </>
  );
}
