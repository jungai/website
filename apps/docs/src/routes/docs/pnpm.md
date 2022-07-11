# Pnpm

## Getting start

install pnpm via asdf,npm,yarn

> recommended `asdf` 😀

```bash
asdf plugin-add pnpm
# npm -g pnpm
# yarn global add pnpm
```

## Command

### Install

```bash
pnpm install
```

### Run script

```bash
pnpm run build # pnpm build
pnpm run dev # pnpm dev
```

### Run script (recursive)

```bash
pnpm -r run build # pnpm build
pnpm -r run dev # pnpm dev
```

### Run script in each packages

```bash
pnpm --filter=<package name> build
# pnpm --filter=<package name> build
```

### Run script without installing

```bash
pnpm dlx ts-node ./src/index.ts
```

## With workspace

create a `pnpm-workspace.yaml` in root of project and declare each package

```yaml
packages:
	- '<package_name>'
	- '<package_name>'
	- '<package_name>'

```

## Overrides(resolutions)

force dependencies use the same version, declare pnpm option in root `package.json`

```json
{
	...
  "pnpm": {
    "overrides": {
      "express": "^5.0.0-beta-1"
    }
  }
}

```

## Reference

- [pnpm](https://pnpm.io/)
- [asdf-pnpm](https://github.com/jonathanmorley/asdf-pnpm)
