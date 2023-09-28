import locators from "../locators"
class Login{

    verifyIfLoginPageIsVisible(){     
      cy.xpath(locators.loginPageElement).should('be.visible')
    }

    typeEmailAddress(email){    
        cy.xpath(locators.emailInput).should('be.visible').type(email).click()
    }

    typePassword(password){
        cy.xpath(locators.passwordInput).should('be.visible').type(password).click()
    }
 
    clickOnSignInButton(){
        cy.xpath(locators.signInButton).click()
    }
} 

export default Login;