import garage from './pages/Garage';
import expenses from './pages/FuelExpenses';


class CustomMethods{
    LogIn({ signInBtn, login, password, loginField, passwordField, loginBtn, loginBtnText }) {
        cy.log('Sign In Button Selector:', signInBtn);
        cy.log('Login Field Selector:', loginField);
        cy.log('Password Field Selector:', passwordField);
        cy.log('Login Button Selector:', loginBtn);

        cy.get(signInBtn).click({ multiple: true });
        cy.get(loginField).type(login);
        cy.get(passwordField).type(password, { sensitive: true });
        cy.get(loginBtn).contains(loginBtnText).click();
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

    checkNotExist(selector){
        cy.get(selector).should('not.exist')
        return this
    }

    focusElementXpath(xpath){
        cy.xpath(xpath).realHover('mouse')
        return this
    }
    
    clickOn(selector){
        cy.get(selector).first().click()
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

    chooseCar({carBrandField, carModelField, carMilageInput, brand, model, mileage}) {
        cy.get(carBrandField).select(brand)
        cy.get(carModelField).select(model)
        cy.get(carMilageInput).clear().type(mileage)
        return this
    }

    chooseRandomCar({carBrandField, carModelField, carMilageInput}) {
        const randomCar = garage.getRandomCarData()
        cy.get(carBrandField).select(randomCar.brand)
        cy.get(carModelField).select(randomCar.model)
        cy.get(carMilageInput).clear().type(randomCar.mileage)
        return this
    }

    addFuelExpensesGarage({addFuelExpenseBtnGarage, expensesMilage, expensesTotalCost, expensesAddBtn, expensesLiters}) {
        const randomValues = expenses.getRandomValues()

        cy.get(addFuelExpenseBtnGarage).click()
        cy.get(expensesMilage).type(randomValues.mileage)
        cy.get(expensesLiters).type(randomValues.liters)
        cy.get(expensesTotalCost).type(randomValues.totalCost)
        cy.xpath(expensesAddBtn).click()
        return this
    }

    addFuelExpensesTab({expensesTab, addExpensesBtn, expensesAddBtn, expensesLiters, expensesTotalCost, expensesMilage}){
        const randomValues = expenses.getRandomValues()

        customMethods.clickOnXpath(expensesTab)
        customMethods.clickOn(addExpensesBtn)
        cy.get(expensesMilage).type(randomValues.mileage) + 1
        cy.get(expensesLiters).type(randomValues.liters)
        cy.get(expensesTotalCost).type(randomValues.totalCost)
        cy.xpath(expensesAddBtn).click()
    }
        
}

const customMethods = new CustomMethods()
export default customMethods