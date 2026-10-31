import type { TechnicalTable, Project } from "@/content/projects";
export function ResultsTable({ table }: { table: TechnicalTable }) {
  return (
    <div className="results-table">
      <p className="table-hint">Scroll to read all columns →</p>
      <div
        className="table-scroll"
        tabIndex={0}
        role="region"
        aria-label={table.caption}
      >
        <table>
          <caption>{table.caption}</caption>
          <thead>
            <tr>
              {table.headers.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((value, j) =>
                  j === 0 ? (
                    <th key={j} scope="row">
                      {value}
                    </th>
                  ) : (
                    <td key={j}>{value}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export function Decisions({ project }: { project: Project }) {
  if (!project.decisions.length) return null;
  return (
    <section className="decision-section" aria-labelledby="decisions-title">
      <p className="eyebrow">THE REASONING BEHIND THE SYSTEM</p>
      <h2 id="decisions-title">Decisions that mattered.</h2>
      <div className="decision-grid">
        {project.decisions.map((d, i) => (
          <article key={d.title}>
            <span className="index">DECISION 0{i + 1}</span>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
