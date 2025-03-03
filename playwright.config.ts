import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',   // Location of test files
  timeout: 30000,       // Test timeout in milliseconds
  expect: {
    timeout: 5000,      // Timeout for expect assertions
  },
  reporter: 'html',     // Generates an HTML report
  retries: 1,           // Number of retries on failure
  use: {
    headless: false,     // Run tests in headless mode
    viewport: null,
    actionTimeout: 5000, // Timeout for Playwright actions
    baseURL: 'https://parabank.parasoft.com/',  // Set base URL for tests
    screenshot: 'on',   // Take screenshots on failure
    video: 'on-first-retry',  // Record video on failure
    trace: 'on',        // Enable tracing for debugging
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
});
