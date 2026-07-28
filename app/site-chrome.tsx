import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="Playerhub home">
        <span className="brand-glyph">P</span>
        <span>Playerhub</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div>
        <span className="footer-brand">Playerhub</span>
        <p>Your personal cinema, played directly from your own server.</p>
      </div>
      <div className="footer-links">
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy</Link>
        <a href="mailto:hi@noahyao.me">hi@noahyao.me</a>
      </div>
      <p className="copyright">
        Copyright {new Date().getFullYear()} Playerhub. Apple TV is a trademark
        of Apple Inc.
      </p>
    </footer>
  );
}
