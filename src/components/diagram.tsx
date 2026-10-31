import {
  ArrowRight,
  Database,
  Layers3,
  Workflow,
  Terminal,
} from "lucide-react";
const icons = [Database, Layers3, Workflow, Terminal];
export function Diagram({
  nodes,
  label,
  compact = false,
}: {
  nodes: string[];
  label: string;
  compact?: boolean;
}) {
  return (
    <figure
      className={compact ? "diagram compact" : "diagram"}
      aria-label={label}
    >
      <div className="diagram-label">
        <span className="status-dot" /> SYSTEM OVERVIEW <span>→</span>
      </div>
      <div className="diagram-nodes">
        {nodes.map((node, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div className="diagram-step" key={node}>
              <div className="diagram-node">
                <Icon size={compact ? 20 : 24} strokeWidth={1.4} />
                <span>{node}</span>
                <small>0{i + 1}</small>
              </div>
              {i < nodes.length - 1 && (
                <ArrowRight className="diagram-arrow" size={16} />
              )}
            </div>
          );
        })}
      </div>
      <figcaption>
        {compact
          ? "Conceptual architecture"
          : "Conceptual flow · component-level overview"}
      </figcaption>
    </figure>
  );
}
