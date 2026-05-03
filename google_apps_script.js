/**
 * INCORVIA — Google Apps Script for Consultation Form Submissions
 * 
 * HOW TO SET UP (5 minutes):
 * 
 * STEP 1: Create a Google Sheet
 *   - Go to https://sheets.google.com and create a new sheet
 *   - Name it "Incorvia Leads" (or anything you like)
 *   - Copy the Sheet ID from the URL:
 *     https://docs.google.com/spreadsheets/d/  <<<THIS PART>>>  /edit
 *   - Paste it below in SPREADSHEET_ID
 *
 * STEP 2: Open Apps Script
 *   - In the Sheet, go to Extensions → Apps Script
 *   - Delete the default code and paste this entire file
 *
 * STEP 3: Deploy as Web App
 *   - Click "Deploy" → "New deployment"
 *   - Type: Web app
 *   - Execute as: Me
 *   - Who has access: Anyone
 *   - Click "Deploy" and copy the Web App URL
 *
 * STEP 4: Paste URL into your React app
 *   - Open: website-2/src/components/ConsultationPopup.jsx
 *   - Find the line: const APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
 *   - Replace it with your URL
 *
 * Done! Every form submission will now appear as a new row in your Google Sheet.
 */

// ─── GOOGLE SHEET CONFIG ────────────────────────────────────────────────────
const SPREADSHEET_ID = '10opWAHsjeEqOavh-QFyUwqpUWsCuGUCj3LoXBozOIFU';
const SHEET_NAME     = 'Leads'; // A new tab named "Leads" will be created automatically
// ───────────────────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    // Auto-create the "Leads" tab if it doesn't exist yet
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Full Name',
        'Email',
        'Phone',
        'Where in Process',
        'Message',
      ]);
      // Bold + freeze the header row
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    const params = e.parameter;
    sheet.appendRow([
      params.timestamp || new Date().toISOString(),
      params.name      || '',
      params.email     || '',
      params.phone     || '',
      params.process   || '',
      params.message   || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// For testing in browser (GET request)
function doGet() {
  return ContentService
    .createTextOutput('Incorvia Apps Script is running ✓')
    .setMimeType(ContentService.MimeType.TEXT);
}
