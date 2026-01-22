from playwright.sync_api import sync_playwright

def verify_age_verification_focus():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a standard user agent to avoid bot detection
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()

        try:
            print("Navigating to home page...")
            page.goto("http://localhost:3000", timeout=60000)

            print("Waiting for modal...")
            # Wait for the modal to appear
            modal = page.wait_for_selector('[role="dialog"][aria-modal="true"]', state="visible", timeout=10000)
            print("Modal found!")

            print("Checking focus...")
            # Wait a bit for the focus effect to trigger
            page.wait_for_timeout(1000)

            # Check if the YES button is focused
            is_focused = page.evaluate("""
                () => {
                    const active = document.activeElement;
                    const yesBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('YES'));
                    return active === yesBtn;
                }
            """)

            print(f"Is YES button focused? {is_focused}")

            # Take a screenshot
            page.screenshot(path=".jules/verification/age_verification_focus.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path=".jules/verification/error_state.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_age_verification_focus()
