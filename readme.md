# Parabank Automation with Playwright (TypeScript)

## Overview
This project automates end-to-end testing for the Parabank website using Playwright with TypeScript. It covers user registration, login, account creation, and other essential banking functionalities, ensuring smooth workflow automation.

## Features
- User Registration
- User Login
- Open New Account
- Transfer Funds
- Bill Payments
- Find Transactions
- Update User Information
- Request Loan
- Logout
- HTML Report and Video Recording of Tests

## Project Structure
```
parabank-playwright/
│-- tests/
│   ├── mytest.spec.ts  # Single test file running all scenarios
│-- pages/
│   ├── RegisterPage.ts      # Registration Page Object
│   ├── LoginPage.ts         # Login Page Object
│   ├── OpenAccount.ts       # Open Account Page Object
│   ├── TransferFunds.ts     # Transfer Funds Page Object
│   ├── BillPayment.ts       # Bill Payment Page Object
│   ├── FindTransactions.ts  # Find Transactions Page Object
│   ├── UpdateInfo.ts        # Update User Information Page Object
│   ├── RequestLoan.ts       # Request Loan Page Object
│   ├── LogoutPage.ts        # Logout Page Object
│-- utils/
│   ├── pomanager.ts    # Page Object Manager
│-- reports/            # Test reports (HTML & Video Recordings)
│-- playwright.config.ts # Playwright configuration
│-- package.json        # Dependencies and scripts
│-- README.md           # Project documentation
```

## Setup & Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Playwright](https://playwright.dev/)

### Installation Steps
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd parabank-playwright
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Running Tests
To execute the test suite, use the following command:
```sh
npx playwright test
```

For a specific test:
```sh
npx playwright test mytest.spec.ts
```

To run tests in headed mode:
```sh
npx playwright test --headed
```

## Reports & Recordings
- **HTML Report:** After test execution, view the report:
  ```sh
  npx playwright show-report
  ```
- **Video Recordings:** Stored in the `reports/` directory after each test run.

## Configuration
Modify `playwright.config.ts` to adjust browser settings, timeouts, retries, and other test settings.

## Future Enhancements
- Add more test cases for enhanced coverage.
- Implement API testing for backend validation.
- Integrate CI/CD for automated test execution.

## Author
Vasu Vashisht

---
This Playwright project provides a robust foundation for automated testing of the Parabank website, ensuring efficiency and reliability in testing workflows.

