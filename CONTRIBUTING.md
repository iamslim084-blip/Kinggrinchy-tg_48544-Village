# Contributing

Thanks for helping out. This project is released under CC0 1.0, so contributions must be compatible with a public-domain dedication.

## Proposing changes

1. Open an issue or draft PR describing the change and why it is needed before starting anything large.
2. Branch from the default branch and make your change.
3. Open a PR that explains what changed and how you checked it.

## Keep PRs small

- One logical change per PR.
- Don't mix refactors, renames or reformatting with functional changes.
- Match the existing code style.
- Only touch documentation when the change requires it.

## CC0 and dependencies

- Do not add dependencies, code snippets or assets whose licenses conflict with CC0 (for example GPL/AGPL or other copyleft, or "attribution required" licenses) without raising it in the PR first.
- Permissive or public-domain licenses (MIT, BSD, ISC, Apache-2.0, CC0, Unlicense) are generally fine, but state the license of any new dependency in the PR description.
- Don't paste code from sources with unclear licensing.
- Never commit secrets (such as bot tokens). Env files are git-ignored; use a `.env.example` for templates.

## AI assistants

- Don't invent APIs, modules or commands; check the code first.
- State your assumptions (language, structure) in the PR.
- Keep changes small and easy to reorganize.
- The same CC0 rules apply to AI-generated code.

## Project context document

When a change alters the architecture (new modules, entry points, stack or tooling, directory layout), update the project context document in the same PR so it stays accurate. Also add stack-specific entries to `.gitignore` when you introduce new dependencies or build output (e.g. `node_modules/`).
