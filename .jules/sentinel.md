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

## 2028-05-23 - Chatbox Helper Function XSS & Deprecated Headers

**Vulnerability:** The `createLink` helper in `Chatbox.tsx` constructed HTML strings without escaping the link text, and `next.config.ts` included the deprecated `X-XSS-Protection` header.
**Learning:** Internal helper functions generating HTML must be secure by default (defense in depth), and security headers must be kept up-to-date with modern browser standards.
**Prevention:**
1. Added `escapeHtml` to `createLink` text interpolation.
2. Removed `X-XSS-Protection` from `next.config.ts` to align with modern security practices.

## 2029-06-15 - BigQuery SQL Injection

**Vulnerability:** The `getPagesData` function in `src/lib/bigquery.ts` interpolated the `pageTitle` argument directly into the SQL query string using a template literal. This created a SQL injection vulnerability where a malicious user could potentially manipulate the query if `pageTitle` originated from user input.
**Learning:** Even when using "modern" data warehouses like BigQuery, SQL injection is still a risk if queries are constructed using string concatenation or interpolation. Parameterized queries are the only safe way to handle dynamic values in SQL.
**Prevention:**
1. Always use parameterized queries (prepared statements) when including variables in SQL.
2. In the BigQuery Node.js client, use the `params` option in the `query` method and `@variableName` syntax in the SQL string.

## 2030-03-20 - Dynamic HREF Attribute XSS

**Vulnerability:** Components like `Reviews`, `SocialIcons`, and `PaymentList` were rendering links from CSV data directly into the `href` attribute. This created a potential XSS vulnerability where a malicious CSV entry (e.g., `javascript:alert(1)`) could execute arbitrary code when clicked.
**Learning:** While React automatically escapes HTML content in children, it does *not* sanitize attributes like `href` against `javascript:` protocols. Data from external sources (CSVs, APIs) must be treated as untrusted even if internal-facing.
**Prevention:**
1. Implemented a centralized `sanitizeUrl` utility in `src/lib/utils/url.ts` that enforces an allowlist of safe protocols (http, https, mailto, tel).
2. Applied this sanitizer to all dynamic `href` attributes in vulnerable components.
