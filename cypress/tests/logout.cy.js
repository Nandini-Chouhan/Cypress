import { homepage } from "../support/page_objects";
import { login } from "../support/page_objects";
import { customerpage } from "../support/page_objects";
import testdata from '../fixtures/testdata.json'
describe('Logout', ()=>{       
    before(function () {
        cy.visit(Cypress.config().baseUrl)
        cy.fixture('testdata').then(function(testdata){
            this.testdata = testdata;
        })
    })                 
    it('Verify that user should able to logged out', ()=>{     
        
        //Click on No Thanks popup
        homepage.clickOnNoThanksButton()

        //SignIn
        homepage.clickOnSignInSignUpButton()
        login.verifyIfLoginPageIsVisible()
        login.typeEmailAddress(testdata.email)
        login.clickOnSignInButton()
        login.typePassword(testdata.password)
        login.clickOnSignInButton()
        homepage.verifyUsernameAfterLogin(testdata.username)       
        
       //SignOut
       homepage.clickOnUsernameDropdown()
       homepage.clickOnLogoutElementFromUsernameDropdown()
       homepage.verifyIfUserSuccessfullyLoggout()
       
    })
})  