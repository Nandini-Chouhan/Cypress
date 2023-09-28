import locators from "../locators";
class Cartpage{   
     
    clickOnProceedToCheckoutButton(){
        cy.xpath(locators.proceedToCheckoutButton).should('be.visible').click()
    }
    typeAddressLine1OnCheckoutPage(addressLine1){
        cy.xpath(locators.addressLine1Input).should('be.visible').click({force: true})
        cy.xpath(locators.addressLine1Input).should('be.visible').type(addressLine1,{force: true})
    }
    typeAddressLine2OnCheckoutPage(addressLine2){
        cy.xpath(locators.addressLine2Input).should('be.visible').click({force:true})
        cy.xpath(locators.addressLine2Input).should('be.visible').type(addressLine2,{force: true})
    }
    typePinCodeOnCheckoutPage(pinCode){
        cy.xpath(locators.pincodeInput).should('be.visible').click({force: true})
        cy.xpath(locators.pincodeInput).should('be.visible').type(pinCode,{force: true})
    }
    clickOnHomeButtonToSaveAsOnCheckoutPage(){
        cy.xpath(locators.saveAsHome).should('be.visible').click()
    }
    clickOnProceedToPayment(){
       // cy.xpath(locators.proceedToPaymentButton).should('be.visible').click({force:true})
       cy.xpath(locators.proceedToPaymentButton).trigger('mosueover').wait(1000).click({force:true})
    }
    clickOnCreditAndDebitCardPaymentOption(){
        cy.scrollTo('bottom')
        //cy.xpath(locators.cardRadioButton).trigger('mouseover').wait(1000).click({force:true})
        cy.xpath(locators.cardRadioButton).trigger('mosueover').wait(1000).click({force:true})
       // cy.xpath(locators.cardRadioButton).should('be.visible').wait(1000)click({force:true})
      // cy.xpath(locators.cardRadioButton).scrollTo('bottom').should('be.visible').click()
    }
    typeCreditOrDebitCardNumberOnPaymentPage(cardNumber){
        cy.xpath(locators.cardNumberInput).should('be.visible').click({force: true})
        cy.xpath(locators.cardNumberInput).should('be.visible').type(cardNumber)
    }
    typeNameOnCardOnPaymentPage(nameOnCard){
        cy.xpath(locators.nameOnCardInput).should('be.visible').click({force: true})
        cy.xpath(locators.nameOnCardInput).should('be.visible').type(nameOnCard)
    }
    typeCardExpiryDateOnPaymentPage(expiryDate){
        cy.xpath(locators.cardExpiryDateInput).should('be.visible').click({force: true})
        cy.xpath(locators.cardExpiryDateInput).should('be.visible').type(expiryDate)
    }
    typeCVVOnPaymentPage(cvv){
        cy.xpath(locators.cvvInput).should('be.visible').click({force: true})
        cy.xpath(locators.cvvInput).should('be.visible').type(cvv)
    }
    clickOnPayNowButton(){  
        cy.xpath(locators.payNowButton).should('be.visible').click({force: true})
    }

}
export default Cartpage;