/** Short project accounts; detailed measurements and qualifications stay in case studies. */
export const projectStories: Record<
  string,
  { heading: string; paragraphs: string[] }
> = {
  "quickscout-football": {
    heading: "The second run mattered more than the first.",
    paragraphs: [
      "I built QuickScout to turn football API data into tables I could analyze with SQL. Getting data in was the starting point; handling quotas, retries, and repeated runs was the harder part.",
      "I used stable keys and idempotent upserts so a rerun wouldn’t create duplicate facts. A separate local Airflow workflow let me test recovery and check that the data stayed unchanged.",
    ],
  },
  "repeat-order-recommendation": {
    heading: "I kept the simpler model.",
    paragraphs: [
      "Could purchase history make a useful next-order recommendation? I built a retrieval-and-ranking pipeline, then compared a personalized heuristic, logistic regression, and XGBoost.",
      "XGBoost scored only slightly higher, while logistic regression’s artifact was about 66× smaller. I chose logistic regression for the FastAPI service and checked that API rankings matched offline inference.",
    ],
  },
  "text-prompted-video-tracking": {
    heading: "A fresh detection could fix a track—or break it.",
    paragraphs: [
      "For our CS 415 project, Chi Hieu Nguyen and I explored tracking an object from a text prompt with Grounding DINO and SAM2. Crowded scenes made the problem interesting: refreshing a detection could switch the tracker to a different person.",
      "We kept the clips and refresh schedule fixed and tightened the matching gate. Being more selective helped recover difficult tracks, while some previously stable tracks still failed.",
    ],
  },
  "football-mlops-api": {
    heading: "Giving a trained model a usable interface.",
    paragraphs: [
      "I brought expected-goals and win-probability models behind FastAPI endpoints, with Docker packaging and MLflow training records. The focus was the path from a training script to a prediction someone could request.",
    ],
  },
  "multilabel-image-classification": {
    heading: "Looking beyond a single overall score.",
    paragraphs: [
      "I worked on multi-label image classification with a convolutional network. Class-level evaluation and threshold choices mattered: a good aggregate result could still hide different kinds of mistakes.",
    ],
  },
};

/** Links and stills extracted from slide 8 of the supplied CS 415 deck. */
export const trackingArtifact = {
  baselineImage: "/evidence/tracking-baseline.jpg",
  selectiveImage: "/evidence/tracking-selective.jpg",
  baselineClip:
    "https://drive.google.com/file/d/1usio8uvmJ7lvih-m6O4f-niAigHZd0UF/view",
  selectiveClip:
    "https://drive.google.com/file/d/1z06GMwMZlz-uYA9qftWn9Kp_DIPi-y_p/view",
  caption:
    "Actual frames from our CS 415 slides: clip 12699538, prompted with ‘person’, was reviewed as wrong-object tracking in the baseline and good tracking with selective re-grounding.",
};
