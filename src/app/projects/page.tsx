import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/shared";
import { ProjectGallery } from "@/components/project-gallery";
export const metadata = pageMetadata(
  "Projects",
  "Engineering case studies in data pipelines, recommendation systems, machine learning APIs, and deep learning research.",
  "/projects",
);
export default function Projects() {
  return (
    <div className="container page-shell">
      <PageIntro label="MY PROJECTS" title="Built, tested, and still learning.">
        Projects in data engineering, machine learning, and computer vision.
        Here’s what I tried, how I tested it, and what I learned.
      </PageIntro>
      <ProjectGallery />
    </div>
  );
}
