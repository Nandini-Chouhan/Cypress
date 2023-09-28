import locators from "../locators";
class Homepage{
    clickOnNoThanksButton(){
        cy.xpath(locators.noThanksButton).should('be.visible').click()
    }

    clickOnSignInSignUpButton(){
        cy.xpath(locators.signInSignUpButton).should('be.visible').click()
    }

    verifyUsernameAfterLogin(username){
        cy.xpath(locators.username).should('have.text',username)
    }

    clickOnUsernameDropdown(){
        cy.xpath(locators.usernameDropdown).should('be.visible').click()
    }
    clickOnUsernameDropdownListElementAccountInformation(){
        cy.xpath(locators.usernameDropdownElementAccountInformation).should('be.visible').click()
    }
    clickOnCartButton(){
        cy.xpath(locators.cartButton).should('be.visible').click()
    } 
    clickOnLogoutElementFromUsernameDropdown(){
        cy.xpath(locators.logoutButtonFromUsernameDropdown).should('be.visible').click()
    }
    verifyIfUserSuccessfullyLoggout(username){
        cy.xpath(locators.username).should('not.have.text',username)
    } 
}
export default Homepage;