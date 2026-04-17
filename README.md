# aries-web

Landing page for [Aries](https://github.com/primum-mobile/aries) — modern astrology software.

Served at [aries.sh](https://aries.sh).

## Stack

- Vite 8 + React 19
- Tailwind CSS v4
- GitHub Pages (deployed via Actions on push to `main`)

## Develop

```sh
npm install --legacy-peer-deps
npm run dev
```

## Build

```sh
npm run build
```

Output lands in `dist/`. Deployment is automated — merging to `main` triggers `.github/workflows/deploy.yml`.
