import { Page, Locator, expect } from '@playwright/test';

export class LogoutPage {
    private logoutButtonLocator: Locator;

    constructor(private page: Page) {
        this.logoutButtonLocator = this.page.getByRole('link', { name: 'Log Out' });
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/overview.htm');
    }

    async logout() {
        await this.logoutButtonLocator.click();
    }

    async verifyLogout() {
        await expect(this.page.locator('h2')).toContainText('Customer Login');
    }

}