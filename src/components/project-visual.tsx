import type { Project } from "@/content/projects";
export function ProjectVisual({ project: p }: { project: Project }) {
  return (
    <div
      className={`project-art art-${p.visual}`}
      role="img"
      aria-label={`${p.title}: ${p.nodes.join(" to ")}. Illustrated system overview.`}
    >
      <div className="art-heading">
        <span>ENGINEERING STUDY / {p.number}</span>
        <span>↗</span>
      </div>
      {p.visual === "pipeline" ? (
        <svg viewBox="0 0 560 240" aria-hidden="true">
          <defs>
            <pattern
              id={`grid-${p.slug}`}
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M24 0H0V24"
                fill="none"
                stroke="currentColor"
                strokeOpacity=".08"
              />
            </pattern>
          </defs>
          <rect width="560" height="240" fill={`url(#grid-${p.slug})`} />
          <path
            className="art-path"
            d="M92 120H220M300 120H350M350 120V49H440M350 120H440M350 120V191H440"
          />
          <g className="art-box">
            <rect x="25" y="87" width="95" height="66" rx="6" />
            <rect x="202" y="78" width="114" height="84" rx="6" />
            <rect x="430" y="27" width="104" height="44" rx="4" />
            <rect x="430" y="98" width="104" height="44" rx="4" />
            <rect x="430" y="169" width="104" height="44" rx="4" />
          </g>
          <g className="art-text">
            <text x="72" y="115">
              API
            </text>
            <text x="72" y="134">
              Football
            </text>
            <text x="259" y="115">
              Postgres
            </text>
            <text x="259" y="135">
              → dbt
            </text>
            <text x="482" y="54">
              Player
            </text>
            <text x="482" y="125">
              Team
            </text>
            <text x="482" y="196">
              League
            </text>
            <text x="349" y="224" className="art-tiny">
              STAR SCHEMA
            </text>
          </g>
          <g className="art-box">
            <rect x="325" y="100" width="50" height="40" rx="4" />
            <text className="art-text art-tiny" x="350" y="124">
              Fact
            </text>
          </g>
        </svg>
      ) : p.visual === "tracking" ? (
        <svg viewBox="0 0 560 240" aria-hidden="true">
          <g className="art-frame">
            <rect x="45" y="45" width="170" height="146" rx="5" />
            <rect x="195" y="30" width="170" height="146" rx="5" />
            <rect x="345" y="45" width="170" height="146" rx="5" />
          </g>
          <path className="track-trail" d="M128 140Q245 50 430 120" />
          <g className="track-target">
            <rect x="104" y="95" width="46" height="63" rx="4" />
            <rect x="263" y="71" width="46" height="63" rx="4" />
            <rect x="414" y="84" width="46" height="63" rx="4" />
          </g>
          <g className="art-text art-tiny">
            <text x="130" y="217">
              FRAME t
            </text>
            <text x="280" y="202">
              t + 10
            </text>
            <text x="430" y="217">
              t + 20
            </text>
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 560 240" aria-hidden="true">
          <g className="rank-input">
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x="45"
                y={45 + i * 31}
                width={90 + (i % 2) * 30}
                height="18"
                rx="3"
              />
            ))}
          </g>
          <path className="art-path" d="M180 120H230M325 120H390" />
          <g className="art-box">
            <rect x="225" y="72" width="108" height="96" rx="8" />
          </g>
          <g className="art-text">
            <text x="279" y="115">
              {p.visual === "ranking"
                ? "Rank"
                : p.visual === "serving"
                  ? "Serve"
                  : "CNN"}
            </text>
            <text x="279" y="135" className="art-tiny">
              {p.visual === "ranking"
                ? "LOGISTIC"
                : p.visual === "serving"
                  ? "FASTAPI"
                  : "RESIDUAL"}
            </text>
          </g>
          <g className="rank-output">
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect
                  x="394"
                  y={67 + i * 39}
                  width={120 - i * 20}
                  height="25"
                  rx="4"
                />
                <text x="407" y={84 + i * 39}>
                  0{i + 1}
                </text>
              </g>
            ))}
          </g>
        </svg>
      )}
      <div className="art-caption">
        <span>
          {p.visual === "pipeline"
            ? "INGEST → TRANSFORM → VALIDATE"
            : p.visual === "tracking"
              ? "TEXT → DETECTION → MASK PROPAGATION"
              : "DATA → MODEL → APPLICATION"}
        </span>
        <span>Conceptual view</span>
      </div>
    </div>
  );
}
