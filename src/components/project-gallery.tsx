"use client";
import { useState } from "react";
import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";
const filters = [
  "All projects",
  "Data Engineering",
  "Machine Learning",
  "MLOps",
  "Research",
];
export function ProjectGallery() {
  const [active, setActive] = useState("All projects");
  const filtered = projects.filter(
    (p) => active === "All projects" || p.filters.includes(active),
  );
  return (
    <>
      <div className="filters" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={active === f}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filtered.length} projects shown
      </p>
      <div className="project-grid gallery-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
