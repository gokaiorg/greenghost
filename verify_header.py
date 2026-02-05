from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_header_cart(page: Page):
    # 1. Arrange: Go to the menu page.
    print("Navigating to menu page...")
    page.goto("http://localhost:3000/menu/buds", timeout=60000)

    # 2. Wait for page to load
    print("Waiting for page load...")
    page.wait_for_selector("text=Buds MENU", timeout=30000)

    # 3. Verify initial Bag state
    bag_button = page.locator("button[aria-label='Shopping bag']")
    expect(bag_button).to_be_visible()
    print("Initial bag button verified.")

    # 4. Click first Buy button
    print("Clicking Buy button...")
    # Use a specific locator for the green Buy button
    buy_btn = page.locator("button:has-text('Buy')").first

    # Scroll into view roughly
    buy_btn.hover(force=True)

    buy_btn.click(force=True)

    # Wait a bit
    time.sleep(1)

    # Check if aria-label updated
    bag_locator = page.locator("button", has_text="Bag")
    current_label = bag_locator.get_attribute("aria-label")
    print(f"Current aria-label: {current_label}")

    if "items" not in current_label:
        print("Click might have failed. Trying again...")
        buy_btn.click(force=True)
        time.sleep(1)
        current_label = bag_locator.get_attribute("aria-label")
        print(f"Current aria-label after retry: {current_label}")

    # 5. Verify Bag state updates
    # The aria-label should change to "Shopping bag, 1 items"
    print("Verifying updated state...")
    bag_button_updated = page.locator("button[aria-label='Shopping bag, 1 items']")
    expect(bag_button_updated).to_be_visible(timeout=10000)

    # Take screenshot
    time.sleep(0.2) # wait for animation
    page.screenshot(path="/home/jules/verification/header-cart.png")
    print("Screenshot taken.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(user_agent="Googlebot")
        page = context.new_page()
        try:
            verify_header_cart(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="/home/jules/verification/error.png")
            raise
        finally:
            browser.close()
