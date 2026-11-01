import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import response from "../../public/evidence/recommendation-fixture-response.json";
import { trackingArtifact } from "@/content/project-stories";

/** Genuine source media and recorded API output; never synthetic illustrations. */
export function ProjectArtifact({ slug }: { slug: string }) {
  if (slug === "quickscout-football") {
    return (
      <figure className="project-artifact artifact-pipeline">
        <a
          href="/evidence/quickscout-airflow-run.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Inspect original QuickScout pipeline run"
        >
          <div className="screenshot-window">
            <Image
              src="/evidence/quickscout-airflow-run.png"
              width={1280}
              height={720}
              sizes="(max-width: 800px) 200vw, 1100px"
              alt="Airflow task list from the actual local QuickScout run, with all six tasks marked successful"
              className="evidence-screenshot-zoom"
            />
          </div>
        </a>
        <figcaption>
          This recorded local Airflow run shows the six-task workflow, including
          dbt builds, data tests, and an idempotency check.
        </figcaption>
        <a
          className="artifact-source"
          href="/evidence/quickscout-idempotent-rerun.txt"
          target="_blank"
          rel="noreferrer"
        >
          Read the original run log <ArrowUpRight size={13} />
        </a>
      </figure>
    );
  }
  if (slug === "repeat-order-recommendation") {
    const excerpt = {
      items: response.items.map(({ item_id, description }) => ({
        item_id,
        description,
      })),
      recommendation_mode: response.recommendation_mode,
      score_kind: response.score_kind,
    };
    return (
      <figure className="project-artifact artifact-response">
        <div className="response-heading">
          <span>GET /recommendations/…?k=3</span>
          <span>200 OK</span>
        </div>
        <pre tabIndex={0} aria-label="Recorded recommendation response excerpt">
          <code>{JSON.stringify(excerpt, null, 2)}</code>
        </pre>
        <figcaption>
          Actual FastAPI response from the repository’s synthetic test fixture,
          checked against offline inference; this excerpt shows ranked items and
          the response mode.
        </figcaption>
        <a
          className="artifact-source"
          href="/evidence/recommendation-fixture-response.json"
          target="_blank"
          rel="noreferrer"
        >
          Full recorded JSON, including scores and versions{" "}
          <ArrowUpRight size={13} />
        </a>
      </figure>
    );
  }
  if (slug === "text-prompted-video-tracking") {
    return (
      <figure className="project-artifact artifact-tracking">
        <div className="tracking-frame-pair">
          <a
            href={trackingArtifact.baselineClip}
            target="_blank"
            rel="noreferrer"
          >
            <span>Baseline</span>
            <Image
              src={trackingArtifact.baselineImage}
              width={1080}
              height={1920}
              sizes="(max-width: 600px) 45vw, 250px"
              alt="Baseline tracking frame from slide 8: a mask on a person in a crowded street"
            />
            <span className="clip-link">
              Open baseline clip <ArrowUpRight size={12} />
            </span>
          </a>
          <a
            href={trackingArtifact.selectiveClip}
            target="_blank"
            rel="noreferrer"
          >
            <span>Selective re-grounding</span>
            <Image
              src={trackingArtifact.selectiveImage}
              width={1080}
              height={1920}
              sizes="(max-width: 600px) 45vw, 250px"
              alt="Selective re-grounding frame from slide 8: a person outlined with a box and segmentation mask"
            />
            <span className="clip-link">
              Open selective clip <ArrowUpRight size={12} />
            </span>
          </a>
        </div>
        <figcaption>{trackingArtifact.caption}</figcaption>
      </figure>
    );
  }
  return null;
}
