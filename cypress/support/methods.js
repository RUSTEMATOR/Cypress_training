class CustomMethods{
    CheckText(selector, text){
        return cy.get(selector).should('contain.text', text)
    }

    checkVisibility(selector){
        return cy.get(selector).should('be.visible')
    }

    checkVisibilityPlaceholder(selector){
        return cy.contains(selector).should('be.visible')
    }
    
    checkVisibilityXpath(xpath){
        return cy.xpath(xpath).should('be.visible')
        
    }
} 

const customMethods = new CustomMethods()
export default customMethods