import { Page, Locator, expect } from '@playwright/test';

export class BillPayment {
    private payeeNameLocator: Locator;
    private payeeAddressStreetLocator: Locator;
    private payeeAddressCityLocator: Locator;
    private payeeAddressStateLocator: Locator;
    private payeeAddressZipCodeLocator: Locator;
    private payeePhoneNumberLocator: Locator;
    private payeeAccountNumberLocator: Locator;
    private verifyAccountLocator: Locator;
    private amountLocator: Locator;
    private sendPaymentButtonLocator: Locator;
    private billpayResultLocator: Locator;

    constructor(private page: Page) {
        this.payeeNameLocator = this.page.locator('input[name="payee\\.name"]');
        this.payeeAddressStreetLocator = this.page.locator('input[name="payee\\.address\\.street"]');
        this.payeeAddressCityLocator = this.page.locator('input[name="payee\\.address\\.city"]');
        this.payeeAddressStateLocator = this.page.locator('input[name="payee\\.address\\.state"]');
        this.payeeAddressZipCodeLocator = this.page.locator('input[name="payee\\.address\\.zipCode"]');
        this.payeePhoneNumberLocator = this.page.locator('input[name="payee\\.phoneNumber"]');
        this.payeeAccountNumberLocator = this.page.locator('input[name="payee\\.accountNumber"]');
        this.verifyAccountLocator = this.page.locator('input[name="verifyAccount"]');
        this.amountLocator = this.page.locator('input[name="amount"]');
        this.sendPaymentButtonLocator = this.page.getByRole('button', { name: 'Send Payment' });
        this.billpayResultLocator = this.page.locator('#billpayResult');
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/billpay.htm');
    }

    async fillBillPaymentForm(payeeName: string, payeeAddressStreet: string, payeeAddressCity: string, payeeAddressState: string, payeeAddressZipCode: string, payeePhoneNumber: string, payeeAccountNumber: string, verifyAccount: string, amount: string) {
        await this.payeeNameLocator.click();
        await this.payeeNameLocator.fill(payeeName);
        await this.payeeAddressStreetLocator.click();
        await this.payeeAddressStreetLocator.fill(payeeAddressStreet);
        await this.payeeAddressCityLocator.click();
        await this.payeeAddressCityLocator.fill(payeeAddressCity);
        await this.payeeAddressStateLocator.click();
        await this.payeeAddressStateLocator.fill(payeeAddressState);
        await this.payeeAddressZipCodeLocator.click();
        await this.payeeAddressZipCodeLocator.fill(payeeAddressZipCode);
        await this.payeePhoneNumberLocator.click();
        await this.payeePhoneNumberLocator.fill(payeePhoneNumber);
        await this.payeeAccountNumberLocator.click();
        await this.payeeAccountNumberLocator.fill(payeeAccountNumber);
        await this.verifyAccountLocator.click();
        await this.verifyAccountLocator.fill(verifyAccount);
        await this.amountLocator.click();
        await this.amountLocator.fill(amount);
}

    async sendPayment() {
        await this.sendPaymentButtonLocator.click();
    }

    async verifyBillPayment() {
        await expect(this.billpayResultLocator).toContainText('Bill Payment Complete');
    }
}

