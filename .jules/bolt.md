## 2024-05-22 - Build Process Memory Exhaustion

**Learning:** The application build process (`next build`) is extremely memory intensive and consistently fails with "JavaScript heap out of memory" on standard environments.
**Action:** Always set `export NODE_OPTIONS="--max-old-space-size=4096"` (or higher) before running `pnpm build` or `next build` in this project.

## 2025-05-22 - CSV Data Fetching Optimization

**Learning:** Client-side CSV fetching and parsing (`fetch` + `papaparse` in `useEffect`) delays content rendering and blocks main thread.
**Action:** Move CSV reading and parsing to Server Components using `fs` (for files in `public/`) and pass data as props to Client Components.
