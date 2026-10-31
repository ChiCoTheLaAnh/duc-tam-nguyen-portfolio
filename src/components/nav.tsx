"use client";
import Link from "next/link";
import { site } from "@/content/site";
import { usePathname } from "next/navigation";
import { useState, useRef, useSyncExternalStore } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["About", "/about"],
  ["Resume", "/resume"],
  ["Contact", "/contact"],
];
const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;
export function Nav() {
  const enhanced = useSyncExternalStore(
    subscribe,
    clientSnapshot,
    serverSnapshot,
  );
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="header"
      data-nav-enhanced={enhanced ? "true" : undefined}
    >
      <div className="container nav">
        <Link
          href="/"
          className="wordmark"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} home`}
        >
          tn<span>.</span>
        </Link>
        <button
          ref={toggleRef}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              toggleRef.current?.focus();
            }
          }}
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                (href === "/" ? pathname === href : pathname.startsWith(href))
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
              {label === "Contact" && <ArrowUpRight size={14} />}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
