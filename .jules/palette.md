## 2024-05-23 - Micro-interactions Matter: Keyboard Accessibility for Modals
**Learning:** Users who rely on keyboard navigation (or power users) expect the 'Escape' key to close modals, such as shopping carts or popups. Missing this interaction makes the application feel "stuck" or less responsive.
**Action:** Always include a `useEffect` hook that listens for `keydown` events (specifically 'Escape') in any modal or overlay component to trigger the close action. Clean up the event listener on unmount.
