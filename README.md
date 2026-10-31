# AI-native web hackathon kit

Public reusable preparation kit for a time-boxed web challenge with **Codex + Next.js**. This is preparation material, not a competition submission.

## Quick start

```bash
git clone https://github.com/scrla/hynix-ai-hackathon-kit.git
cd hynix-ai-hackathon-kit
npm install
npm run dev
```

The URL is an intended destination; the public repo must be created first. Requires Node.js 20.9+.

## On challenge day

1. Save the real task into local `harness/TASK.md`; **do not publish private task text**.
2. Ask Codex: `Read AGENTS.md and scope-mvp skill. Convert the task to acceptance criteria and implementation order.`
3. Build a working vertical slice, not decorative pages.
4. Run `npm run verify`, `npm run build`, and `npm run test:e2e` (browser installation may be required).
5. Record evidence and limitations in `harness/RESULTS.md`.

## Contents

- `AGENTS.md`: Codex project instructions
- `.agents/skills/`: scope, build, and verification workflows
- `app/`: responsive Next.js starter with interactive UI and health API
- `harness/`: intake checklist, tests, result log
- `scripts/`: dependency-independent preflight checks
- `prompts/`: copy-ready Codex prompts
- `docs/`: compliance, architecture, attribution

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the app |
| `npm run typecheck` | TypeScript |
| `npm run lint` | ESLint |
| `npm run test` | Unit tests |
| `npm run verify` | Preflight + typecheck + lint + tests |
| `npm run build` | Production build |
| `npm run test:e2e` | Playwright smoke tests |

## Publish

Create an **empty public** GitHub repository `scrla/hynix-ai-hackathon-kit` and run:

```bash
git remote add origin https://github.com/scrla/hynix-ai-hackathon-kit.git
git push -u origin main
```

Original code: MIT. Third-party packages retain their own licenses; document reused code/assets in `docs/ATTRIBUTION.md`. Verify current event rules and public visibility before use.
