import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Playerhub handles local server credentials, playback history, metadata, and subtitle requests.",
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="ambient ambient-two" />
      <SiteHeader />

      <article className="policy shell">
        <header className="page-hero policy-hero">
          <p className="eyebrow">Privacy policy</p>
          <h1>Your library is not our business.</h1>
          <p>
            Playerhub is designed to play media from servers you control. We do
            not operate an account system, advertising network, or analytics
            service.
          </p>
          <time dateTime="2026-07-29">Effective July 29, 2026</time>
        </header>

        <div className="policy-summary">
          <strong>In plain language</strong>
          <p>
            The developer does not collect your identity, viewing history,
            credentials, or media. Optional artwork and subtitle requests go
            directly from your device to the service you choose.
          </p>
        </div>

        <section>
          <h2>1. Information stored on your Apple TV</h2>
          <p>
            Server addresses, share settings, playback progress, subtitle
            preferences, and app preferences are stored locally on your Apple
            TV. Server usernames and passwords are stored using Apple&apos;s
            Keychain services. This information is used only to provide the
            features you request.
          </p>
          <p>
            Playerhub does not send this local information to the developer and
            does not use it for analytics, advertising, profiling, or tracking.
          </p>
        </section>

        <section>
          <h2>2. Local network access</h2>
          <p>
            Playerhub asks for Local Network permission so it can discover and
            connect to media servers on your network. Video and audio are read
            directly from the server you select. Playerhub does not upload your
            media library to the developer.
          </p>
        </section>

        <section>
          <h2>3. Optional third-party services</h2>
          <p>
            If you use artwork matching, Playerhub sends title text derived
            from a filename to The Movie Database (TMDb) and receives matching
            metadata and artwork. If you use subtitle search, Playerhub sends a
            title or non-personal file fingerprint to OpenSubtitles and
            receives available subtitle results.
          </p>
          <p>
            These requests are sent directly from your device. The developer
            does not receive them. The services may process network information
            such as your IP address under their own policies:
          </p>
          <ul>
            <li>
              <a
                href="https://www.themoviedb.org/privacy-policy"
                rel="noreferrer"
                target="_blank"
              >
                TMDb Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.opensubtitles.com/en/privacy-policy"
                rel="noreferrer"
                target="_blank"
              >
                OpenSubtitles Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Data collection, tracking, and advertising</h2>
          <p>
            The developer does not collect personal data through Playerhub.
            Playerhub contains no developer-operated analytics, advertising,
            cross-app tracking, or user account system. The playback and
            networking libraries included in the app are used to process media
            locally and are not used by the developer to collect data.
          </p>
        </section>

        <section>
          <h2>5. Retention and deletion</h2>
          <p>
            Because the developer does not receive your app data, there is no
            developer-held profile to retain or delete. You can remove a saved
            server inside Playerhub to delete its saved configuration and
            credential. Deleting Playerhub from Apple TV removes the app&apos;s
            remaining local data according to tvOS behavior.
          </p>
          <p>
            Third-party services control their own retention practices. Use the
            links above for their policies and contact options.
          </p>
        </section>

        <section>
          <h2>6. Children</h2>
          <p>
            Playerhub does not knowingly collect personal information from
            children or anyone else. The app plays media selected from a server
            configured by the device owner.
          </p>
        </section>

        <section>
          <h2>7. Changes to this policy</h2>
          <p>
            If Playerhub&apos;s data practices change, this policy will be
            updated before the related app version is released. The effective
            date at the top identifies the latest version.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            Questions about Playerhub privacy can be sent to{" "}
            <a href="mailto:hi@noahyao.me">hi@noahyao.me</a>.
          </p>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
