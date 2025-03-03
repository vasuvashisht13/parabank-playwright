import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
    public username: string = '';

    private firstNameLocator: Locator;
    private lastNameLocator: Locator;
    private streetLocator: Locator;
    private cityLocator: Locator;
    private stateLocator: Locator;
    private zipCodeLocator: Locator;
    private phoneLocator: Locator;
    private ssnLocator: Locator;
    private passwordLocator: Locator;
    private repeatedPasswordLocator: Locator;
    private registerButtonLocator: Locator;
    private welcomeHeadingLocator: Locator;
    private logoutbutton: Locator;

    constructor(private page: Page) {
        // Initialize locators as private properties
        this.firstNameLocator = this.page.locator('[id="customer\\.firstName"]');
        this.lastNameLocator = this.page.locator('[id="customer\\.lastName"]');
        this.streetLocator = this.page.locator('[id="customer\\.address\\.street"]');
        this.cityLocator = this.page.locator('[id="customer\\.address\\.city"]');
        this.stateLocator = this.page.locator('[id="customer\\.address\\.state"]');
        this.zipCodeLocator = this.page.locator('[id="customer\\.address\\.zipCode"]');
        this.phoneLocator = this.page.locator('[id="customer\\.phoneNumber"]');
        this.ssnLocator = this.page.locator('[id="customer\\.ssn"]');
        this.passwordLocator = this.page.locator('[id="customer\\.password"]');
        this.repeatedPasswordLocator = this.page.locator('#repeatedPassword');
        this.registerButtonLocator = this.page.getByRole('button', { name: 'Register' });
        this.welcomeHeadingLocator = this.page.locator('h1');
        this.logoutbutton = this.page.locator('a[href="logout.htm"]');
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
    }

    async fillRegistrationForm(user: { firstName: string; lastName: string; street: string; city: string; state: string; zipCode: string; phone: string; ssn: string; password: string; }) {
        this.username = `user${Math.floor(Math.random() * 10000)}`;  // Assign username to the public property
        
        await this.firstNameLocator.fill(user.firstName);
        await this.lastNameLocator.fill(user.lastName);
        await this.streetLocator.fill(user.street);
        await this.cityLocator.fill(user.city);
        await this.stateLocator.fill(user.state);
        await this.zipCodeLocator.fill(user.zipCode);
        await this.phoneLocator.fill(user.phone);
        await this.ssnLocator.fill(user.ssn);
        await this.page.locator('[id="customer\\.username"]').fill(this.username);  // Use the public username here
        await this.passwordLocator.fill(user.password);
        await this.repeatedPasswordLocator.fill(user.password);

        return this.username;
    }

    async submit() {
        await this.registerButtonLocator.click();
    }

    async verifyRegistration() {
        await expect(this.welcomeHeadingLocator).toContainText(`Welcome ${this.username}`);
    }

    async clickonlogout(){
        await this.logoutbutton.click();
    }
}
