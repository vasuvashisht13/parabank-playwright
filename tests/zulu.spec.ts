

import { test, expect } from '@playwright/test';

test('dev login', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: './auth.json'  // Use the saved session from auth.json
  });

  const page = await context.newPage();
  
  // Now, directly navigate to the leaders page without logging in
  await page.goto('https://zulutrade.qa.zuluprop.com/dashboard/trading-accounts');
  
  // You can add checks to verify the user is already logged in and the page is loaded
  await page.waitForTimeout(10000); // Adjust the wait time as needed
  
});
