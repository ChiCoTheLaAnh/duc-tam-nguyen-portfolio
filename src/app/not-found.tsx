import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container page-shell">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This path ends here.</h1>
      <p className="intro-copy">
        There’s more to explore in the project collection.
      </p>
      <Link className="button dark" href="/projects">
        Explore projects ↗
      </Link>
    </div>
  );
}
