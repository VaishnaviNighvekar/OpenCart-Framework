# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> user registration
- Location: tests\AccountRegistration.spec.ts:19:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

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
  19 | test('user registration', async ({page}) => {
  20 | 
  21 |     //step 1: navigate to application url
  22 |     const config =new TestConfig();
> 23 |     await page.goto(config.appUrl);
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  24 |     //step 2: Go to My Account and click on Register link
  25 |     const homePage =new HomePage(page);
  26 |     homePage.clickMyAccount();
  27 |     await homePage.clickRegister();
  28 |     const registrationPage = new RegistrationPage(page);
  29 |     //step 3: enter First Name, Last Name, Email, Telephone, Password and Confirm Password
  30 |     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  31 |     await registrationPage.setLastName(RandomDataUtil.getlastName());
  32 |     await registrationPage.setEmail(RandomDataUtil.getEmail());
  33 |     await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  34 |     await registrationPage.setPassword(RandomDataUtil.getPassword());
  35 |     await registrationPage.setConfirmPassword(RandomDataUtil.getPassword());
  36 | 
  37 |     //step 4: select Privacy Policy checkbox
  38 |     await registrationPage.setPrivacyPolicy();
  39 |     //step 5: click on Continue button
  40 |     await registrationPage.clickContinue();
  41 |     //step 6: verify the confirmation message
  42 |     const confirmationMsg = await registrationPage.getConfirmationMsg();
  43 |     expect(confirmationMsg).toContain('Your Account Has Been Created!');
  44 | 
  45 | });
  46 | 
  47 | 
```