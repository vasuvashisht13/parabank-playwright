import { test } from '@playwright/test';
import { POManager } from '../pages/POManager';

test('User should be able to register first and then login', async ({ page }) => {
    // Initialize POManager
    const poManager = new POManager(page);

    // Access the RegisterPage
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
        password: 'SecurePassword123',
    };

    // Step 1: Register the user
    await registerPage.goto(); // Open registration page
    const username = await registerPage.fillRegistrationForm(user);
    await registerPage.submit();
    await registerPage.verifyRegistration();
    await registerPage.clickonlogout();

    // Step 2: Login with registered user
    const loginPage = poManager.getLoginPage();
    await loginPage.goto(); // Open login page
    await loginPage.login(username, user.password);
    await loginPage.verifyLogin(); // Verify login success

    // Step 3: Open an account
    const openAccount = poManager.getOpenAccount();
    await openAccount.goto();
    await openAccount.openAccount('SAVINGS');
    await openAccount.verifyOpenAccount();

    // Step 4: Transfer funds
    const transferFunds = poManager.gettransferFunds();
    await transferFunds.goto();
    await transferFunds.transferFunds('100');
    await transferFunds.verifyTransferFunds();
    

    //Step 5: Bill payment
    const billPayment = poManager.getBillPayment();
    await billPayment.goto();
    await billPayment.fillBillPaymentForm('Rajesh', '123 gulmohar nagar', 'hoshiarpur', 'Punjab', '141401', '555-1234', '12345', '12345', '100');
    await billPayment.sendPayment();
    await billPayment.verifyBillPayment();

    //Step 6: Find transactions
    const findTransactions = poManager.getFindTransactions();
    await findTransactions.goto();
    await findTransactions.findTransactions('100');
    await findTransactions.verifyTransaction('100');


    // Update user profile
    const updateInfo = poManager.getUpdateInfo();
    await updateInfo.goto();
    await updateInfo.updateProfile('Vasu', 'Vashisht', '94', 'Khanna', 'punjab', '141401', '8567121545');
    await updateInfo.verifyUpdateProfile();

    // Request loan
    const requestLoan = poManager.getRequestLoan();
    await requestLoan.goto();
    await requestLoan.requestLoan('1000', '10');
    await requestLoan.verifyRequestLoan();

    // Logout
    const logout = poManager.getlogout();
    await logout.goto();
    await logout.logout();
    await logout.verifyLogout();

});
