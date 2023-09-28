import locators from "../locators";
class Customerpage{

    clickOnChangePasswordCheckbox(){
        cy.wait(5000)
        cy.xpath(locators.changePasswordCheckbox).should('be.visible').click()
    }
    typeCurrentPasswordInputOnAccountInformation(cureentPassword){
        cy.xpath(locators.currentPasswordInput).should('be.visible').type(cureentPassword).click()
    }
    typeNewPasswordInputOnAccountInformation(newPassword){
        cy.xpath(locators.newPasswordInput).should('be.visible').type(newPassword).click()
    }
    typeConfirmNewPasswordInputOnAccountInformation(confirmPassword){ 
        cy.xpath(locators.confirmNewPasswordInput).should('be.visible').type(confirmPassword).click()
    }
    clickOnSaveAndContinueButtonOnAccountInformation(){
        cy.xpath(locators.saveAndContinueButton).should('be.visible').click()
    }
} 
export default Customerpage;
