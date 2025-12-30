// Google Sheets integration
// Note: Requires Google API key and the spreadsheet must be publicly accessible

import { Product } from '@/lib/types'

const SPREADSHEET_ID = '1_tPKbwLkZHYZB99lOs91NhlW1YjkiP7UOsp9hIuVRnc'

export async function fetchProductsFromSheets(): Promise<Product[]> {
  const apiKey = process.env.GOOGLE_API_KEY
  if (!apiKey) {
    console.error('GOOGLE_API_KEY is not defined')
    return []
  }

  try {
    const { google } = await import('googleapis')
    const sheets = google.sheets({ version: 'v4' })

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: '1335065453!A2:F',
      key: apiKey
    })

    const rows = response.data.values || []

    return rows.map((row: string[]) => ({
      id: row[0],
      name: row[1],
      type: row[2],
      price: parseFloat(row[3]),
      stock: parseInt(row[4]),
      status: row[5],
      initial: 0,
      wholesale: 0,
      dominance: '',
      thc: 0,
      cbd: 0,
      description: '',
      seo: '',
      effects: '',
      relieves: '',
      image: '',
      images: []
    }))
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error)
    // Fallback to mock data
    return []
  }
}
