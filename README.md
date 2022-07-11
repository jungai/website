# My Website

- [blogs](https://www.juver.xyz/)
- [docs](https://docs-git-dev-jungai.vercel.app/)

> previous version branch -> [nextjs](https://github.com/jungai/website/tree/nextjs)

## Setup

> use pnpm

```sh
pnpm install
```

## Local Development

```json
	"scripts": {
		"build:blogs": "turbo run build --filter=blogs",
		"build:docs": "turbo run build --filter=docs",
		"dev:blogs": "turbo run dev --filter=blogs",
		"dev:docs": "turbo run dev --filter=docs"
	}
```
