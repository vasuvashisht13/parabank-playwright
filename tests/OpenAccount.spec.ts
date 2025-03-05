import { test, Browser, BrowserContext, Page } from '@playwright/test';
import { POManager } from '../pages/POManager';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let registeredUsername = '';
const password = 'SecurePassword123';

test.beforeAll(async ({ browser }) => {
    // Create a new browser context and page
    context = await browser.newContext();
    page = await context.newPage();
    
    const poManager = new POManager(page);
    const registerPage = poManager.getRegisterPage();

    // User details
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        street: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62701',
        phone: '555-1234',
        ssn: '123-45-6789',
        password: password,
    };

    // Step 1: Register the user
    await registerPage.goto();
    registeredUsername = await registerPage.fillRegistrationForm(user);
    await registerPage.submit();
    await registerPage.verifyRegistration();
    await registerPage.clickonlogout();

    console.log(`✅ Registered User: ${registeredUsername}`);
});

test.beforeEach(async () => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    // Step 2: Login before each test
    await loginPage.goto();
    await loginPage.login(registeredUsername, password);
    await loginPage.verifyLogin();

    console.log(`✅ Logged in as: ${registeredUsername}`);
});

test.afterAll(async () => {
    // Close the browser context after all tests
    await context.close();
});

test('User should be able to open a new account', async () => {
    const poManager = new POManager(page);
    const openAccount = poManager.getOpenAccount();

    // Step 3: Open an account
    await openAccount.goto();
    await openAccount.openAccount('SAVINGS');
    await openAccount.verifyOpenAccount();

    console.log('✅ Account Opened Successfully');
});
