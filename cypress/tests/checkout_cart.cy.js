import{cartpage, login} from '../support/page_objects'
import {homepage} from '../support/page_objects'
import testdata from '../fixtures/testdata.json'
/*
Precondition:
1. Items are added to cart
2. User hasn't added shipping address on their account
3. User hasn't added any credit or debit card details on their account

*/
describe('Buy cart items', ()=>{       
    before(function () {
        cy.visit(Cypress.config().baseUrl)
        cy.fixture('testdata').then(function(testdata){
            this.testdata = testdata;
        })
    })                 
    it('Verify that user should be able to checkout the added cart items', ()=>{         

        //Click on No Thanks button on popup
        homepage.clickOnNoThanksButton()                       

        //SignIn
        homepage.clickOnSignInSignUpButton()
        login.verifyIfLoginPageIsVisible()
        login.typeEmailAddress(testdata.email)
        login.clickOnSignInButton()
        login.typePassword(testdata.password)
        login.clickOnSignInButton()
        homepage.verifyUsernameAfterLogin(testdata.username)
        
        //Go to Cart
        homepage.clickOnCartButton()
        cy.wait(10000)
        cartpage.clickOnProceedToCheckoutButton()

        //Fill shipping address details
        cartpage.typeAddressLine1OnCheckoutPage(testdata.addressLine1)
        cartpage.typeAddressLine2OnCheckoutPage(testdata.addressLine2)
        cartpage.typePinCodeOnCheckoutPage(testdata.pinCode)
        cartpage.clickOnHomeButtonToSaveAsOnCheckoutPage()
        cartpage.clickOnProceedToPayment()
        cy.wait(10000)

        //Fill card details
        cartpage.clickOnCreditAndDebitCardPaymentOption()
        cartpage.typeCreditOrDebitCardNumberOnPaymentPage(testdata.cardNumber)
        cartpage.typeNameOnCardOnPaymentPage(testdata.nameOnCard)
        cartpage.typeCardExpiryDateOnPaymentPage(testdata.cardExpiryDate)
        cartpage.typeCVVOnPaymentPage(testdata.cvv)

        //Commenting final payment function to not make any unwanted payments
        //cartpage.clickOnPayNowButton()
    })
})   