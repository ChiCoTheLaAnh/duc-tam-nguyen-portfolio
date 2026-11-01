import { test } from "node:test";
import assert from "node:assert/strict";
import {
  projectEvidence,
  rankingComparison,
  trackingComparison,
} from "../src/content/evidence.ts";

test("displayed improvement uses the ranking baseline and tracking outcomes share the same cohort", () => {
  const baseline = rankingComparison.find(
    (row) => row.label === "Personalized heuristic",
  );
  const serving = rankingComparison.find((row) => row.selected);
  assert.ok(baseline && serving && baseline.value > 0);
  const relative = ((serving.value - baseline.value) / baseline.value) * 100;
  assert.equal(
    projectEvidence["repeat-order-recommendation"].metric,
    `+${relative.toFixed(1)}%`,
  );
  for (const row of trackingComparison)
    assert.equal(row.improved + row.unchanged + row.worse, 19);
  assert.equal(
    projectEvidence["text-prompted-video-tracking"].metric,
    `${trackingComparison[0].improved} → ${trackingComparison[1].improved}`,
  );
  for (const proof of Object.values(projectEvidence)) {
    assert.ok(
      proof.problem &&
        proof.built &&
        proof.result &&
        proof.scope &&
        proof.deployment,
    );
    assert.ok(proof.sources.length > 0);
    for (const source of proof.sources)
      assert.match(
        source.href,
        /^https:\/\/github\.com\/.+\/blob\/[a-f0-9]{40}\//,
      );
  }
});
