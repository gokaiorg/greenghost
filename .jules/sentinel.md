## 2025-02-12 - Hardcoded API Key in Source
**Vulnerability:** A hardcoded Google API key was found in `src/lib/sheets.ts` as a fallback value.
**Learning:** Hardcoded secrets often hide in "fallback" or "default" values intended for local development but get committed to production.
**Prevention:** Enforce environment variable usage via linting rules or pre-commit hooks that scan for high-entropy strings or known key patterns. Never allow fallbacks to sensitive strings in code.
