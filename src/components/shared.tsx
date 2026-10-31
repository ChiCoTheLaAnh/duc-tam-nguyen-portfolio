import Link from "next/link";
import { ArrowUpRight, GitFork, BriefcaseBusiness, Mail } from "lucide-react";
import { site } from "@/content/site";
export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="social-links">
      {site.github && (
        <a href={site.github} target="_blank" rel="noreferrer">
          <GitFork size={17} />
          GitHub
          <ArrowUpRight size={13} />
        </a>
      )}
      {site.linkedin && (
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          <BriefcaseBusiness size={17} />
          LinkedIn
          <ArrowUpRight size={13} />
        </a>
      )}
      {site.email && (
        <a href={`mailto:${site.email}`}>
          <Mail size={17} />
          {compact ? "Email" : site.email}
        </a>
      )}
    </div>
  );
}
export function ContactCTA() {
  return (
    <section className="contact-band container">
      <div>
        <p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p>
        <h2>
          Good systems start with
          <br />a good conversation.
        </h2>
        <p>
          Interested in data, machine learning, or the engineering in between?
        </p>
      </div>
      <a href={`mailto:${site.email}`} className="button dark">
        Email Tam <ArrowUpRight size={18} />
      </a>
    </section>
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p className="intro-copy">{children}</p>
    </div>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <div>
        <Link className="footer-name" href="/">
          {site.name}
          <span>.</span>
        </Link>
        <p>Thoughtful data. Dependable engineering.</p>
      </div>
      <div className="footer-right">
        <SocialLinks compact />
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <Link href="/resume">
          Resume <ArrowUpRight size={13} />
        </Link>
      </div>
    </footer>
  );
}
