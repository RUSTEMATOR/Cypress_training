import fs from 'fs'
class CustomMethods{


    LogIn(signInBtn, login, password, loginField, passwordField, loginBtn){
        cy.get(signInBtn).click({multiple: true});
        cy.get(loginField).type(login);
        cy.get(passwordField).type(password, {sensitive: true});
        cy.contains(loginBtn).click({multiple: true, force: true});
    }

    visitPage(page){
        cy.visit(page)
        return this
    }

    CheckText(selector, text){
        cy.get(selector).should('contain.text', text)
        return this
    }

    checkVisibility(selector){
        cy.get(selector).should('be.visible')
        return this
    }

    checkVisibilityPlaceholder(selector){
        cy.contains(selector).should('be.visible')
        return this
    }
    
    checkVisibilityXpath(xpath){
        cy.xpath(xpath).should('be.visible')
        return this
    }

    checkDisabled(selector){
        cy.get(selector).should('be.disabled')
        return this
    }
    
    clickOn(selector){
        cy.get(selector).click()
        return this
    }

    clickOnXpath(xpath){
        cy.xpath(xpath).click()
        return this
    }

    typeIn(selector, value){
        cy.get(selector).type(value, {sensitive: true})
        return this
    }

    typeInClear(selector, value){
        cy.get(selector).type(value, {sensitive: true})
        cy.get(selector).clear()
        return this
    }
    
    typeInXpath(xpath, value){
        cy.xpath(xpath).type(value)
        return this
    }

    checkHover(selector, cssProperty, expectedValue) {
        cy.get(selector)
            .trigger('mouseover')
            .should('have.css', cssProperty, expectedValue); 
        return this;
    }

    checkColor(selector, cssProperty, expectedValue){
        cy.get(selector)
           .should('have.css', cssProperty, expectedValue); 
        return this;
    }

    checkColorXpath(xpath, cssProperty, expectedValue){
        cy.xpath(xpath)
           .should('have.css', cssProperty, expectedValue); 
        return this;
    }

    generateRandomEmail() {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let email = 'user';
        for (let i = 0; i < 10; i++) {
            email += chars[Math.floor(Math.random() * chars.length)];
        }
        email += '@roflan.com';
        return email;
    }
    

    writeToFile(filename, content) {
        cy.writeFile(filename, content + '\n', {flag: 'a+'});
    }

}

const customMethods = new CustomMethods()
export default customMethods