import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

export const metadata: Metadata = {
  title: "Playerhub for Apple TV",
  description:
    "A refined Apple TV player for the movies and shows stored on your own NAS or computer.",
};

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <SiteHeader />

      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Your library. Your screen.</p>
          <h1>The cinema you already own.</h1>
          <p className="hero-lede">
            Playerhub brings the movies and shows on your NAS or computer to
            Apple TV, in their original quality and without uploading your
            library.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/support">
              Set up Playerhub
            </Link>
            <Link className="button button-quiet" href="/privacy">
              Read our privacy policy
            </Link>
          </div>
          <div className="trust-row" aria-label="Playerhub highlights">
            <span>No account</span>
            <span>No subscription</span>
            <span>No media uploads</span>
          </div>
        </div>

        <div className="screen-stage reveal reveal-delay" aria-hidden="true">
          <div className="screen-glow" />
          <div className="screen">
            <div className="screen-top">
              <span className="screen-mark">P</span>
              <div className="screen-tabs">
                <span className="active">Home</span>
                <span>Search</span>
                <span>Settings</span>
              </div>
            </div>
            <div className="screen-feature">
              <span className="screen-kicker">NOW PLAYING</span>
              <strong>Your collection, beautifully presented.</strong>
              <div className="screen-progress">
                <i />
              </div>
            </div>
            <div className="poster-row">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="stage-plaque">PLAYERHUB / APPLE TV</div>
        </div>
      </section>

      <section className="feature-section shell">
        <div className="section-heading">
          <p className="eyebrow">Made for the living room</p>
          <h2>Direct playback. Deliberate design.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-number">01</span>
            <h3>Your server, directly</h3>
            <p>
              Connect an SMB or WebDAV share on your local network. Playerhub
              reads your files where they already live.
            </p>
          </article>
          <article className="feature-card featured">
            <span className="feature-number">02</span>
            <h3>Built for high bitrate</h3>
            <p>
              Native hardware playback, adaptive buffering, and format-aware
              routing keep 4K, HEVC, HDR, and Dolby Vision in focus.
            </p>
          </article>
          <article className="feature-card">
            <span className="feature-number">03</span>
            <h3>Subtitles that belong</h3>
            <p>
              Use embedded or sidecar subtitles, remember language choices, and
              optionally look up a precisely matched subtitle.
            </p>
          </article>
        </div>
      </section>

      <section className="manifesto shell">
        <p className="eyebrow">A private path to the big screen</p>
        <blockquote>
          Your media stays yours. Playerhub does not host, provide, index, or
          sell movies and television.
        </blockquote>
        <p>
          It is a player for files you own and servers you control. Server
          credentials and playback history stay on your Apple TV.
        </p>
      </section>

      <section className="support-cta shell">
        <div>
          <p className="eyebrow">Need a hand?</p>
          <h2>From first connection to first frame.</h2>
        </div>
        <Link className="button button-primary" href="/support">
          Open support
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
