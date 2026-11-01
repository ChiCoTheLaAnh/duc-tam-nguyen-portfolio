import { rankingComparison, trackingComparison } from "@/content/evidence";
export function EvidenceVisual({
  kind,
}: {
  kind: "pipeline" | "ranking" | "tracking";
}) {
  return (
    <figure className={`evidence-visual evidence-${kind}`}>
      {kind === "pipeline" ? (
        <>
          <figcaption>Recorded hosted dbt reruns</figcaption>
          <div className="rerun-comparison">
            <div>
              <span>Build 1</span>
              <strong>40</strong>
              <small>fact rows</small>
            </div>
            <span className="rerun-arrow" aria-hidden="true">
              →
            </span>
            <div>
              <span>Build 2</span>
              <strong>40</strong>
              <small>fact rows</small>
            </div>
          </div>
          <p className="chart-takeaway">
            Zero duplicate fact keys after reruns.
          </p>
          <p className="chart-context">
            76 current CI data-quality tests cover keys, relationships, metric
            constraints, and row preservation. The earlier hosted runs used 74
            tests per build.
          </p>
        </>
      ) : kind === "ranking" ? (
        <>
          <figcaption>Ranking quality · validation NDCG@10</figcaption>
          <div className="ranking-bars">
            {rankingComparison.map((row) => (
              <div
                className={
                  row.selected ? "ranking-row selected" : "ranking-row"
                }
                key={row.label}
              >
                <div>
                  <span>{row.label}</span>
                  <strong>{row.value.toFixed(4)}</strong>
                </div>
                <div className="bar-track" aria-hidden="true">
                  <span style={{ width: `${(row.value / 0.4) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="chart-axis">
            <span>0.0</span>
            <span>0.4</span>
          </div>
          <p className="chart-takeaway">+0.0429 NDCG over the heuristic.</p>
          <p className="chart-context">
            Same frozen candidate pools; 1,817 primary validation queries.
            Logistic regression is the serving choice. This is not test-set or
            business-lift evidence.
          </p>
        </>
      ) : (
        <>
          <figcaption>Re-grounding policies · same 19 clips</figcaption>
          <div className="outcome-legend">
            <span>
              <i className="improved" />
              Improved
            </span>
            <span>
              <i className="unchanged" />
              Same
            </span>
            <span>
              <i className="worse" />
              Worse
            </span>
          </div>
          {trackingComparison.map((row) => (
            <div className="tracking-row" key={row.label}>
              <p>{row.label}</p>
              <div
                className="outcome-bar"
                aria-label={`${row.label}: ${row.improved} improved, ${row.unchanged} unchanged, ${row.worse} worse than the baseline`}
              >
                {(["improved", "unchanged", "worse"] as const).map((key) => (
                  <span
                    className={key}
                    key={key}
                    style={{ width: `${(row[key] / 19) * 100}%` }}
                  >
                    {row[key]}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <p className="chart-takeaway">
            A stricter gate reduced harmful reseeding.
          </p>
          <p className="chart-context">
            Qualitative review relative to the no-re-grounding baseline. The
            gate is a matching rule, not measured mask accuracy. Four
            regressions remain.
          </p>
        </>
      )}
      <p className="chart-provenance">
        Redrawn from the linked repository record · not a new experiment.
      </p>
    </figure>
  );
}
