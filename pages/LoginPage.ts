import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    private usernameLocator: Locator;
    private passwordLocator: Locator;
    private loginButtonLocator: Locator;

    constructor(private page: Page) {
        this.usernameLocator = this.page.locator('input[name="username"]');
        this.passwordLocator = this.page.locator('input[name="password"]');
        this.loginButtonLocator = this.page.locator('input[value="Log In"]'); // Corrected button locator
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm'); // Navigate to login page
    }

    async login(username: string, password: string) {
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.loginButtonLocator.click();
    }

    async verifyLogin() {
        await expect(this.page.locator('#leftPanel')).toContainText('Welcome');
    }
}

