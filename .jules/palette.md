## 2024-05-22 - Skip to Content Pattern

**Learning:** This app uses a global `Header` component inside `src/components/Header.tsx` which appears on every page. The main content is wrapped in a `<main>` tag in `src/app/layout.tsx`. To implement a "Skip to content" link, the `Header` must contain the anchor, and the `layout.tsx` must provide the matching `id`. The Age Verification modal (z-50) can obscure this link (z-40) during testing, requiring a session bypass.
**Action:** When adding skip links in this architecture, ensure the target `id` is on the layout's `<main>` tag and test with `sessionStorage.setItem('age-verified', 'true')` to bypass overlays.

## 2025-05-22 - Chatbox Accessibility Live Regions

**Learning:** Chat interfaces like `src/components/Chatbox.tsx` must use `role="log"` and `aria-live="polite"` on the message container to ensure screen readers announce new incoming messages automatically. Additionally, adding `tabIndex={0}` to the scrolling container is essential for keyboard-only users to scroll back through history.
**Action:** When implementing or fixing chat components, always wrap the message list in a container with `role="log"`, `aria-live="polite"`, and `tabIndex={0}`.

## 2025-05-22 - Connect Menu Accessibility

**Learning:** Interactive dropdowns like `ConnectMenu.tsx` require `aria-expanded`, `aria-haspopup`, and `aria-controls` on the trigger, and `role="menu"` with `role="menuitem"` on the content to be accessible. Playwright's `get_by_role` is excellent for verifying these structure changes.
**Action:** When implementing dropdowns, ensure these ARIA attributes are present and use `get_by_role` in verification scripts to confirm the accessibility tree structure.

## 2025-05-22 - Accessible Product Sliders

**Learning:** Custom product sliders like `ProductSlider.tsx` often lack keyboard navigation, making them inaccessible to non-mouse users. Adding `tabIndex={0}`, `role="region"`, `aria-roledescription="carousel"`, and handling `ArrowLeft`/`ArrowRight` keys significantly improves accessibility without changing the visual design.
**Action:** Always wrap custom sliders in a focusable container with proper ARIA roles and keyboard event listeners for navigation.

## 2025-05-22 - Z-Index Management for Fixed Elements

**Learning:** When adding fixed elements like a "Scroll to Top" button, ensure the `z-index` is higher than interactive content (e.g., `MiniSlider` images at `z-10`) and other overlays (e.g., Age Verification at `z-50`). In this app, `z-[60]` was required to ensure the button remained clickable and wasn't intercepted by content or modals.
**Action:** Always verify clickability of fixed elements over complex content areas using automated tests that simulate clicks (`.click()`) rather than just checking visibility.

## 2025-05-24 - Ghost Focusable Elements

**Learning:** Elements that are visually hidden using `opacity-0` (like the `ScrollToTop` button) remain in the document flow and keyboard tab order, creating confusing "ghost" focus states.
**Action:** When animating visibility with opacity, always toggle `tabIndex={-1}` and `aria-hidden="true"` when the element is visually hidden to remove it from the accessibility tree and tab sequence.

## 2025-05-27 - Nested Interactive Elements in Sliders

**Learning:** The `MiniSlider` component is frequently nested within `Link` components (e.g., in product lists), creating invalid HTML and accessibility issues because it renders interactive `<button>` elements for slide indicators.
**Action:** When using `MiniSlider` inside a `Link`, always pass `interactive={false}` to render the indicators as non-interactive `<span>` elements, preventing nested interactive controls while maintaining visual feedback.

## 2025-05-30 - Keyboard Focus Visibility on Custom Elements

**Learning:** Custom interactive elements (like custom dropdowns, language switchers, and floating chatboxes) often drop native focus rings when styled with Tailwind CSS (`outline-none`). This makes the UI completely inaccessible for keyboard users who lose track of their tab focus.
**Action:** When styling custom interactive components, always include explicit focus indicator utilities using `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color] focus-visible:ring-offset-2` to restore keyboard accessibility without affecting mouse users.
