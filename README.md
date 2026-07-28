# Playerhub Support Site

Public App Store support, privacy, and marketing pages for Playerhub.

## Public URLs

- `https://noahyao1024.github.io/playerhub-support/`
- `https://noahyao1024.github.io/playerhub-support/support/`
- `https://noahyao1024.github.io/playerhub-support/privacy/`

The public source mirror is:
`https://github.com/noahyao1024/playerhub-support`

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build:pages
```

`build:pages` creates a static export with the `/playerhub-support` base path
used by GitHub Pages.

## Publishing

The deployed `gh-pages` branch contains the static files from `out/`.

```bash
npm run build:pages
git worktree add /tmp/playerhub-pages gh-pages
rsync -a --delete out/ /tmp/playerhub-pages/
git -C /tmp/playerhub-pages add --all
git -C /tmp/playerhub-pages commit -m "Publish support site"
git -C /tmp/playerhub-pages push origin gh-pages
```

Do not put credentials, private server details, analytics, or user data on this
site. Changes to privacy wording must remain consistent with
`../appstore/PRIVACY_ANSWERS.md`, the app privacy manifest, and App Store
Connect answers.
