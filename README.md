# Green Ghost - Weed Shop Menu App

A Next.js application for Green Ghost, a weed shop menu with cart functionality synced to Google Spreadsheet data.

## Features

- **Menu Categories**: Buds, Pre-rolls, and Gadgets
- **Product Displays**:
  - Buds: Grid layout with images
  - Pre-rolls: Full-width row layout (no images)
  - Gadgets: Grid layout with images
- **Cart System**: Add items, view cart, update quantities
- **Responsive Design**: Built with Tailwind CSS
- **Google Sheets Integration**: Sync product data from spreadsheet

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Google Sheets API (optional):
   - Get a Google API key from Google Cloud Console
   - Make the spreadsheet publicly viewable (Share > Anyone with the link can view)
   - Set environment variable:
     ```
     GOOGLE_API_KEY=your-api-key-here
     ```
   - Columns: Item ID (used as slug), Item name, Type (Buds/Pre-rolls/Gadgets), Price, Stock, Status

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `/app/menu`: Menu pages
- `/app/menu/buds`: Buds listing and individual pages
- `/app/menu/pre-rolls`: Pre-rolls listing and individual pages
- `/app/menu/gadgets`: Gadgets listing and individual pages
- `/app/cart`: Cart page
- `/components`: Reusable components
- `/contexts`: React contexts (Cart)
- `/lib`: Utility functions and data handling
- `/types`: TypeScript type definitions

## Technologies

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Google Sheets API
