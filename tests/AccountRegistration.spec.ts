//test case : Account Registration
//tags : @master, @regression, @sanity
/**
 * steps to run the test case:
 * 1. navigate to application url
 * 2. Go to My Account and click on Register link
 * 4. enter First Name, Last Name, Email, Telephone, Password and Confirm Password
 * 5. select Privacy Policy checkbox
 * 6. click on Continue button
 * 7. verify the confirmation message
 */

import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {RegistrationPage} from '../pages/RegistrationPage';
import {TestConfig} from '../test.config';
import {RandomDataUtil} from '../utils/randomDataGenerator';

//global variables
let homePage: HomePage;
let registrationPage: RegistrationPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
    // Navigate to the application URL before each test
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage =new HomePage(page);
    registrationPage = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {
    // Optionally, you can add cleanup steps here if needed after each test
    // For example, logging out or clearing cookies/local storage
    await page.waitForTimeout(1000); // Wait for 1 second before closing the page
    await page.close(); // Close the page after each test to ensure a fresh state for the next test
});

test('user registration @master, @regression, @sanity', async ({}) => {

    //step 1: navigate to application url
    // const config =new TestConfig();
    // await page.goto(config.appUrl);
    //step 2: Go to My Account and click on Register link
    // const homePage =new HomePage(page);
    homePage.clickMyAccount();
    await homePage.clickRegister();
    // const registrationPage = new RegistrationPage(page);
    //step 3: enter First Name, Last Name, Email, Telephone, Password and Confirm Password
    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    //step 4: select Privacy Policy checkbox
    await registrationPage.setPrivacyPolicy();
    //step 5: click on Continue button
    await registrationPage.clickContinue();
    //step 6: verify the confirmation message
    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!');

});

