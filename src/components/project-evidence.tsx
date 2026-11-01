import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectEvidence } from "@/content/evidence";
import { EvidenceVisual } from "./evidence-visual";
export function ProjectEvidence({ slug }: { slug: string }) {
  const proof = projectEvidence[slug];
  if (!proof) return null;
  return (
    <section
      className="project-proof-section"
      aria-labelledby="project-proof-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">RESULTS YOU CAN INSPECT</p>
          <h2 id="project-proof-title">The evidence, up front.</h2>
        </div>
      </div>
      <div className="proof-overview">
        <dl className="project-answers">
          <div>
            <dt>Problem</dt>
            <dd>{proof.problem}</dd>
          </div>
          <div>
            <dt>Built</dt>
            <dd>{proof.built}</dd>
          </div>
          <div className="answer-result">
            <dt>Result</dt>
            <dd>{proof.result}</dd>
          </div>
        </dl>
        {proof.chart && <EvidenceVisual kind={proof.chart} />}
      </div>
      <div className="deployment-scope">
        <strong>Validation & deployment scope</strong>
        <p>{proof.deployment}</p>
      </div>
      <div className="proof-sources">
        <strong>Inspect the evidence</strong>
        {proof.sources.map((source) => (
          <a
            href={source.href}
            key={source.href}
            target="_blank"
            rel="noreferrer"
          >
            {source.label}
            <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
      {slug === "quickscout-football" && (
        <div className="recorded-artifacts">
          <figure>
            <a
              href="/evidence/quickscout-airflow-run.png"
              target="_blank"
              rel="noreferrer"
              aria-label="Open original recorded Airflow run screenshot"
            >
              <div className="screenshot-window">
                <Image
                  src="/evidence/quickscout-airflow-run.png"
                  width={1280}
                  height={720}
                  sizes="(max-width: 800px) 200vw, 1200px"
                  alt="Recorded local Airflow idempotency run showing all six tasks successful"
                  className="evidence-screenshot-zoom"
                />
              </div>
            </a>
            <figcaption>
              Detail of the actual local Airflow run.{" "}
              <a
                href="/evidence/quickscout-airflow-run.png"
                target="_blank"
                rel="noreferrer"
              >
                Open original screenshot ↗
              </a>
            </figcaption>
          </figure>
          <div className="recorded-output">
            <p className="eyebrow">ORIGINAL RECORDED OUTPUT</p>
            <h3>Read the run, not just the count.</h3>
            <p>
              The checked-in rerun log records 20 fixture fact rows, zero
              duplicates, and a verified unchanged checksum. The retry log
              records recovery on attempt two.
            </p>
            <a
              href="/evidence/quickscout-idempotent-rerun.txt"
              target="_blank"
              rel="noreferrer"
            >
              Read idempotent rerun output <ArrowUpRight size={14} />
            </a>
            <a
              href="/evidence/quickscout-retry-recovery.txt"
              target="_blank"
              rel="noreferrer"
            >
              Read retry recovery output <ArrowUpRight size={14} />
            </a>
            <small>
              Copied unchanged from the pinned repository; these are historical
              records, not runs executed by this portfolio.
            </small>
          </div>
        </div>
      )}
    </section>
  );
}
