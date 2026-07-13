import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {TestConfig} from '../test.config';
import {HomePage} from '../pages/HomePage';

test.describe('Login', () => {
    let loginPage: LoginPage;
    let config: TestConfig;
    
    let homePage: HomePage;

    //npx playwright test tests/Login.spec.ts --grep="@master"
    //generate allure report: npx allure generate allure-results --clean -o allure-report
    //open allure report: npx allure open allure-report

    test.beforeEach(async ({page}) => {
        config = new TestConfig();
        await page.goto(config.appUrl);
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
    });

    test('should login successfully with valid credentials @master, @regression, @sanity', async ({page}) => {

        //click on My Account and then click on Login link
        await homePage.clickMyAccount();
        await homePage.clickLogin();
        await page.waitForTimeout(1000); // Wait for 1 second to ensure the login page is fully loaded

        // Enter valid credentials and click login
        await loginPage.enterUsername(config.email);
        await loginPage.enterPassword(config.password);
        await loginPage.clickLoginButton(); 
         await page.waitForTimeout(3000);

        // Verify successful login by checking the URL or any other indicator
        expect (page.url()).toContain('account/account'); // Adjust the expected URL based on your application
    });
});