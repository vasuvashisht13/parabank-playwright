import { Page, Locator, expect } from '@playwright/test';

export class OpenAccount {
    private usernameLocator: Locator;
    private passwordLocator: Locator;
    private loginButtonLocator: Locator;
    private openAccountButtonLocator: Locator;
    private openAccountResultLocator: Locator;
    private newAccountNumber: string | null = null; // Store extracted account number

    constructor(private page: Page) {
        this.usernameLocator = this.page.locator('input[name="username"]');
        this.passwordLocator = this.page.locator('input[name="password"]');
        this.loginButtonLocator = this.page.locator('input[value="Log In"]'); // Corrected button locator
        this.openAccountButtonLocator = this.page.locator('input[value="Open New Account"]');
        this.openAccountResultLocator = this.page.locator('#openAccountResult');
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/openaccount.htm'); // Navigate to login page
    }

    async login(username: string, password: string) {
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.loginButtonLocator.click();
    }

    async openAccount(type: string) {
        await this.page.waitForTimeout(4000);
        await this.page.locator('#type').selectOption(type);
        await this.openAccountButtonLocator.click();

    }

    async verifyOpenAccount() {
        await this.page.waitForTimeout(4000);
        await expect(this.openAccountResultLocator).toContainText('Account Opened!');
    }
}


