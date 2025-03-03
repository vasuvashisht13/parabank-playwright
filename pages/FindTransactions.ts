import { Page, Locator, expect } from '@playwright/test';

export class FindTransactions {
    private amountLocator: Locator;
    private findTransactionsButtonLocator: Locator;
    private transactionTableLocator: Locator;

    constructor(private page: Page) {
        this.amountLocator = this.page.locator('#amount');
        this.findTransactionsButtonLocator = this.page.locator('#findByAmount');
        this.transactionTableLocator = this.page.locator('#transactionTable');
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/findtrans.htm');
    }

    async findTransactions(amount: string) {
        await this.amountLocator.fill(amount);
        await this.findTransactionsButtonLocator.click();
    }

    async verifyTransaction(amount: string) {
        await expect(this.transactionTableLocator).toContainText(amount);
    }
}

