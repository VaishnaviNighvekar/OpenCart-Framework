# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> user registration
- Location: tests\AccountRegistration.spec.ts:19:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h1:has-text("Your Account Has Been Created!")')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "Your Store" [ref=e33] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home
        - img "Your Store" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Register" [ref=e73] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=account/register
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Register Account" [level=1] [ref=e76]
        - paragraph [ref=e77]:
          - text: If you already have an account with us, please login at the
          - link "login page" [ref=e78] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/login
          - text: .
        - generic [ref=e79]:
          - group "Your Personal Details" [ref=e80]:
            - generic [ref=e81]: Your Personal Details
            - text: "*"
            - generic [ref=e82]:
              - generic [ref=e83]: "* First Name"
              - textbox "* First Name" [ref=e85]:
                - /placeholder: First Name
                - text: Margarete
            - generic [ref=e86]:
              - generic [ref=e87]: "* Last Name"
              - textbox "* Last Name" [ref=e89]:
                - /placeholder: Last Name
                - text: Corkery
            - generic [ref=e90]:
              - generic [ref=e91]: "* E-Mail"
              - textbox "* E-Mail" [ref=e93]:
                - /placeholder: E-Mail
                - text: Rex_Feest-Price@gmail.com
            - generic [ref=e94]:
              - generic [ref=e95]: "* Telephone"
              - textbox "* Telephone" [ref=e97]:
                - /placeholder: Telephone
                - text: (972) 753-7188 x5565
          - group "Your Password" [ref=e98]:
            - generic [ref=e99]: Your Password
            - generic [ref=e100]:
              - generic [ref=e101]: "* Password"
              - textbox "* Password" [ref=e103]:
                - /placeholder: Password
                - text: tjMJ1H86vTM22y6
            - generic [ref=e104]:
              - generic [ref=e105]: "* Password Confirm"
              - generic [ref=e106]:
                - textbox "* Password Confirm" [ref=e107]:
                  - /placeholder: Password Confirm
                  - text: wYEaV00dbQXf9XE
                - generic [ref=e108]: Password confirmation does not match password!
          - group "Newsletter" [ref=e109]:
            - generic [ref=e110]: Newsletter
            - generic [ref=e111]:
              - generic [ref=e112]: Subscribe
              - generic [ref=e113]:
                - generic [ref=e114] [cursor=pointer]:
                  - radio "Yes" [ref=e115]
                  - text: "Yes"
                - generic [ref=e116] [cursor=pointer]:
                  - radio "No" [checked] [ref=e117]
                  - text: "No"
          - generic [ref=e118]:
            - text: I have read and agree to the
            - link "Privacy Policy" [ref=e119] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=information/information/agree&information_id=3
            - checkbox [checked] [ref=e120]
            - button "Continue" [ref=e121] [cursor=pointer]
      - complementary [ref=e122]:
        - generic [ref=e123]:
          - link "Login" [ref=e124] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/login
          - link "Register" [ref=e125] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/register
          - link "Forgotten Password" [ref=e126] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/forgotten
          - link "My Account" [ref=e127] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
          - link "Address Book" [ref=e128] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/address
          - link "Wish List" [ref=e129] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
          - link "Order History" [ref=e130] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/order
          - link "Downloads" [ref=e131] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/download
          - link "Recurring payments" [ref=e132] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/recurring
          - link "Reward Points" [ref=e133] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/reward
          - link "Returns" [ref=e134] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/return
          - link "Transactions" [ref=e135] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/transaction
          - link "Newsletter" [ref=e136] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
  - contentinfo [ref=e137]:
    - generic [ref=e138]:
      - generic [ref=e139]:
        - generic [ref=e140]:
          - heading "Information" [level=5] [ref=e141]
          - list [ref=e142]:
            - listitem [ref=e143]:
              - link "About Us" [ref=e144] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e145]:
              - link "Delivery Information" [ref=e146] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e147]:
              - link "Privacy Policy" [ref=e148] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e149]:
              - link "Terms & Conditions" [ref=e150] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e151]:
          - heading "Customer Service" [level=5] [ref=e152]
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "Contact Us" [ref=e155] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=e156]:
              - link "Returns" [ref=e157] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e158]:
              - link "Site Map" [ref=e159] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e160]:
          - heading "Extras" [level=5] [ref=e161]
          - list [ref=e162]:
            - listitem [ref=e163]:
              - link "Brands" [ref=e164] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e165]:
              - link "Gift Certificates" [ref=e166] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e167]:
              - link "Affiliate" [ref=e168] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e169]:
              - link "Specials" [ref=e170] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=e171]:
          - heading "My Account" [level=5] [ref=e172]
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link "My Account" [ref=e175] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=e176]:
              - link "Order History" [ref=e177] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=e178]:
              - link "Wish List" [ref=e179] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e180]:
              - link "Newsletter" [ref=e181] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e182]
      - paragraph [ref=e183]:
        - text: Powered By
        - link "OpenCart" [ref=e184] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class RegistrationPage {
  4   |     private readonly page: Page;
  5   |     
  6   |     // Locators using CSS selectors
  7   |     private readonly txtFirstname: Locator;
  8   |     private readonly txtLastname: Locator;
  9   |     private readonly txtEmail: Locator;
  10  |     private readonly txtTelephone: Locator;
  11  |     private readonly txtPassword: Locator;
  12  |     private readonly txtConfirmPassword: Locator;
  13  |     private readonly chkdPolicy: Locator;
  14  |     private readonly btnContinue: Locator;
  15  |     private readonly msgConfirmation: Locator;
  16  | 
  17  |     constructor(page: Page) {
  18  |         this.page = page;
  19  |         
  20  |         // Initialize locators with CSS selectors
  21  |         this.txtFirstname = page.locator('#input-firstname');
  22  |         this.txtLastname = page.locator('#input-lastname');
  23  |         this.txtEmail = page.locator('#input-email');
  24  |         this.txtTelephone = page.locator('#input-telephone');
  25  |         this.txtPassword = page.locator('#input-password');
  26  |         this.txtConfirmPassword = page.locator('#input-confirm');
  27  |         this.chkdPolicy = page.locator('input[name="agree"]');
  28  |         this.btnContinue = page.locator('input[value="Continue"]');
  29  |         this.msgConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")');
  30  |     }
  31  | 
  32  |     /**
  33  |      * Sets the first name in the registration form
  34  |      * @param fname - First name to enter
  35  |      */
  36  |     async setFirstName(fname: string): Promise<void> {
  37  |         await this.txtFirstname.fill(fname);
  38  |     }
  39  | 
  40  |     /**
  41  |      * Sets the last name in the registration form
  42  |      * @param lname - Last name to enter
  43  |      */
  44  |     async setLastName(lname: string): Promise<void> {
  45  |         await this.txtLastname.fill(lname);
  46  |     }
  47  | 
  48  |     /**
  49  |      * Sets the email in the registration form
  50  |      * @param email - Email to enter
  51  |      */
  52  |     async setEmail(email: string): Promise<void> {
  53  |         await this.txtEmail.fill(email);
  54  |     }
  55  | 
  56  |     /**
  57  |      * Sets the telephone number in the registration form
  58  |      * @param tel - Telephone number to enter
  59  |      */
  60  |     async setTelephone(tel: string): Promise<void> {
  61  |         await this.txtTelephone.fill(tel);
  62  |     }
  63  | 
  64  |     /**
  65  |      * Sets the password in the registration form
  66  |      * @param pwd - Password to enter
  67  |      */
  68  |     async setPassword(pwd: string): Promise<void> {
  69  |         await this.txtPassword.fill(pwd);
  70  |     }
  71  | 
  72  |     /**
  73  |      * Sets the confirm password in the registration form
  74  |      * @param pwd - Password to confirm
  75  |      */
  76  |     async setConfirmPassword(pwd: string): Promise<void> {
  77  |         await this.txtConfirmPassword.fill(pwd);
  78  |     }
  79  | 
  80  |     /**
  81  |      * Checks the privacy policy checkbox
  82  |      */
  83  |     async setPrivacyPolicy(): Promise<void> {
  84  |         await this.chkdPolicy.check();
  85  |     }
  86  | 
  87  |     /**
  88  |      * Clicks the Continue button
  89  |      */
  90  |     async clickContinue(): Promise<void> {
  91  |         await this.btnContinue.click();
  92  |     }
  93  | 
  94  |     /**
  95  |      * Gets the confirmation message text
  96  |      * @returns Promise<string> - Confirmation message text
  97  |      */
  98  |     async getConfirmationMsg(): Promise<string> {
> 99  |         return await this.msgConfirmation.textContent() ?? '';
      |                                           ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  100 |         //?? '' is used to handle the case where textContent() might return null, ensuring that the function always returns a string.
  101 |     }
  102 | 
  103 |     /**
  104 |      * Complete registration workflow
  105 |      * @param userData - Object containing registration data
  106 |      */
  107 |     async completeRegistration(userData: {
  108 |         firstName: string;
  109 |         lastName: string;
  110 |         email: string;
  111 |         telephone: string;
  112 |         password: string;
  113 |     }): Promise<void> {
  114 |         await this.setFirstName(userData.firstName);
  115 |         await this.setLastName(userData.lastName);
  116 |         await this.setEmail(userData.email);
  117 |         await this.setTelephone(userData.telephone);
  118 |         await this.setPassword(userData.password);
  119 |         await this.setConfirmPassword(userData.password);
  120 |         await this.setPrivacyPolicy();
  121 |         await this.clickContinue();
  122 |         await expect(this.msgConfirmation).toBeVisible();
  123 |     }
  124 | }
  125 | 
```