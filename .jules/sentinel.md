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
