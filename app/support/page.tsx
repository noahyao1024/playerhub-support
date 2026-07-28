import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Set up Playerhub, connect your media server, and troubleshoot local playback on Apple TV.",
};

const steps = [
  {
    number: "01",
    title: "Share a media folder",
    body: "Enable SMB file sharing on your NAS, Mac, or PC. Note the server address, share name, username, and password.",
  },
  {
    number: "02",
    title: "Connect from Playerhub",
    body: "Open Settings, choose NAS Sources, and select Discover Servers. You can also add the server address manually.",
  },
  {
    number: "03",
    title: "Browse and play",
    body: "Open the connected share, choose a video, and let the playback check confirm that the network can sustain it.",
  },
];

export default function SupportPage() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <SiteHeader />

      <section className="page-hero shell">
        <p className="eyebrow">Playerhub support</p>
        <h1>First connection. First frame.</h1>
        <p>
          Playerhub plays media from a server you control. This guide takes you
          from an empty Apple TV to a browsable library.
        </p>
      </section>

      <section className="steps shell" aria-labelledby="setup-title">
        <div className="section-heading compact">
          <p className="eyebrow">Quick start</p>
          <h2 id="setup-title">Connect in three steps.</h2>
        </div>
        <div className="step-list">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="support-grid shell">
        <article className="support-card">
          <p className="eyebrow">Cannot find a server</p>
          <h2>Discovery needs permission.</h2>
          <p>
            In Apple TV Settings, open Privacy &amp; Security, then Local
            Network, and make sure Playerhub is allowed. Confirm that the Apple
            TV and server are on the same network and are not isolated by a
            guest Wi-Fi setting.
          </p>
          <p>
            Discovery is optional. In Playerhub, choose Add Server and enter a
            hostname such as <code>media-server.local</code> or a local IP
            address.
          </p>
        </article>

        <article className="support-card">
          <p className="eyebrow">Login fails</p>
          <h2>Check the share, not only the server.</h2>
          <p>
            Confirm that the account can read the selected shared folder. Some
            NAS devices require a separate permission for each share even when
            the username and password are correct.
          </p>
          <p>
            Remove and re-add the source after changing a password so the
            credential stored in the Apple TV Keychain is refreshed.
          </p>
        </article>

        <article className="support-card">
          <p className="eyebrow">4K keeps buffering</p>
          <h2>Measure the path to the file.</h2>
          <p>
            A high-bitrate title can need substantially more bandwidth than its
            average bitrate during complex scenes. Use wired Ethernet or strong
            5 GHz/6 GHz Wi-Fi, keep the NAS on a wired connection, and avoid a
            guest or mesh relay path when possible.
          </p>
          <p>
            Playerhub performs a preflight check before demanding playback and
            reports when the measured path is below the file&apos;s safe
            target.
          </p>
        </article>

        <article className="support-card">
          <p className="eyebrow">Subtitles are missing</p>
          <h2>Keep sidecars beside the video.</h2>
          <p>
            For sidecar subtitles, place the subtitle in the same folder and
            use the same base filename as the movie. Embedded subtitles can be
            selected from the player&apos;s subtitle menu.
          </p>
          <p>
            Automatic subtitle search is optional and uses OpenSubtitles. The
            exact available languages depend on that service and the title.
          </p>
        </article>
      </section>

      <section className="contact-panel shell">
        <div>
          <p className="eyebrow">Still stuck?</p>
          <h2>Tell us what happened.</h2>
          <p>
            Include the Apple TV model and tvOS version, server brand, protocol,
            file format, and the exact message shown by Playerhub. Never email
            your server password.
          </p>
        </div>
        <a className="button button-primary" href="mailto:hi@noahyao.me">
          Email support
        </a>
      </section>

      <div className="inline-note shell">
        Looking for data details? Read the{" "}
        <Link href="/privacy">Playerhub Privacy Policy</Link>.
      </div>

      <SiteFooter />
    </main>
  );
}
