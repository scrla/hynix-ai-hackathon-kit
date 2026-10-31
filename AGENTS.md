# Codex repository instructions

Build the smallest correct, verifiable web product satisfying the **actual released task**.

1. Read `harness/TASK.md`. If real requirements are missing, ask; do not fabricate judging criteria.
2. Convert each requirement into a testable criterion, prioritize the core flow, and use `.agents/skills/scope-mvp/SKILL.md`.
3. Use Next.js App Router, TypeScript, responsive CSS, semantic HTML, and accessible controls.
4. Work in vertical slices: interaction → data/state → validation/errors → verification. Clearly label mock data.
5. Avoid unnecessary dependencies. Never commit secrets, keys, private challenge content, or proprietary prompts.
6. Validate inputs, handle loading/empty/error states; avoid unsafe HTML injection and unbounded requests.
7. Run `npm run verify` after changes and `npm run build` before handoff. Browser-test critical journeys.
8. Never claim an unrun test passed. Record exact failures and limitations in `harness/RESULTS.md`.
9. Check `docs/COMPLIANCE.md` and third-party licenses before publication or submission.
10. Cut unrelated decoration before cutting required behavior.
