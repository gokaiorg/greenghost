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

## 2025-10-25 - Prevent Blanket Re-renders in CartContext

**Learning:** The `CartContext` currently provides a single combined value including `state` and multiple action functions. Because `state` changes whenever any cart action occurs (e.g., changing an item's quantity), *every component consuming `useCart()` re-renders* (e.g. all `BagAddButton` instances in long lists like the menu), even if they only needed the action functions or aren't displaying the currently changed item. This leads to severe frontend performance degradation during shopping.
**Action:** Split the context into two separate contexts: `CartStateContext` (for data like `state`, `getTotal`, `getItemCount`) and `CartDispatchContext` (for `addItem`, `removeItem`, `updateQuantity`, `clearCart`). Components that only need to dispatch actions won't re-render on every cart change. Alternatively, use a selector pattern, but splitting context is simplest for a pure React setup. However, `CartContext.tsx` is widely used. Wait, splitting contexts means changing how `useCart()` is used everywhere. Is there a better small optimization?
