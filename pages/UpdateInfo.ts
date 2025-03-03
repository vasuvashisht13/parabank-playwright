import { Page, Locator, expect } from '@playwright/test';

export class UpdateInfo {
    private firstNameLocator: Locator;
    private lastNameLocator: Locator;
    private addressLocator: Locator;
    private cityLocator: Locator;
    private stateLocator: Locator;
    private zipCodeLocator: Locator;
    private phoneNumberLocator: Locator;
    private updateProfileButtonLocator: Locator;
    private updateProfileResultLocator: Locator;


    constructor(private page: Page) {
        this.firstNameLocator = this.page.locator('[id="customer\\.firstName"]');
        this.lastNameLocator = this.page.locator('[id="customer\\.lastName"]');
        this.addressLocator = this.page.locator('[id="customer\\.address\\.street"]');
        this.cityLocator = this.page.locator('[id="customer\\.address\\.city"]');
        this.stateLocator = this.page.locator('[id="customer\\.address\\.state"]');
        this.zipCodeLocator = this.page.locator('[id="customer\\.address\\.zipCode"]');
        this.phoneNumberLocator = this.page.locator('[id="customer\\.phoneNumber"]');
        this.updateProfileButtonLocator = this.page.getByRole('button', { name: 'Update Profile' })
        this.updateProfileResultLocator = this.page.locator('#updateProfileResult');
    }

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/updateprofile.htm');
    }

    async updateProfile(firstName: string, lastName: string, address: string, city: string, state: string, zipCode: string, phoneNumber: string) {
        await this.clearAndFill(this.firstNameLocator, firstName);
        await this.clearAndFill(this.lastNameLocator, lastName);
        await this.clearAndFill(this.addressLocator, address);
        await this.clearAndFill(this.cityLocator, city);
        await this.clearAndFill(this.stateLocator, state);
        await this.clearAndFill(this.zipCodeLocator, zipCode);
        await this.clearAndFill(this.phoneNumberLocator, phoneNumber);
        
        await this.updateProfileButtonLocator.click();
    }
    
    // Helper method to clear and fill a field
    private async clearAndFill(locator: Locator, value: string) {
        await locator.click();  // Focus on the field
        await locator.fill(''); // Clear the field
        await locator.fill(value); // Fill with new value
    }
    

    async verifyUpdateProfile() {
        await expect(this.updateProfileResultLocator).toContainText('Your updated address and phone number have been added to the system.');
    }

}



