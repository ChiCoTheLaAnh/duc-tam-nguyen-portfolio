/** Resume-specific project bullets transcribed from the supplied November PDF.
 * Education, contacts, experience and skills are shared with site.ts.
 */
export const resumeProjects = [
  {
    slug: "quickscout-football",
    bullets: [
      "Built a quota-aware API-Football ELT pipeline, ingesting 20 player profiles and 20 season-stat records into PostgreSQL with pagination, bounded retries, deduplication, and idempotent upserts.",
      "Developed a six-model dbt star schema with 76 automated CI data-quality tests; preserved all 40 hosted season-stat rows across two idempotent builds with zero duplicate fact keys.",
      "Orchestrated a six-task local Airflow DAG for source validation, dbt transformations, and checksum verification; demonstrated retry recovery and consistent results across two local runs with zero duplicate records.",
    ],
  },
  {
    slug: "repeat-order-recommendation",
    bullets: [
      "Built an end-to-end repeat-order recommendation pipeline using Python, pandas, and scikit-learn, processing more than one million retail transactions and generating 3.86 million candidate recommendations.",
      "Engineered customer-product features and benchmarked heuristic, Logistic Regression, and XGBoost ranking models, achieving approximately 0.378 NDCG@10 and 49.18% Recall@100 in candidate retrieval.",
      "Developed a FastAPI inference service with automated testing and performance benchmarking, achieving 12.53 ms p95 latency under five concurrent clients and approximately 625 requests per second in the reported local benchmark.",
    ],
  },
  {
    slug: "text-prompted-video-tracking",
    bullets: [
      "Developed a text-prompted video object tracking pipeline integrating Grounding DINO for object detection and SAM2 for temporal mask propagation.",
      "Designed and evaluated baseline tracking and two re-grounding strategies across 19 video clips, identifying improvements in nine clips with selective periodic re-grounding and analyzing temporal consistency trade-offs.",
    ],
  },
];
