## 2024-05-22 - Build Process Memory Exhaustion

**Learning:** The application build process (`next build`) is extremely memory intensive and consistently fails with "JavaScript heap out of memory" on standard environments.
**Action:** Always set `export NODE_OPTIONS="--max-old-space-size=4096"` (or higher) before running `pnpm build` or `next build` in this project.

## 2025-05-22 - CSV Data Fetching Optimization

**Learning:** Client-side CSV fetching and parsing (`fetch` + `papaparse` in `useEffect`) delays content rendering and blocks main thread.
**Action:** Move CSV reading and parsing to Server Components using `fs` (for files in `public/`) and pass data as props to Client Components.

## 2024-06-25 - Prevent Unnecessary Re-renders on Mobile Sliders

**Learning:** Components containing both static views (e.g. `DesktopGrid`) and interactive views (e.g. `MobileSlider` driven by `currentIndex` state) can suffer from unnecessary re-renders of the static portions when state changes.
**Action:** Wrap the static sub-components (like `DesktopGrid`) with `React.memo` to optimize performance, preventing expensive re-renders when local state changes only affect the interactive sub-components.
## 2025-05-23 - Scroll Event Optimization via DOM Manipulation

**Learning:** Using React state (`useState`) to track scroll position (`offsetY`) for UI effects (e.g. parallax or fixed positioning) causes excessive main-thread blocking re-renders during scroll events, drastically reducing scroll performance and smoothness.
**Action:** When implementing scroll-based UI effects (like parallax image backgrounds), remove the React state. Instead, use a `useRef` to target the DOM element directly, and update its inline style within a `requestAnimationFrame` loop wrapped in a `window.addEventListener('scroll')` callback.

## 2026-04-26 - IntersectionObserver for Scroll Parallax Optimization

**Learning:** Synchronous DOM reads like `getBoundingClientRect()` inside scroll event handlers force synchronous layout calculations and block the main thread, degrading scroll performance.
**Action:** For scroll-based effects (like parallax), combine an `IntersectionObserver` to track visibility with `requestAnimationFrame` throttling to only update inline styles when the element is visible, avoiding expensive DOM reads completely.
