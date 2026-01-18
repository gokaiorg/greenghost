# Library Structure

This directory contains all shared utilities, types, configurations, and data fetching logic for the Green Ghost application.

## Directory Structure

```
/lib
├── config/              # Application configuration
│   ├── site-metadata.ts     # Site-wide metadata generation (SEO, OG tags)
│   └── product-metadata.ts  # Product-specific metadata & schema
│
├── types/               # TypeScript type definitions
│   ├── index.ts            # Main Product and CartItem types
│   ├── location.ts         # Location-related types
│   └── organization.ts     # Organization data types
│
├── utils/               # Utility functions
│   ├── bannerUtils.ts      # Banner data fetching utilities
│   ├── hours.ts            # Business hours calculations
│   ├── metadataUtils.ts    # Metadata helper functions

│   └── structuredData.ts   # JSON-LD structured data generation
│
└── [data files]         # Data fetching and constants
    ├── constants.ts        # App-wide constants (phone number, etc.)
    ├── data.ts             # General data fetching
    ├── organization-data.ts # Organization/location data
    ├── products.ts         # Product data fetching
    ├── strains.ts          # Strain-specific data
    ├── pages.ts            # Page content data
    └── sheets.ts           # Google Sheets integration
```

## Import Paths

All imports now use the `@/lib/` prefix:

```typescript
// Types
import { Product, CartItem } from "@/lib/types";
import { Location } from "@/lib/types/location";

// Config
import { generateMetadata } from "@/lib/config/site-metadata";
import { generateProductMetadata } from "@/lib/config/product-metadata";

// Utils
import { getBannerData } from "@/lib/utils/bannerUtils";
import { isLocationOpen } from "@/lib/utils/hours";

// Data
import { getProductById } from "@/lib/products";
import { PHONE_NUMBER } from "@/lib/constants";
```

## Migration Notes

Previously, code was split across:

- `/config/` - Now in `/lib/config/`
- `/types/` - Now in `/lib/types/`
- `/utils/` - Now in `/lib/utils/`

This consolidation:

- ✅ Follows Next.js conventions
- ✅ Reduces cognitive overhead
- ✅ Eliminates duplicate file names
- ✅ Makes imports more consistent
