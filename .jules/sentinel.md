## 2024-05-23 - Chatbox Stored/Reflected XSS

**Vulnerability:** The Chatbox component was rendering both user and bot messages using `dangerouslySetInnerHTML`. Since user input was directly passed to this function without sanitization, it created a Stored/Reflected XSS vulnerability where malicious scripts could be executed if a user typed them into the chat.
**Learning:** Even in "trusted" components like a chatbot where we control the bot's responses, we must never assume user input is safe. The assumption that "React escapes by default" only applies when NOT using `dangerouslySetInnerHTML`.
**Prevention:**

1. Avoid `dangerouslySetInnerHTML` whenever possible.
2. If it must be used (e.g., for bot links), execute it conditionally only for the trusted source (bot).
3. For user input, always use standard React rendering (e.g., `{message.text}`) which automatically escapes HTML entities.
4. Use CSS `white-space: pre-wrap` to preserve formatting for user messages instead of HTML.

## 2026-01-14 - Chatbox Indirect XSS via Data Source

**Vulnerability:** The Chatbox bot responses were constructed using `formatStrainInfo`, which interpolated strain data (name, description, etc.) directly into an HTML string. This string was then rendered via `dangerouslySetInnerHTML`. Although the data source (CSV) is internal, a compromised or malicious CSV entry could inject scripts (XSS).
**Learning:** Trusted data sources (like local CSVs) should still be treated as untrusted when constructing HTML strings for `dangerouslySetInnerHTML`. "Output Encoding" must happen at the point of construction.
**Prevention:**

1. Use an HTML escaping helper function for all dynamic values when constructing HTML strings manually.
2. Verify that escaping occurs BEFORE concatenation to prevent breaking HTML structure while neutralizing scripts.

## 2026-01-14 - WeedsBlock Unnecessary dangerouslySetInnerHTML

**Vulnerability:** The `WeedsBlock` component used `dangerouslySetInnerHTML` to render descriptions after replacing newline characters with `<br/>`. This exposed the application to Stored XSS if the source CSV data (`weeds.csv`) was compromised, as it would render any HTML tags present in the description.
**Learning:** Developers often reach for `dangerouslySetInnerHTML` to handle simple formatting like line breaks, unaware that CSS offers a safer alternative. Manual string manipulation (like `replace(/\n/g, '<br/>')`) combined with `dangerouslySetInnerHTML` is a code smell indicating a likely security gap.
**Prevention:**

1. Use CSS `white-space: pre-line` or `white-space: pre-wrap` to render text with newlines natively.
2. Only use `dangerouslySetInnerHTML` when actual HTML parsing is strictly required (e.g., for rich text content with links/bolding).

## 2026-10-24 - Pages CSV Stored XSS

**Vulnerability:** Multiple pages (Garden, Seeds, etc.) rendered descriptions from `pages.csv` using `dangerouslySetInnerHTML`. While the CSV currently contains safe text, treating it as trusted HTML source exposes the site to Stored XSS if the file is modified maliciously.
**Learning:** Content from "static" files like CSVs often gets treated as implicitly trusted. However, if the content is just text, using HTML rendering is an unnecessary risk.
**Prevention:** Default to standard React text rendering with `whitespace-pre-wrap` for preserving line breaks. Only use `dangerouslySetInnerHTML` if the content _must_ contain HTML tags.

## 2027-02-27 - Product Client Components Stored XSS

**Vulnerability:** Product client components (Strain, Edible, Concentrate, Gadget) and Location pages were using `dangerouslySetInnerHTML` to render descriptions just to handle newline characters by replacing them with `<br>`. This created a potential Stored XSS vector if the product/location descriptions (sourced from CSV/API) were compromised.
**Learning:** This reinforces the pattern that `dangerouslySetInnerHTML` is often misused for simple formatting tasks. It's a common "convenience" anti-pattern that bypasses React's built-in XSS protection.
**Prevention:**
1. Replaced `dangerouslySetInnerHTML` with standard React text rendering.
2. Used `whitespace-pre-wrap` CSS class to handle line breaks natively.
3. Ensured that escaped newlines (`\\n`) from the data source are converted to actual newlines (`\n`) before rendering.
