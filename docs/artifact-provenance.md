# Project artifact provenance

## QuickScout

The existing Airflow screenshot and log are unchanged. Their source commit, paths and checksums are recorded in `content-audit.md`. The homepage now shows the actual six-task local pipeline run instead of the 40→40 metric graphic. This is local fixture orchestration, not deployed production Airflow.

## Recommendation response

`public/evidence/recommendation-fixture-response.json` was captured from the actual FastAPI app in `ChiCoTheLaAnh/repeat-order-recommender` at commit `df6367d715e353e5e4fb438d3ada62e95d967a45`.

The capture loaded `ReleaseTests` in `tests/test_release_bundle.py`, called `setUpClass()` and `setUp()` to create its existing synthetic fixture bundle, then used FastAPI `TestClient(create_app(fixture.path))` to request `/recommendations/known-private-id?k=3`. The request returned HTTP 200. The complete parsed JSON was asserted equal to `ReleaseBundle.load(fixture.path).recommend('known-private-id', 3)` before writing it unchanged apart from JSON indentation. No production data, trained retail release, deployment or new performance experiment is implied. The fixture identifier is synthetic, not a private customer ID.

The displayed excerpt selects item IDs/descriptions, response mode and score kind from that recorded file; the full JSON contains raw scores and release/model versions. Model margins are not calibrated probabilities.

Capture runtime: Python 3.12, pandas 2.2.3, scikit-learn 1.8.0, NumPy 2.3.5, FastAPI 0.141.1, HTTPX 0.28.1, PyArrow 26.0.0, xgboost-cpu 3.0.5. The source fixture was run with bounded BLAS/OpenMP threads. These differ from the original project's pinned experiment environment; this artifact illustrates API behavior, not benchmark reproduction. Portfolio npm dependencies were not changed.

SHA-256: `66644b02bfb42376ffeca42c36ce20c768fa66e8d2f4d8f43aa3faee95231913`.

## SAM2 tracking evidence

Source: user-supplied `slide cs 415.pptx`, slide 8, “Qualitative Improvements.” The deck credits Duc Tam Nguyen and Chi Hieu Nguyen. Images were extracted directly from the ZIP, inspected, and copied unchanged:

| Public file              | PowerPoint source       | SHA-256                                                            |
| ------------------------ | ----------------------- | ------------------------------------------------------------------ |
| `tracking-baseline.jpg`  | `ppt/media/image4.jpg`  | `428df0b6a47b2f5befa9c926ae6ab4625d22afbb12d51e86d47c690315a5bc44` |
| `tracking-selective.jpg` | `ppt/media/image19.jpg` | `f05ca3c1c45e14ea74fffac677d4748deaaf79095ffe996ff5e1618057cdafb3` |

Slide 8's labels identify clip 12699538, prompt `person`, qualitative review `wrong_object → good_tracking`. The images are still frames, not a fabricated video or evidence that a single frame establishes the full clip's outcome. They are presented as recorded slide evidence with the clip-level review attributed to the slides. Both outcomes and remaining regressions remain in the case study.

The original frame hyperlinks in slide 8 are reused for the baseline and selective clip actions, with HTTPS:

- Baseline: `https://drive.google.com/file/d/1usio8uvmJ7lvih-m6O4f-niAigHZd0UF/view`
- Selective: `https://drive.google.com/file/d/1z06GMwMZlz-uYA9qftWn9Kp_DIPi-y_p/view`

The PowerPoint contains static images and external Drive links, not embedded video files. This environment does not allow Drive access, so the clip links' current public permissions/playback could not be verified. No autoplay, remote iframe, invented footage or stock substitute was added. The local frames remain visible without JavaScript or access to Google Drive.

## Personal content

The user confirmed data engineering as the main direction, with ML engineering secondary. Internship ownership uses existing source-aligned experience descriptions. No portrait was supplied or invented. Project motivation is framed around the actual engineering problem; no new personal history or unverified individual division of the team project is claimed.
