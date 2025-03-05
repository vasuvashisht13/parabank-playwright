// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',   // Location of test files
//   timeout: 30000,       // Test timeout in milliseconds
//   expect: {
//     timeout: 5000,      // Timeout for expect assertions
//   },
//   reporter: 'html',     // Generates an HTML report
//   retries: 1,           // Number of retries on failure
//   use: {
//     headless: false,     // Run tests in headless mode
//     viewport: null,
//     actionTimeout: 5000, // Timeout for Playwright actions
//     baseURL: 'https://parabank.parasoft.com/',  // Set base URL for tests
//     screenshot: 'on',   // Take screenshots on failure
//     video: 'on-first-retry',  // Record video on failure
//     trace: 'on',        // Enable tracing for debugging
//   },
//   projects: [
//     {
//       name: 'chromium',
//       use: { browserName: 'chromium' },
//     },
//     // {
//     //   name: 'firefox',
//     //   use: { browserName: 'firefox' },
//     // },
//     // {
//     //   name: 'webkit',
//     //   use: { browserName: 'webkit' },
//     // },
//   ],
// });



import { defineConfig } from '@playwright/test';
import { OrtoniReportConfig } from 'ortoni-report';

const ortoniReportConfig: OrtoniReportConfig = {
  open: process.env.CI ? 'never' : 'always', // Open report based on CI environment
  folderPath: 'report-db',                   // Directory to store report data
  filename: 'index.html',                    // Name of the report file
  title: 'Ortoni Test Report',               // Title of the report
  showProject: true,                         // Display project information
  projectName: 'Ortoni-Report',              // Name of the project
  testType: 'e2e',                           // Type of tests
  authorName: 'Vasu Vashisht',                   // Author's name
  base64Image: false,                        // Store images as base64
  stdIO: false,                              // Capture standard I/O
  preferredTheme: 'light',                   // Theme of the report
};

export default defineConfig({
  testDir: './tests',   // Location of test files
  timeout: 30000,       // Test timeout in milliseconds
  expect: {
    timeout: 5000,      // Timeout for expect assertions
  },
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
  reporter: [['ortoni-report', ortoniReportConfig]], // Integrate Ortoni Report
});
