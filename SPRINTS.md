# LearnSmith site — sprint plan

Built following the `Local AI Sprint-Delegation Workflow` documented in the `sapa` vault (`Empire Architecture/Local AI Sprint-Delegation Workflow.md`): Claude as orchestrator/reviewer, EAC-5000 (`gemma4:26b` via Ollama, `10.20.1.150:11434`) as drafter for a few mechanical pieces. Design system and core copy are Claude-authored — this is a customer-facing sales page, not a spec-following utility.

- [x] 1. Repo scaffold + design tokens + HTML shell (index.html, style.css, both light/dark themes, nav, footer) — Claude-authored
- [x] 2. Hero + "sound familiar" problem section — Claude-authored copy + markup
- [x] 3. Egg-drop kit product section: three tiers (Troop/Event/Outreach), no prices, "Request a quote" CTA — Claude-authored copy + markup
- [x] 4. "Why LearnSmith" founder section (real robotics/ME background, SHPE PD mentorship) — Claude-authored, factually grounded
- [x] 5. "Coming soon" kits section — DELEGATED to EAC-5000: first-draft copy for 2 future kits (mechanism/robotic-arm kit, circuits/sensors kit), Claude edited for rhythm/tone
- [x] 6. Quote request form + Formspree wiring (placeholder endpoint, clearly flagged) — DELEGATED to EAC-5000: vanilla JS fetch/submit handler. Claude review caught a fabricated `hello@learnsmith.dev` fallback address (no such domain exists) and corrected it to the real contact email.
- [x] 7. Responsive pass (mobile nav, breakpoints) + dark/light theme QA — Claude-authored/reviewed. Review also caught two bugs in the Claude-authored CSS itself: the mobile hamburger icon was missing `flex-direction: column` (would've rendered as three horizontal dashes instead of a stacked icon), and the hero section had a redundant/dead grid rule fighting an inline style.
- [x] 8. README.md (setup, Formspree TODO, GitHub Pages deploy note) — DELEGATED to EAC-5000 first draft, Claude edited for context and added a pointer to the business plan in the vault

All sprints complete. Real pricing, a locked business name, and a live Formspree endpoint are still open — see `Personal-Ventures/kit-maker/Plan.md` in the vault.
