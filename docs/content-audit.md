# V2 content audit

The supplied `November Data Engineer.pdf` has now been read and compared with the portfolio. Education, employment dates, job titles, skills, contact links, GPA, Dean’s List and featured project metrics agree with the V2 content. The original upload is unchanged; `public/resume.pdf` is a public copy with the phone number securely redacted, as requested by the earlier no-public-phone instruction. All other extracted resume text is preserved.

## Personal and experience updates

- Tam Nguyen / Duc Tam Nguyen; Chicago, IL; confirmed email, LinkedIn, and GitHub centralized in `src/content/site.ts`. No phone number is published.
- BS Computer Science, Mathematics minor, May 2027, GPA 3.6/4.0, Dean’s List. Removed the superseded Data Science concentration.
- Viettel AI — Computer Vision / AI Intern, May–August 2025. ResNet/ViT face recognition and accuracy/latency evaluation. NIST FRTE 1:N gallery analysis is explicitly external; no claim of deploying or evaluating an internal 1.6-million-identity system.
- Viettel High Tech — Data Science Intern, May–August 2024. Multi-million-row datasets, segmentation and propensity modeling, 15% targeting and 30% reporting improvements. Removed the old Viettel Telecom label.
- UIC — Undergraduate Teaching Assistant, August 2024–Present; CS 151 and CS 341; more than 100 students.
- Removed the older unsupported Viettel AI 3-point/2× improvement claims from public content.

## Repository evidence inspected

Repository source was read; workloads were not retrained, benchmarked, or redeployed as part of portfolio development.

| Project                                                                                   | Reviewed commit                            | Sources and distinctions                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [QuickScoutFootball](https://github.com/ChiCoTheLaAnh/QuickScoutFootball)                 | `e6b656253e4c8636f89b73d26fd43edb6a48e13f` | README, dbt schemas, Airflow DAG and checks, provider sync implementation, documented production evidence. Current CI: 76 tests. Prior hosted builds: 74 tests each and 40 preserved fact rows. Local Airflow proof: 20 fixture fact rows, not API/hosted orchestration. Provider ingestion is TypeScript; Python is used for Airflow/dbt support. Free-plan page restrictions and historical team limitations are disclosed. |
| [repeat-order-recommender](https://github.com/ChiCoTheLaAnh/repeat-order-recommender)     | `441ec5760b4e647b77122e87b8e8a277351aa65e` | README, retrieval/features/model/release configuration. Training Recall@100 = 49.18%; training Recall@200 = 60.13%, validation Recall@200 = 60.86%. Saved logistic NDCG = 0.378038 vs XGBoost = 0.379499. Explicit practical threshold and paired interval support the serving decision, not statistical equivalence. Local 5-client p95 = 12.526 ms, 625.4 req/s; these are not later Cloud Run results.                     |
| [video-object-tracking-SAM2](https://github.com/ChiCoTheLaAnh/video-object-tracking-SAM2) | `9b49f05fdc8f8cbaa3a92df5ccb535d11964c2c6` | README, report/outline.md, configuration and figure manifest. Official 19-clip subset and reviewed ablations: 4/8/7 vs 9/6/4 improved/same/worse. Earlier duplicate-containing manifest is distinguished. No new mask accuracy or latency claims.                                                                                                                                                                             |
| [football-mlops](https://github.com/ChiCoTheLaAnh/football-mlops)                         | `d8dfef4c048c76533cf1351884a2001fb9a3fc3a` | FastAPI routes, xG and win-prob training scripts, MLflow calls, Dockerfile and requirements. Secondary project; no serving performance claims or invented model promotion process.                                                                                                                                                                                                                                            |
| [CNN_Multilabel](https://github.com/ChiCoTheLaAnh/CNN_Multilabel)                         | `04c90dc53457f730d282632a3e4187c5953a384e` | README reports 0.9604 test macro mAP and best validation F1 0.984 for multi-label image classification. Those values do not establish handwriting recognition. Corrected the secondary title and redirected the legacy handwriting slug to the corrected project.                                                                                                                                                             |

## Remaining evidence and asset needs

- Resume integrated: one-page public PDF, working contact hyperlinks, and no extractable phone number. No replacement resume was written.
- Source-confirmed additions: selected coursework; comparative-report work at Viettel AI; exploratory analysis/data-quality work at Viettel High Tech; fuller CS 151/CS 341 teaching responsibilities. Corrected the benchmark notation to FRTE 1:N.
- Optional stronger research reproducibility documentation for the secondary CNN project.
- The actual Vercel-assigned production origin. No domain availability, deployment, or purchase is implied.
