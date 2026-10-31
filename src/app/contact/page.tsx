import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { PageIntro, SocialLinks } from "@/components/shared";
export const metadata = pageMetadata(
  "Contact",
  "Connect with Tam Nguyen about data engineering, machine learning, and engineering opportunities.",
  "/contact",
);
export default function Contact() {
  const configured = site.email || site.linkedin || site.github;
  return (
    <div className="container page-shell contact-page">
      <PageIntro
        label="LET’S CONNECT"
        title="There’s always a next good problem."
      >
        I’m interested in opportunities where I can build dependable data
        systems, learn from thoughtful engineers, and turn models into useful
        applications.
      </PageIntro>
      <div className="contact-panel">
        <div>
          <p className="eyebrow">START A CONVERSATION</p>
          <h2>Talk data. Talk engineering.</h2>
          {configured ? (
            <SocialLinks />
          ) : (
            <p>
              Direct contact details will be added soon. In the meantime,
              explore my work and experience.
            </p>
          )}
        </div>
        <Link href="/resume" className="button dark">
          View Resume <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="contact-details">
        <div>
          <span className="eyebrow">INTERESTED IN</span>
          <p>{site.targetRoles.join(" · ")}</p>
        </div>
        <div>
          <span className="eyebrow">BASED IN {site.location}</span>
          <p>
            {site.university}
            <br />
            Expected graduation · {site.graduation}
          </p>
        </div>
      </div>
    </div>
  );
}
