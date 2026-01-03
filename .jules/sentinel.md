## 2026-01-03 - Chatbox XSS
**Vulnerability:** User input was rendered with dangerouslySetInnerHTML in Chatbox.
**Learning:** Always check both user and bot messages in chat interfaces.
**Prevention:** Conditionally render trusted HTML vs user text.
