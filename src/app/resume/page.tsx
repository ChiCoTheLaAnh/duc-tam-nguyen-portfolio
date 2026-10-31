import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Download, ArrowUpRight, FileText } from "lucide-react";
import { site } from "@/content/site";
import { hasResume } from "@/lib/resume";
import { PageIntro } from "@/components/shared";
export const metadata = pageMetadata(
  "Resume",
  "Tam Nguyen\u2019s education, engineering experience, and resume.",
  "/resume",
);
export default function Resume() {
  return (
    <div className="container page-shell">
      <PageIntro label="RESUME" title="The experience behind the work.">
        Computer Science at UIC. Applied work in data science, computer vision,
        and engineering.
      </PageIntro>
      <div className="resume-panel">
        <FileText size={40} strokeWidth={1.2} />
        <h2>{site.name} — Resume</h2>
        {hasResume() ? (
          <>
            <p>
              A concise overview of my education, experience, and technical
              projects.
            </p>
            <a
              href="/resume.pdf"
              download="Tam-Nguyen-Resume.pdf"
              className="button dark"
            >
              Download PDF <Download size={17} />
            </a>
            <a
              href="/resume.pdf"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Open in a new tab <ArrowUpRight size={16} />
            </a>
          </>
        ) : (
          <>
            <p>
              The downloadable PDF is being prepared. My experience and project
              case studies are available here.
            </p>
            <div className="hero-actions">
              <Link href="/experience" className="button dark">
                View experience <ArrowUpRight size={17} />
              </Link>
              <Link href="/projects" className="button outline">
                Explore projects
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
