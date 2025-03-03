import { Page, Locator, expect } from '@playwright/test';


export class TransferFunds {
    private amountLocator: Locator;
    private toAccountIdLocator: Locator;
    private transferButtonLocator: Locator;
    private showResultLocator: Locator;

    constructor(private page: Page) {
        this.amountLocator = this.page.locator('#amount');
        this.toAccountIdLocator = this.page.locator('#toAccountId');
        this.transferButtonLocator = this.page.getByRole('button', { name: 'Transfer' });
        this.showResultLocator = this.page.locator('#showResult');
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/transfer.htm');
    }

    async transferFunds(amount: string) {
        await this.amountLocator.click();
        await this.amountLocator.fill(amount);
        await this.toAccountIdLocator.waitFor({ state: 'visible' });
        await this.toAccountIdLocator.selectOption({ index: 1 });
        await this.transferButtonLocator.click();
    }

    async verifyTransferFunds() {
        await this.page.waitForTimeout(4000);
        await expect(this.showResultLocator).toContainText('Transfer Complete!');
    }
}

