# Repository Information

This repository hosts a GitHub Pages website for the DSI Clinic.

## Serving the Website Locally

To serve the website locally, use Docker with the provided Makefile:

```bash
make
```

**Important**: Do not use the local environment for serving the page. Always use Docker via the Makefile.

## Link Checker Notes

The linkspector GitHub Action (`.github/workflows/action.yml`) checks every link in the repo on each PR, not just changed lines. Failures show up on the separate "Linkspector" reviewdog check, not the `runner / linkspector` job.

- The site lives at `https://clinic.ds.uchicago.edu`, and the repo lives in the `dsi-rse` org. Old `dsi-clinic.github.io` URLs return 404, so don't use them.
- Student project repos live under `github.com/dsi-rse/` (one under `uchicago-dsi`); many are private, so `.linkspector.yml` ignores the `dsi-rse` prefix. Old `github.com/dsi-clinic/...` repo URLs only work through GitHub redirects, so use the current org and repo name.
