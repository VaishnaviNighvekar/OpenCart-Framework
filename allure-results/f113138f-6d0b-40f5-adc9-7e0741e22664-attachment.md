# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> user registration
- Location: tests\AccountRegistration.spec.ts:37:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | //test case : Account Registration
  2  | //tags : @master, @regression, @sanity
  3  | /**
  4  |  * steps to run the test case:
  5  |  * 1. navigate to application url
  6  |  * 2. Go to My Account and click on Register link
  7  |  * 4. enter First Name, Last Name, Email, Telephone, Password and Confirm Password
  8  |  * 5. select Privacy Policy checkbox
  9  |  * 6. click on Continue button
  10 |  * 7. verify the confirmation message
  11 |  */
  12 | 
  13 | import { test, expect } from '@playwright/test';
  14 | import {HomePage} from '../pages/HomePage';
  15 | import {RegistrationPage} from '../pages/RegistrationPage';
  16 | import {TestConfig} from '../test.config';
  17 | import {RandomDataUtil} from '../utils/randomDataGenerator';
  18 | 
  19 | //global variables
  20 | let homePage: HomePage;
  21 | let registrationPage: RegistrationPage;
  22 | 
  23 | test.beforeEach(async ({ page }) => {
  24 |     // Navigate to the application URL before each test
  25 |     const config = new TestConfig();
  26 |     await page.goto(config.appUrl);
  27 |     homePage =new HomePage(page);
  28 |     registrationPage = new RegistrationPage(page);
  29 | });
  30 | 
  31 | test.afterEach(async ({ page }) => {
  32 |     // Optionally, you can add cleanup steps here if needed after each test
  33 |     // For example, logging out or clearing cookies/local storage
  34 |     await page.close(); // Close the page after each test to ensure a fresh state for the next test
  35 | });
  36 | 
  37 | test('user registration', async ({}) => {
  38 | 
  39 |     //step 1: navigate to application url
  40 |     const config =new TestConfig();
> 41 |     await page.goto(config.appUrl);
     |     ^ ReferenceError: page is not defined
  42 |     //step 2: Go to My Account and click on Register link
  43 |     // const homePage =new HomePage(page);
  44 |     homePage.clickMyAccount();
  45 |     await homePage.clickRegister();
  46 |     // const registrationPage = new RegistrationPage(page);
  47 |     //step 3: enter First Name, Last Name, Email, Telephone, Password and Confirm Password
  48 |     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  49 |     await registrationPage.setLastName(RandomDataUtil.getlastName());
  50 |     await registrationPage.setEmail(RandomDataUtil.getEmail());
  51 |     await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  52 |     const password = RandomDataUtil.getPassword();
  53 |     await registrationPage.setPassword(password);
  54 |     await registrationPage.setConfirmPassword(password);
  55 | 
  56 |     //step 4: select Privacy Policy checkbox
  57 |     await registrationPage.setPrivacyPolicy();
  58 |     //step 5: click on Continue button
  59 |     await registrationPage.clickContinue();
  60 |     //step 6: verify the confirmation message
  61 |     const confirmationMsg = await registrationPage.getConfirmationMsg();
  62 |     expect(confirmationMsg).toContain('Your Account Has Been Created!');
  63 | 
  64 | });
  65 | 
  66 | 
```