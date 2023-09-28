import{login} from '../support/page_objects'
import {homepage} from '../support/page_objects'
import testdata from '../fixtures/testdata.json'

describe('Login', ()=>{       
    before(function () {
        cy.visit(Cypress.config().baseUrl)
        cy.fixture('testdata').then(function(testdata){
            this.testdata = testdata;
        })
    })                 
    it('verify that user should logged in successfully', ()=>{         

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
    })
})  