import { Page, Locator, expect } from '@playwright/test';

export class RequestLoan {
    private amountLocator: Locator;
    private downPaymentLocator: Locator;
    private applyNowButtonLocator: Locator;
    private loanRequestApprovedLocator: Locator;

    constructor(private page: Page) {
        this.amountLocator = this.page.locator('#amount');
        this.downPaymentLocator = this.page.locator('#downPayment');
        this.applyNowButtonLocator = this.page.getByRole('button', { name: 'Apply Now' });
        this.loanRequestApprovedLocator = this.page.locator('#loanRequestApproved');
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/requestloan.htm');
    }

    async requestLoan(amount: string, downPayment: string) {
        await this.amountLocator.fill(amount);
        await this.downPaymentLocator.fill(downPayment);

        // Select the first visible dropdown
        const dropdown = this.page.locator('#fromAccountId').filter({ has: this.page.locator('option') }).first();
        await dropdown.click();

        // Get available options
        const accountOptions = await dropdown.locator('option').all();
        if (accountOptions.length < 2) throw new Error('Not enough accounts to select.');

        // Select two accounts sequentially
        await dropdown.selectOption(await accountOptions[0].getAttribute('value'));
        await this.page.waitForTimeout(500);
        await dropdown.selectOption(await accountOptions[1].getAttribute('value'));

        await this.applyNowButtonLocator.click();
    }

    async verifyRequestLoan() {
        await expect(this.loanRequestApprovedLocator).toContainText('Congratulations, your loan has been approved.');
    }
}





