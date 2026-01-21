from playwright.sync_api import sync_playwright
import time

def verify_age_verification_focus():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a standard user agent to avoid bot detection
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()

        try:
            print("Navigating to home page (with 60s timeout)...")
            # The initial compile takes a long time
            page.goto("http://localhost:3000", timeout=60000)

            print("Page loaded. Waiting for hydration/rendering...")
            page.wait_for_timeout(5000) # Wait for JS to execute

            print("Checking for dialog...")
            # Check if dialog exists in DOM
            dialogs = page.locator('[role="dialog"]')
            count = dialogs.count()
            print(f"Found {count} dialogs")

            if count > 0:
                print("Dialog found. Checking visibility...")
                dialog = dialogs.first
                if dialog.is_visible():
                    print("Dialog is visible.")

                    # Check focus
                    print("Checking focus on YES button...")
                    page.wait_for_timeout(1000) # Allow focus effect to settle

                    is_focused = page.evaluate("""
                        () => {
                            const active = document.activeElement;
                            const yesBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('YES'));
                            return active === yesBtn;
                        }
                    """)
                    print(f"Is YES button focused? {is_focused}")

                    page.screenshot(path=".jules/verification/verification_success.png")
                else:
                    print("Dialog is in DOM but NOT visible.")
                    page.screenshot(path=".jules/verification/verification_hidden.png")
            else:
                print("No dialog found in DOM.")
                page.screenshot(path=".jules/verification/verification_not_found.png")

                # Check session storage
                verified = page.evaluate("sessionStorage.getItem('age-verified')")
                print(f"Session storage 'age-verified': {verified}")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path=".jules/verification/verification_error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_age_verification_focus()
