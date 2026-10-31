export type TechnicalTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};
export type Section = {
  title: string;
  body: string;
  points?: string[];
  table?: TechnicalTable;
  details?: { summary: string; body: string };
};
export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  filters: string[];
  description: string;
  technologies: string[];
  metric: string;
  metricLabel: string;
  nodes: string[];
  visual: "pipeline" | "ranking" | "tracking" | "serving" | "classification";
  github: string;
  featured: boolean;
  summary: string;
  evidence: string;
  decisions: { title: string; body: string }[];
  sections: Section[];
};
export const projects: Project[] = [
  {
    slug: "quickscout-football",
    number: "01",
    title: "QuickScout Football Data Pipeline",
    shortTitle: "Trust the data. Then make the call.",
    category: "Data Engineering",
    filters: ["Data Engineering"],
    description:
      "A quota-aware football ELT pipeline: repeatable ingestion, a dbt star schema, and an Airflow reliability proof.",
    technologies: [
      "TypeScript",
      "Python",
      "PostgreSQL",
      "dbt",
      "Apache Airflow",
      "Supabase",
    ],
    metric: "76",
    metricLabel: "CI data-quality tests",
    nodes: ["API-Football", "PostgreSQL", "dbt staging", "Star schema"],
    visual: "pipeline",
    github: "https://github.com/ChiCoTheLaAnh/QuickScoutFootball",
    featured: true,
    summary:
      "Six dbt models. Explicit data contracts. Correctness checked across reruns—not inferred from a successful request.",
    evidence:
      "Repository source and recorded CI, hosted-build, and local Airflow evidence. These runs are separate environments.",
    decisions: [
      {
        title: "A data contract before a bigger dataset",
        body: "The fact grain is provider × player × normalized season × competition. Stable keys and tested relationships make reruns meaningful; raw volume alone would not.",
      },
      {
        title: "Keep the orchestration proof honest",
        body: "The six-task Airflow DAG runs against a local PostgreSQL fixture. It does not call API-Football or hosted Supabase, and is not a production Airflow deployment.",
      },
    ],
    sections: [
      {
        title: "Problem & motivation",
        body: "Football APIs are useful inputs, but a successful fetch is not an analytics-ready dataset. Quotas, pagination, duplicate records, and overlapping runs make ingestion a reliability problem. I built the pipeline to make its state and data contracts explicit.",
      },
      {
        title: "Architecture & data flow",
        body: "The provider-sync path ingests API-Football records into application-owned PostgreSQL tables in Supabase. dbt reads those tables through two staging views and publishes three dimensions and one fact. The local Airflow proof orchestrates analytics over a seeded PostgreSQL database, separately from provider ingestion.",
        points: [
          "Sources: public.players and public.player_season_stats remain application-owned.",
          "Staging: stg_players and stg_player_season_stats normalize types without hiding duplicate source rows.",
          "Marts: dim_player, dim_team, dim_league, and fact_player_season.",
        ],
      },
      {
        title: "Implementation & reliability",
        body: "I implemented quota-aware ingestion with pagination, bounded retries, deduplication, and idempotent upserts. An ingestion ledger and provider-season locking coordinate execution. Conservative quota accounting and fail-closed guardrails prevent a partial fetch from masquerading as completed coverage.",
      },
      {
        title: "Orchestration & recovery",
        body: "The TaskFlow DAG has six tasks: validate_source_data → retry_probe → dbt_build → dbt_test → verify_idempotency → summarize_run. It uses catchup=False, max_active_runs=1, and two retries per task. A deliberate first-attempt failure demonstrates retry recovery; row counts, duplicate checks, and checksums verify the following rerun.",
        details: {
          summary: "What the checksum proves",
          body: "The local evidence records the same 20 fact rows and checksum after the retry run and the normal rerun, with zero duplicates. This demonstrates fixture-backed idempotency for those inputs, not a guarantee for every future source change.",
        },
      },
      {
        title: "Data quality & evaluation",
        body: "The current CI checks six models and 76 fixture-backed data tests. The older hosted Supabase evidence predates the player_season_id alias and therefore has 74 tests per build. Keeping those counts separate preserves the provenance of the result.",
        table: {
          caption: "Validation contexts — separate runs, separate claims",
          headers: ["Context", "Observed result", "Scope"],
          rows: [
            [
              "Current CI",
              "6 models + 76 tests",
              "Disposable PostgreSQL fixture",
            ],
            [
              "Hosted dbt builds",
              "40/40 season-stat rows preserved",
              "Two builds; 74 tests per build; no duplicate fact keys",
            ],
            [
              "Local Airflow proof",
              "20 fact rows; unchanged checksum",
              "Six tasks, intentional retry, idempotent rerun",
            ],
            [
              "Documented provider ingestion",
              "20 profiles + 20 season-stat records",
              "Small experimental ingestion run",
            ],
          ],
        },
      },
      {
        title: "Challenges & trade-offs",
        body: "API limits are a hard boundary, not an invitation to extrapolate coverage. The repository records a free-plan restriction beyond page three that blocked a broader rollout without writes. Historical team names are another limitation: a team ID may outlive its available name, and a fallback to a player’s current team can misrepresent older seasons.",
      },
      {
        title: "Results & lessons",
        body: "The strongest result is reproducible correctness across defined environments: a tested star schema, controlled ingestion, and recoverable orchestration. The documented 20-record ingestion and 40-row hosted validation are learning-scale evidence, not production-scale processing.",
      },
      {
        title: "Next steps",
        body: "Validate provider coverage within an approved quota, improve historical team provenance, and document recovery under new source failures. These are follow-up directions, not claims of completed expansion.",
      },
    ],
  },
  {
    slug: "repeat-order-recommendation",
    number: "02",
    title: "Repeat-Order Recommendation System",
    shortTitle: "A better next order.",
    category: "Machine Learning / MLOps",
    filters: ["Machine Learning", "MLOps"],
    description:
      "From more than one million retail transactions to a two-stage recommendation system and a benchmarked FastAPI service.",
    technologies: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "FastAPI",
      "Docker",
      "GitHub Actions",
    ],
    metric: "12.53 ms",
    metricLabel: "Local p95 · 5 concurrent clients",
    nodes: ["Purchase history", "200 candidates", "Logistic ranker", "FastAPI"],
    visual: "ranking",
    github: "https://github.com/ChiCoTheLaAnh/repeat-order-recommender",
    featured: true,
    summary:
      "3.86 million candidate rows, a measured model-selection decision, and an API benchmark with its workload kept in view.",
    evidence:
      "Recorded retrospective validation and local serving benchmark from the repository. Test split remains unevaluated; local latency is not cloud latency.",
    decisions: [
      {
        title: "Choose the simpler serving model—by measurement",
        body: "Logistic regression reached 0.378038 NDCG@10 versus 0.379499 for depth-5 XGBoost. The 0.001461 gap was below the predefined 0.005 practical threshold; the linear artifact was about 66× smaller.",
      },
      {
        title: "Ranking scores are not purchase probabilities",
        body: "Logistic decision_function and XGBoost raw margins order candidates. Neither is presented as a calibrated probability of purchase.",
      },
    ],
    sections: [
      {
        title: "Problem & motivation",
        body: "Returning customers need a short list of useful products, not a tour of the catalog. I built an end-to-end system that cleans retail history, retrieves plausible candidates, compares rankers, and exposes recommendations through an API.",
      },
      {
        title: "Data & candidate retrieval",
        body: "The project processed over one million retail transactions. Frozen retrieval V1 generated 3,864,000 training candidates across 19,320 queries, with 200 candidates per query. Retrieval combines personal purchase history, neighbors, and recent and longer-term popularity.",
        table: {
          caption: "Training candidate coverage — frozen retrieval policy",
          headers: ["Candidate cutoff", "Candidate Recall", "Interpretation"],
          rows: [
            ["50", "38.05%", "Smaller pool, lower target coverage"],
            ["100", "49.18%", "Confirmed Recall@100 result"],
            [
              "200",
              "60.13%",
              "Training coverage; validation Recall@200 is 60.86%",
            ],
          ],
        },
      },
      {
        title: "Features & leakage controls",
        body: "The ordered 19-feature schema combines customer-item history, item and customer aggregates, and retrieval-source signals. Purchase history is restricted to observations before each cutoff. Logistic preprocessing learns median imputation and weighted scaling from training only; XGBoost uses native missing-value handling. Identifiers remain metadata, not numeric model inputs.",
      },
      {
        title: "Evaluation methodology",
        body: "Rankers use the same frozen candidate pools and temporal validation cutoffs. The main validation population contains 1,817 queries from 1,214 customers; 5,881 queries with no target purchases are excluded from the primary quality measure. That exclusion matters when interpreting the reported NDCG.",
        table: {
          caption: "Pooled validation ranking quality — NDCG@10",
          headers: ["Ranker", "NDCG@10", "Role"],
          rows: [
            ["Recent popularity", "0.1279", "Baseline"],
            ["Personalized heuristic", "0.3351", "Strongest heuristic"],
            ["Logistic regression", "0.3780", "Release V1 serving choice"],
            [
              "XGBoost, depth 5",
              "0.3795",
              "Highest pooled score among tested models",
            ],
          ],
        },
        details: {
          summary: "Read the model-selection evidence",
          body: "The saved-model XGBoost-minus-logistic NDCG gap is +0.001461. A 2,000-replicate paired customer-cluster bootstrap gives a descriptive 95% interval of [−0.002831, +0.005780]. The interval includes zero but still permits a modest XGBoost advantage: it is not proof of equivalence. The serving choice also considered Recall@10, artifact size, load time, and warm scoring.",
        },
      },
      {
        title: "The model-selection decision",
        body: "The earlier quality-only comparison favored depth-5 XGBoost. Release V1 deliberately selected the already-fitted logistic model after comparing practical quality and serving costs, with no new tuning round. Its 2,951-byte artifact is much smaller than XGBoost’s 195,399-byte artifact; warm 200-row scoring plus top-10 sorting had p95 0.636 ms versus 1.074 ms.",
      },
      {
        title: "API engineering & benchmark",
        body: "FastAPI serves a frozen release bundle; Docker packages the application, and automated tests and GitHub Actions support delivery. The recorded local benchmark used Python 3.12.14 on an AMD EPYC 9V74 under a four-CPU quota. One API process and the load client shared that quota, with loopback keepalive and a 90/10 known-customer/fallback workload.",
        table: {
          caption: "Recorded local warm HTTP benchmark — not cloud capacity",
          headers: [
            "Concurrent clients",
            "Warm p95",
            "Requests/second",
            "Error rate",
          ],
          rows: [
            ["1", "2.909 ms", "458.5", "0%"],
            ["5", "12.526 ms ≈ 12.53 ms", "625.4 ≈ 625", "0%"],
          ],
        },
      },
      {
        title: "Limitations & lessons",
        body: "Discovery ranking remains weak, and an unknown-customer fallback has no personalized quality estimate. Evaluation is retrospective; the test split remains unevaluated. The repository separately documents later Cloud Run measurements, which must not be conflated with the faster local benchmark here.",
      },
      {
        title: "Next steps",
        body: "Evaluate the untouched test split under a locked protocol, examine retrieval misses and discovery errors, and benchmark any serving change under its actual deployment conditions. Better evidence should guide added complexity.",
      },
    ],
  },
  {
    slug: "text-prompted-video-tracking",
    number: "03",
    title: "Text-Prompted Video Object Tracking",
    shortTitle: "Follow the prompt. Keep the target.",
    category: "Computer Vision / Deep Learning",
    filters: ["Machine Learning", "Research"],
    description:
      "Grounding DINO and SAM2, connected into a text-guided tracking pipeline with a controlled re-grounding study.",
    technologies: ["Python", "Grounding DINO", "SAM2", "PyTorch"],
    metric: "9 / 19",
    metricLabel: "Clips improved · selective re-grounding",
    nodes: [
      "Text + frames",
      "Grounding DINO",
      "SAM2 propagation",
      "Review + compare",
    ],
    visual: "tracking",
    github: "https://github.com/ChiCoTheLaAnh/video-object-tracking-SAM2",
    featured: true,
    summary:
      "One baseline, two re-grounding policies, and a closer look at when refreshing a detector helps—or hurts.",
    evidence:
      "Repository report describes qualitative review on a locked 19-clip subset. Improvement counts are not segmentation accuracy scores.",
    decisions: [
      {
        title: "Change the acceptance rule, hold the experiment steady",
        body: "Both ablations refresh every 10 frames with the same prompts and checkpoints. Raising the match IoU threshold from 0.1 to 0.3 isolates reseeding selectivity as the changed condition.",
      },
      {
        title: "Report regressions alongside improvements",
        body: "The stricter policy improved nine clips but worsened four. It is the strongest tested configuration on this subset, not a universal replacement for baseline tracking.",
      },
    ],
    sections: [
      {
        title: "Problem & motivation",
        body: "A prompt such as “person” can find an object in one frame, but following the same instance through clutter and occlusion is harder. I integrated text-guided detection and video mask propagation, then studied whether periodic re-grounding could recover difficult tracking cases.",
      },
      {
        title: "Architecture & implementation",
        body: "Grounding DINO grounds the text prompt to an object region. SAM2 converts the region into a segmentation mask and propagates it across later frames. Reusable Python modules handle model wrappers, IO, evaluation, and visualization; thin scripts and shared YAML configuration keep notebook orchestration separate from implementation.",
      },
      {
        title: "Baseline & experimental controls",
        body: "The official baseline completed the locked 19-clip subset on the primary sam2_video_predictor path. The set contains five easy clips, five occlusion clips, five crowded clips, and four small-object clips. Both ablations keep prompts, checkpoints, and the refresh schedule fixed, with re-grounding attempts at frames 10, 20, 30, and 40.",
      },
      {
        title: "Evaluation & results",
        body: "Outcomes are qualitative improved/same/worse judgments relative to the no-re-grounding baseline. A permissive IoU gate destabilized many clips; a stricter gate made the same schedule more useful.",
        table: {
          caption:
            "Qualitative outcomes relative to the baseline — 19 clips per policy",
          headers: ["Periodic policy", "Improved", "Same", "Worse"],
          rows: [
            ["Match IoU ≥ 0.1", "4", "8", "7"],
            ["Match IoU ≥ 0.3", "9", "6", "4"],
          ],
        },
        details: {
          summary: "Scope and reporting caveats",
          body: "These are reviewed tracking outcomes, not ground-truth mask IoU, accuracy, or latency measurements. The report distinguishes the official 19-clip baseline from an earlier 20-row manifest containing a duplicate clip ID. Claims here use the official comparison, not the earlier duplicate-containing summary.",
        },
      },
      {
        title: "Failure analysis",
        body: "Crowded scenes create identity ambiguity when a prompt matches several similar objects. Occlusion weakens target persistence; small objects become fragile when combined with distractors. Selective re-grounding recovered some drift and wrong-object cases, but also turned some previously good tracks into partial tracking or no detection.",
      },
      {
        title: "Trade-offs & lessons",
        body: "More detection is not automatically better tracking. A refresh can correct drift or inject a wrong identity. The experiment’s useful insight is about acceptance quality: hold the schedule steady, then gate reseeding more carefully. Even the better policy retains four regressions.",
      },
      {
        title: "Next steps",
        body: "A confidence-gated or trigger-based refresh policy is a justified follow-up. It would need a new controlled evaluation, broader coverage, and ground-truth metrics where available. No such improvement is claimed as implemented.",
      },
    ],
  },
  {
    slug: "football-mlops-api",
    number: "04",
    title: "Football MLOps API",
    shortTitle: "A model needs an interface.",
    category: "MLOps / Backend Engineering",
    filters: ["MLOps", "Machine Learning"],
    description:
      "A containerized REST service for expected goals and win probabilities, with MLflow-backed training records.",
    technologies: ["Python", "FastAPI", "Docker", "MLflow"],
    metric: "2",
    metricLabel: "Prediction tasks",
    nodes: ["Training", "MLflow + artifacts", "FastAPI", "Predictions"],
    visual: "serving",
    github: "https://github.com/ChiCoTheLaAnh/football-mlops",
    featured: false,
    summary:
      "A focused backend project that connects training artifacts to usable prediction endpoints.",
    evidence:
      "API routes, training scripts, Dockerfile, and MLflow calls reviewed in source. No measured serving performance is claimed.",
    decisions: [
      {
        title: "Group evaluation by match",
        body: "The expected-goals training script uses GroupShuffleSplit with match_id, keeping shots from the same match within a split.",
      },
    ],
    sections: [
      {
        title: "Problem & overview",
        body: "A model artifact becomes useful to another application through a defined interface. I built a football API around expected goals and win probability predictions, packaging the service with Docker.",
      },
      {
        title: "Implementation & data flow",
        body: "The FastAPI service loads local expected-goals and win-probability artifacts at startup. POST /predict/xg uses distance, angle, shot type, and body part; POST /predict/win-prob uses match state including minute, score difference, xG difference, and red cards. Health output reports whether the models loaded.",
      },
      {
        title: "Lifecycle & evaluation",
        body: "Training scripts log parameters, metrics, and artifacts through MLflow. The expected-goals script uses match-grouped train/test splitting, categorical encoding, scaling, and logistic regression. It computes log loss, ROC AUC, and Brier score; no verified numeric results are published here.",
      },
      {
        title: "Trade-offs & limitations",
        body: "A local artifact-loading service is a concrete serving boundary, but it does not establish a model promotion workflow, production uptime, or capacity. The source uses an in-memory match state store for streaming helpers; that is not a distributed durable store.",
      },
      {
        title: "Next steps",
        body: "A future iteration could formalize model provenance, artifact loading compatibility, and evaluation reporting before adding operational complexity.",
      },
    ],
  },
  {
    slug: "multilabel-image-classification",
    number: "05",
    title: "Multi-label Image Classification",
    shortTitle: "One image. More than one label.",
    category: "Deep Learning / Research",
    filters: ["Research", "Machine Learning"],
    description:
      "A residual CNN study in multi-label image classification, with per-class evaluation and threshold calibration.",
    technologies: ["Python", "PyTorch", "CNNs"],
    metric: "0.9604",
    metricLabel: "Reported test macro mAP",
    nodes: ["Images", "Residual CNN", "Label scores", "Calibration"],
    visual: "classification",
    github: "https://github.com/ChiCoTheLaAnh/CNN_Multilabel",
    featured: false,
    summary:
      "A secondary research project focused on evaluation beyond a single aggregate score.",
    evidence:
      "Results reported in the CNN_Multilabel repository; test mAP and validation F1 describe separate evaluation contexts.",
    decisions: [],
    sections: [
      {
        title: "Problem & overview",
        body: "An image may have several correct labels. This project studies a custom CNN with residual blocks for multi-label image classification, rather than treating labels as mutually exclusive.",
      },
      {
        title: "Implementation & evaluation",
        body: "The repository describes resized 224×224 inputs, normalization, horizontal-flip augmentation, a train/validation split, Adam, learning-rate scheduling, and early stopping. Evaluation includes class-level F1 and precision–recall-based threshold calibration.",
      },
      {
        title: "Reported results",
        body: "The repository reports test macro mAP of 0.9604 and validation F1 up to 0.984, with per-class F1 at least 0.90 for eight of ten classes. Test mAP and validation F1 are different measures on different evaluation contexts; they are not interchangeable accuracy figures.",
      },
      {
        title: "Limitations & lessons",
        body: "The reported metrics describe this study, not expected performance on arbitrary images. Threshold selection and split methodology should be examined alongside the original experiment artifacts before comparing these scores with another system.",
      },
    ],
  },
];
