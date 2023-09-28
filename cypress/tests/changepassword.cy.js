import { homepage } from "../support/page_objects";
import { login } from "../support/page_objects";
import { customerpage } from "../support/page_objects";
import testdata from '../fixtures/testdata.json'

describe('Change Password',()=>{
    before(function () {
        cy.visit(Cypress.config().baseUrl)
        cy.fixture('testdata').then(function(testdata){
            this.testdata = testdata;
        })
    })
    it('Verify if user is able to change password',  ()=>{
        
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

        //Go to Customer page
        homepage.clickOnUsernameDropdown()
        homepage.clickOnUsernameDropdownListElementAccountInformation()

        //Change current password
        customerpage.clickOnChangePasswordCheckbox()
        customerpage.typeCurrentPasswordInputOnAccountInformation(testdata.currentPassword)
        customerpage.typeNewPasswordInputOnAccountInformation(testdata.newPassword)
        customerpage.typeConfirmNewPasswordInputOnAccountInformation(testdata.confirmNewPassword)
        customerpage.clickOnSaveAndContinueButtonOnAccountInformation()

    })
})
