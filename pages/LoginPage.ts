import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
   private readonly page: Page;
   private readonly usernameInput: Locator;
   private readonly passwordInput: Locator;
   private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("//input[@id='input-email']");
        this.passwordInput = page.locator("//input[@id='input-password']");
        this.loginButton = page.locator('input[type="submit"]')
    }

    // Action methods
    async enterUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
    async login(email: string, password: string){
        await this.enterUsername(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    

}
    

    
  

