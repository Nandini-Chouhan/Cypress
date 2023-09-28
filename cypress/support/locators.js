export default{

    //loginpage_locators
    loginPageElement: '//div[@id="sign-in-form"]//div[2]/div[1]/div',
    emailInput: '//div[@id="sign-in-form"]//div[2]/div[2]/div[1]/input',
    passwordInput: '//div[@id="sign-in-form"]//div[2]/div[3]/div[1]/input',
    signInButton: '//button[@id="remove-button"]',
    
    //homepage_locators
    signInSignUpButton: '//div[@id="header"]/div[2]//div[3]/div[2]/span[1]',
    noThanksButton: '//*[@id="wzrk-cancel"]',
    username: '//div[@id="header"]/div[2]//div[3]/div[2]/text()',
    usernameDropdown: '//div[@id="header"]/div[2]//div[3]/div[2]/span',
    usernameDropdownElementAccountInformation: '//div[@id="header"]/div[2]//div[3]/div[2]//a[4]',
    logoutButtonFromUsernameDropdown: '//div[@id="header"]/div[2]//div[3]/div[2]//a[5]',
    cartButton: '//div[@id="header"]/div[2]/div/div[3]/div[4]/span',
    
    //customerpage_locators
    changePasswordCheckbox: '//input[@name="changePassword"]',
    currentPasswordInput: '//input[@name="oldPassword"]',
    newPasswordInput: '//input[@name="newPassword"]',
    confirmNewPasswordInput: '//input[@name="conPass"]',
    saveAndContinueButton: '//button[contains(text(),"Save & Continue")]',

    //cartpage_locators
    cartitems: ' //*[@id="__next"]/div[2]//div[2]//div/div[1]/div[2]',
    proceedToCheckoutButton: '//*[@id="button"]',
    addressLine1Input: '//div[@id="container-Address Line 1*"]/input',
    addressLine2Input: '//div[@id="container-Address Line 2"]/input',
    pincodeInput:'//div[@id="container-Pincode*"]/input',
    saveAsHome: '//*[@id="review-form"]/form/div[7]/div[1]/div/div[1]/div',
    proceedToPaymentButton: '/html/body/div[2]/div[2]/div/div/div[2]/div[2]/div/button',
    cardRadioButton: '//*[@id="__next"]/div[2]/div[2]/div[2]/div[1]/div[10]/div[1]/div',
    cardNumberInput: '//input[@placeholder="Card Number"]',
    nameOnCardInput: '//input[@placeholder="Name on card"]',
    cardExpiryDateInput: '//input[@placeholder="Valid Thru (MM/YYYY)"]',
    cvvInput: '//input[@placeholder="CVV"]',
    payNowButton: '//button[@id="submit-saved-card-form-button"]'
    
}               