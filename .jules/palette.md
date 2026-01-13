## 2024-05-22 - Skip to Content Pattern
**Learning:** This app uses a global `Header` component inside `src/components/Header.tsx` which appears on every page. The main content is wrapped in a `<main>` tag in `src/app/layout.tsx`. To implement a "Skip to content" link, the `Header` must contain the anchor, and the `layout.tsx` must provide the matching `id`. The Age Verification modal (z-50) can obscure this link (z-40) during testing, requiring a session bypass.
**Action:** When adding skip links in this architecture, ensure the target `id` is on the layout's `<main>` tag and test with `sessionStorage.setItem('age-verified', 'true')` to bypass overlays.

## 2025-05-22 - Chatbox Accessibility Live Regions
**Learning:** Chat interfaces like `src/components/Chatbox.tsx` must use `role="log"` and `aria-live="polite"` on the message container to ensure screen readers announce new incoming messages automatically. Additionally, adding `tabIndex={0}` to the scrolling container is essential for keyboard-only users to scroll back through history.
**Action:** When implementing or fixing chat components, always wrap the message list in a container with `role="log"`, `aria-live="polite"`, and `tabIndex={0}`.
