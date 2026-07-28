import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

async function exportedPage(path) {
  return readFile(new URL(path, outputRoot), "utf8");
}

test("exports the public App Store pages with production metadata", async () => {
  const [home, support, privacy] = await Promise.all([
    exportedPage("index.html"),
    exportedPage("support/index.html"),
    exportedPage("privacy/index.html"),
  ]);

  assert.match(home, /<title>Playerhub for Apple TV<\/title>/);
  assert.match(home, /The cinema you already own\./);
  assert.match(home, /No account/);
  assert.match(home, /No media uploads/);

  assert.match(support, /<title>Support \| Playerhub<\/title>/);
  assert.match(support, /Connect in three steps\./);
  assert.match(support, /Never email your server password\./);

  assert.match(privacy, /<title>Privacy Policy \| Playerhub<\/title>/);
  assert.match(privacy, /TMDb/);
  assert.match(privacy, /OpenSubtitles/);
  assert.match(privacy, /does not use it for analytics, advertising, profiling, or tracking/i);
});

test("uses deployable GitHub Pages links and assets", async () => {
  const [home, support, privacy, noJekyll, socialImage] = await Promise.all([
    exportedPage("index.html"),
    exportedPage("support/index.html"),
    exportedPage("privacy/index.html"),
    readFile(new URL(".nojekyll", outputRoot), "utf8"),
    stat(new URL("og.png", outputRoot)),
  ]);
  const pages = `${home}\n${support}\n${privacy}`;

  assert.match(pages, /\/playerhub-support\/support\//);
  assert.match(pages, /\/playerhub-support\/privacy\//);
  assert.match(pages, /\/playerhub-support\/_next\/static\//);
  assert.match(
    pages,
    /https:\/\/noahyao1024\.github\.io\/playerhub-support\/og\.png/,
  );
  assert.match(noJekyll, /GitHub Pages Jekyll processing/i);
  assert.ok(socialImage.size > 100_000);
});

test("does not publish placeholders, private test data, or Personal features", async () => {
  const pages = (
    await Promise.all([
      exportedPage("index.html"),
      exportedPage("support/index.html"),
      exportedPage("privacy/index.html"),
    ])
  ).join("\n");

  assert.doesNotMatch(pages, /REQUIRED_|TODO|PLACEHOLDER/i);
  assert.doesNotMatch(pages, /Noahs-Mac|10\.161\.|SMB_PASSWORD/i);
  assert.doesNotMatch(
    pages,
    /\b(?:torrent|magnet|arcade|Bilibili|iQiyi|Invidious)\b/i,
  );
});
