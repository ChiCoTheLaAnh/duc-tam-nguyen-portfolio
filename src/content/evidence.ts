/** Transcribed from pinned public records. These are recorded results, not new runs. */
export type EvidenceSource = { label: string; href: string };
export type ProjectEvidence = {
  problem: string;
  built: string;
  result: string;
  metric: string;
  metricLabel: string;
  scope: string;
  deployment: string;
  sources: EvidenceSource[];
  chart?: "pipeline" | "ranking" | "tracking";
};
const quick =
  "https://github.com/ChiCoTheLaAnh/QuickScoutFootball/blob/e6b656253e4c8636f89b73d26fd43edb6a48e13f";
const repeat =
  "https://github.com/ChiCoTheLaAnh/repeat-order-recommender/blob/441ec5760b4e647b77122e87b8e8a277351aa65e";
const video =
  "https://github.com/ChiCoTheLaAnh/video-object-tracking-SAM2/blob/9b49f05fdc8f8cbaa3a92df5ccb535d11964c2c6";
export const rankingComparison = [
  { label: "Personalized heuristic", value: 0.3351, selected: false },
  { label: "Logistic regression", value: 0.378, selected: true },
  { label: "XGBoost, depth 5", value: 0.3795, selected: false },
];
export const trackingComparison = [
  { label: "Permissive gate · IoU ≥ 0.1", improved: 4, unchanged: 8, worse: 7 },
  { label: "Selective gate · IoU ≥ 0.3", improved: 9, unchanged: 6, worse: 4 },
];
export const projectEvidence: Record<string, ProjectEvidence> = {
  "quickscout-football": {
    problem:
      "API quotas and repeated runs can leave downstream football data inconsistent.",
    built:
      "Quota-aware ELT, stable keys, a six-model dbt star schema, and a separate six-task local Airflow proof.",
    result:
      "40/40 hosted season-stat rows preserved across two builds, with zero duplicate fact keys. Local Airflow recovered from a simulated failure and retained 20 fixture rows and the same checksum.",
    metric: "40 / 40",
    metricLabel: "hosted rows preserved · two builds",
    scope: "Historical hosted dbt validation · separate local Airflow fixture",
    deployment:
      "The hosted dbt builds are historical validation. Airflow runs in local Docker Compose; it does not orchestrate the hosted pipeline. No production Airflow or production-scale ingestion is claimed.",
    sources: [
      { label: "Hosted & CI validation record", href: `${quick}/README.md` },
      {
        label: "Idempotent rerun log",
        href: `${quick}/docs/airflow/evidence/idempotent-rerun.log`,
      },
      {
        label: "Retry recovery log",
        href: `${quick}/docs/airflow/evidence/retry-attempt-2.log`,
      },
    ],
    chart: "pipeline",
  },
  "repeat-order-recommendation": {
    problem: "Beat a reorder heuristic without unnecessary serving complexity.",
    built:
      "Two-stage retrieval/ranking, 19 pre-cutoff features, and a frozen-model FastAPI service.",
    result:
      "Validation NDCG@10: 0.3351 → 0.3780 (+12.8% relative). Logistic trails XGBoost by only 0.00146 NDCG with a ~66× smaller artifact. Local API: 12.53 ms p95 and 625 req/s at five clients.",
    metric: "+12.8%",
    metricLabel: "validation NDCG@10 vs heuristic",
    scope: "Retrospective ranking validation · local five-client API benchmark",
    deployment:
      "The 12.53 ms figure is loopback HTTP on a four-CPU local quota, not cloud latency. A separate IAM-protected Cloud Run demo is documented: smoke checks passed, but its five-client sample had one unsuccessful attempt out of 250. It is not a production business rollout.",
    sources: [
      {
        label: "Ranking & local benchmark record",
        href: `${repeat}/README.md`,
      },
      {
        label: "Cloud Run verification & limits",
        href: `${repeat}/docs/cloud-verification-2026-10-26.md`,
      },
    ],
    chart: "ranking",
  },
  "text-prompted-video-tracking": {
    problem:
      "Detector refresh can recover drift—or switch to the wrong object.",
    built:
      "Grounding DINO + SAM2, comparing two matching gates with fixed prompts, checkpoints, and refresh schedule.",
    result:
      "Same 19-clip subset: improved outcomes rose from 4 to 9; regressions fell from 7 to 4. Selective gate: 9 improved, 6 unchanged, 4 worse than baseline.",
    metric: "4 → 9",
    metricLabel: "improved clips · same 19-clip subset",
    scope: "Qualitative research comparison · no deployed service claimed",
    deployment:
      "This is a controlled research evaluation with Colab model runs. Outcomes are reviewed tracking judgments relative to baseline, not segmentation accuracy or latency measurements. No deployed tracking service is claimed.",
    sources: [
      {
        label: "Ablation report & failure analysis",
        href: `${video}/report/outline.md`,
      },
      { label: "Experiment setup", href: `${video}/README.md` },
    ],
    chart: "tracking",
  },
  "football-mlops-api": {
    problem:
      "Trained football models need a usable application interface and traceable training artifacts.",
    built:
      "FastAPI expected-goals and win-probability endpoints, Docker packaging, and MLflow training records.",
    result:
      "Two prediction tasks exposed through REST endpoints. No verified quality improvement, throughput, or latency benchmark is available.",
    metric: "2",
    metricLabel: "prediction tasks · source verified",
    scope: "Source-verified implementation · no production performance claim",
    deployment:
      "Container packaging and API routes are verified in source. A current live deployment and production operating metrics have not been independently verified.",
    sources: [
      {
        label: "Prediction endpoint implementation",
        href: "https://github.com/ChiCoTheLaAnh/football-mlops/blob/d8dfef4c048c76533cf1351884a2001fb9a3fc3a/src/api/app.py",
      },
    ],
  },
  "multilabel-image-classification": {
    problem:
      "Multi-label classification needs evaluation that distinguishes class-level errors and threshold choices.",
    built:
      "A residual CNN pipeline with augmentation, model evaluation, and precision–recall-based threshold calibration.",
    result:
      "Reported test macro mAP 0.9604; validation F1 up to 0.984. No baseline improvement is reported, and the two scores describe different evaluation contexts.",
    metric: "0.9604",
    metricLabel: "reported test macro mAP",
    scope: "Repository-reported research results · not rerun here",
    deployment:
      "The source reports a research experiment, not a deployed classification service. Test mAP and best validation F1 must not be treated as interchangeable accuracy figures.",
    sources: [
      {
        label: "Research results & methodology",
        href: "https://github.com/ChiCoTheLaAnh/CNN_Multilabel/blob/04c90dc53457f730d282632a3e4187c5953a384e/README.md",
      },
    ],
  },
};
