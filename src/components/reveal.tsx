"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
/** Progressive enhancement: no JS or reduced motion leaves every section visible. */
export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const nodes = document.querySelectorAll<HTMLElement>(
      ".section-heading, .project-card, .job, .capability-card, .principle-grid article",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("reveal-pending");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top > window.innerHeight) {
        node.classList.add("reveal-pending");
        observer.observe(node);
      }
    });
    const show = () =>
      nodes.forEach((n) => n.classList.remove("reveal-pending"));
    media.addEventListener("change", show);
    return () => {
      observer.disconnect();
      show();
      media.removeEventListener("change", show);
    };
  }, [pathname]);
  return null;
}
