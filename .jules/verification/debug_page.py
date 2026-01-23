from playwright.sync_api import sync_playwright

def debug_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(storage_state=None)
        page = context.new_page()

        try:
            print("Navigating to home page...")
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for any content
            page.wait_for_selector("body", state="visible")

            # Check what's in the DOM
            print(f"Page title: {page.title()}")

            # Screenshot the whole page
            page.screenshot(path=".jules/verification/debug_full_page.png")
            print("Screenshot saved")

            # Dump HTML to see what's rendered
            with open(".jules/verification/page_dump.html", "w") as f:
                f.write(page.content())

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    debug_page()
