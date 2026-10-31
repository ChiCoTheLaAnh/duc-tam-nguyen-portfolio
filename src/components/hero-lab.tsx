"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const paths = [
  {
    label: "Data systems",
    slug: "quickscout-football",
    steps: ["Ingest", "Validate", "Model", "Trust"],
    tools: "API → POSTGRES → DBT",
    note: "A rerun should change the data only when the source does.",
    detail: "Idempotency, quality checks, and a six-model star schema.",
    code: "01",
  },
  {
    label: "ML systems",
    slug: "repeat-order-recommendation",
    steps: ["Retrieve", "Rank", "Evaluate", "Serve"],
    tools: "HISTORY → RANKER → API",
    note: "The best serving model has to earn its complexity.",
    detail: "Logistic regression selected after a measured comparison.",
    code: "02",
  },
  {
    label: "Computer vision",
    slug: "text-prompted-video-tracking",
    steps: ["Prompt", "Detect", "Propagate", "Review"],
    tools: "GROUNDING DINO → SAM2",
    note: "A new detection should help the tracker, not distract it.",
    detail: "A controlled study of two re-grounding policies.",
    code: "03",
  },
];
export function HeroLab() {
  const [active, setActive] = useState(0);
  const p = paths[active];
  return (
    <div className="hero-lab">
      <div className="lab-heading">
        <span className="eyebrow">
          <span className="status-dot" /> INSIDE THE WORK
        </span>
        <span className="lab-number">FIG. {p.code}</span>
      </div>
      <div className="lab-switch" aria-label="Explore engineering disciplines">
        {paths.map((path, i) => (
          <button
            key={path.label}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            {path.label}
          </button>
        ))}
      </div>
      <div className={`lab-canvas mode-${active}`} aria-hidden="true">
        <svg viewBox="0 0 440 230" className="lab-lines">
          <path
            className="lab-route"
            d="M 40 155 H 125 V 65 H 300 V 155 H 400"
          />
          <path d="M40 185 H400 M40 205 H400" className="lab-guide" />
          {[40, 125, 300, 400].map((x, i) => (
            <g key={x}>
              <circle
                cx={x}
                cy={i === 1 || i === 2 ? 65 : 155}
                r="22"
                className="lab-station"
              />
              <text
                x={x}
                y={(i === 1 || i === 2 ? 65 : 155) + 4}
                textAnchor="middle"
              >
                0{i + 1}
              </text>
            </g>
          ))}
        </svg>
        <span className="lab-tool">{p.tools}</span>
        <div className="lab-node-labels">
          {p.steps.map((s, i) => (
            <span key={s} className={`lab-step step-${i}`}>
              {s}
            </span>
          ))}
        </div>
        <span className="lab-signal" />
      </div>
      <div className="lab-story" aria-live="polite" aria-atomic="true">
        <h2>{p.note}</h2>
        <p>{p.detail}</p>
        <ol className="sr-only">
          {p.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
      <Link href={`/projects/${p.slug}`} className="lab-link">
        Explore this system <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}
