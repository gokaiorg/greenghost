## 2024-05-22 - Build Process Memory Exhaustion
**Learning:** The application build process (`next build`) is extremely memory intensive and consistently fails with "JavaScript heap out of memory" on standard environments.
**Action:** Always set `export NODE_OPTIONS="--max-old-space-size=4096"` (or higher) before running `pnpm build` or `next build` in this project.

## 2026-01-17 - Root Layout Interactive Components
**Learning:** Interactive widgets (like Chatbox) imported in `layout.tsx` increase the initial bundle size for every page, even if they are closed by default.
**Action:** Use `next/dynamic` to code-split the heavy logic/UI of such components, loading them only when interaction occurs (e.g., button click), while keeping lightweight triggers (buttons) in the main bundle.
