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
      <PageIntro label="THE PROJECT COLLECTION" title="Ideas into systems.">
        A closer look at the problems, decisions, and trade-offs behind my work.
        From the first data point to the serving layer.
      </PageIntro>
      <ProjectGallery />
    </div>
  );
}
