import { welcomePageHeader, welcomePageBody, welcomePageFooter, customMethods, regForm, baseInfo, profile, loginForm } from '../support/pages';


describe('Hillel basic test suite', () => {
    beforeEach(() => {
        customMethods.visitPage(baseInfo.siteLink)
    })
    
    it('Check title of the page', () => {
        cy.title().should('include', 'Hillel Qauto')
    })

    //I don't know what this test can be used for, just playing around
    it('Get all of the elements', () => 
        {
        cy.get('*').then((elements) =>
            {
            const allElements = elements;
            console.log(allElements);
        })
    })

    it('Check header elements', () => {
        customMethods.checkVisibility(welcomePageHeader.hillelLogo)
        customMethods.checkVisibilityPlaceholder(welcomePageHeader.homeButton)
        customMethods.checkVisibilityPlaceholder(welcomePageHeader.aboutButton)
        customMethods.checkVisibilityPlaceholder(welcomePageHeader.contactsButton)
        customMethods.checkVisibility(welcomePageHeader.guestButton)
        customMethods.CheckText(welcomePageHeader.guestButton, welcomePageHeader.guestButtonText)
        customMethods.checkVisibility(welcomePageHeader.signInButton)
        customMethods.CheckText(welcomePageHeader.signInButton, welcomePageHeader.signInButtonText)
    })

    it('Check body elements', () => {
        customMethods.checkVisibilityPlaceholder(welcomePageBody.doMoreText)
        customMethods.checkVisibility(welcomePageBody.descriptionBodyText)
        customMethods.CheckText(welcomePageBody.descriptionBodyText, welcomePageBody.descriptionBodyTextPlaceholder)
        customMethods.checkVisibility(welcomePageBody.signUpButton)
        customMethods.CheckText(welcomePageBody.signUpButton, welcomePageBody.signUpButtonText)
        customMethods.checkVisibilityXpath(welcomePageBody.videoFrame)
        customMethods.checkVisibility(welcomePageBody.fuelExpenses)
        customMethods.checkVisibility(welcomePageBody.instructionsAndManuals)
        customMethods.CheckText(welcomePageBody.instructionsAndManuals, welcomePageBody.instructionsAndManualsText)
        customMethods.checkVisibility(welcomePageBody.instructionsAndManualsDescription)
        customMethods.checkVisibility(welcomePageBody.instructionsAndManualsDescription, welcomePageBody.instructionsAndManualsDescriptionText)
        customMethods.checkVisibility(welcomePageBody.instructionsImage)
        customMethods.checkVisibility(welcomePageBody.logFuelExpenses)
        customMethods.CheckText(welcomePageBody.logFuelExpenses, welcomePageBody.logFuelExpensesText)
        customMethods.checkVisibility(welcomePageBody.fuelExpensesDescription)
        customMethods.CheckText(welcomePageBody.fuelExpensesDescription, welcomePageBody.fuelExpensesDescriptionText)
        customMethods.checkVisibility(welcomePageBody.fuelExpensesDescription)
    })

    it('Check footer elements', () => {
        customMethods.checkVisibility(welcomePageFooter.facebookButton)
        customMethods.checkVisibility(welcomePageFooter.telegramButton)
        customMethods.checkVisibility(welcomePageFooter.youtubeButton)
        customMethods.checkVisibility(welcomePageFooter.instagramButton)
        customMethods.checkVisibility(welcomePageFooter.linkedinButton)
        customMethods.checkVisibility(welcomePageFooter.ithillelLink)
        customMethods.CheckText(welcomePageFooter.ithillelLink, welcomePageFooter.ithillelLinkText)
        customMethods.checkVisibility(welcomePageFooter.supporLink)
        customMethods.CheckText(welcomePageFooter.supporLink, welcomePageFooter.supporLinkText)
        customMethods.checkVisibility(welcomePageFooter.copyright)
        customMethods.CheckText(welcomePageFooter.copyright, welcomePageFooter.copyrightText)
        customMethods.checkVisibility(welcomePageFooter.copyrightDescription)
        customMethods.CheckText(welcomePageFooter.copyrightDescription, welcomePageFooter.copyrightDescriptionText)
        customMethods.checkVisibilityXpath(welcomePageFooter.logo)
    })  
})


describe('Positive Registration test suite', () => {
    beforeEach(() => {
        customMethods.visitPage(baseInfo.siteLink)
    })

    it('Check registration form to open', () => {
        customMethods.clickOn(regForm.signUpBtn)
        customMethods.checkVisibility(regForm.nameField)
    })

    it('Check if all of the fields are present', () => {
        customMethods.clickOn(regForm.signUpBtn)
        for (let field of regForm.regFormArray) {
            customMethods.checkVisibility(field)
        }
    })

    it('Check hover of "Sign up" button', () => {
        regForm.signUpColors .forEach(color => {
            customMethods.checkHover(regForm.signUpBtn, color, 'rgb(2, 117, 216)')
        })
    })

    it('Registration test valid data', () => {
        const randomEmail = customMethods.generateRandomEmail()

        customMethods.clickOn(regForm.signUpBtn)
        customMethods.typeIn(regForm.nameField, 'John')
        customMethods.typeIn(regForm.lastNameField, 'Doe')
        customMethods.typeIn(regForm.emailField, randomEmail)
        customMethods.writeToFile('randomEmail.txt', randomEmail)
        cy.fixture('fixtures.json').then((data) => {
            customMethods.typeIn(regForm.passwordField, data.password);
            customMethods.typeIn(regForm.passRepeatField, data.password);
        });
        customMethods.clickOn(regForm.registerBtn)
        customMethods.checkVisibility(profile.addCarBtn)
    })
})


describe('Negative Registration empty fields suite', () => {
    beforeEach(() => {
        customMethods.visitPage(baseInfo.siteLink)
        customMethods.clickOn(regForm.signUpBtn)
    })

    it('Check error message for name empty field', () => {
        customMethods.typeInClear(regForm.nameField, '1')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkVisibilityXpath(regForm.nameReqErrEmpty)
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check Color of error message for empty repeat name field', () => {
        customMethods.typeInClear(regForm.nameField, '1')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.nameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.nameReqErrEmpty, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for empty last name empty field', () => {
        customMethods.typeInClear(regForm.lastNameField, '1')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.lastNameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.lastNameFieldErrEmpty, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for empty email empty field', () => {
        customMethods.typeInClear(regForm.emailField, '1')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.emailField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.emailFieldErrEmpty, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for empty password empty field', () => {
        customMethods.typeInClear(regForm.passwordField, '1')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.passwordField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.passwordFieldErrEmpty, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for empty password repeat empty field', () => {
        customMethods.typeInClear(regForm.passRepeatField, '1')
        customMethods.clickOn(regForm.emailField)
        customMethods.checkColor(regForm.passRepeatField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.passRepeatFieldErrEmpty, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })
})


describe('Negative Registration wrong data suite', () => {
    beforeEach(() => {
        customMethods.visitPage(baseInfo.siteLink)
        customMethods.clickOn(regForm.signUpBtn)
    })

    it('Check error message for invalid email', () => {
        customMethods.typeIn(regForm.emailField, 'русский текст')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.emailField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.emailFieldErrInvalid, 'border-color',  'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for invalid name field', () => {
        customMethods.typeIn(regForm.nameField, 'русский текст')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.nameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.nameFieldErrInvalid, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for invalid last name field', () => {
        customMethods.typeIn(regForm.lastNameField, 'русский текст')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.lastNameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.lastNameFieldErrInvalid, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for invalid password field', () => {
        customMethods.typeIn(regForm.passwordField, '123')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.passwordField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.passwordFieldErrInvalid, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for invalid password repeat field', () => {
        customMethods.typeIn(regForm.passRepeatField, '123')
        customMethods.clickOn(regForm.emailField)
        customMethods.checkColor(regForm.passRepeatField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.passRepeatFieldErrInvalid, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check password and repeat password do not match field', () => {
        customMethods.typeIn(regForm.passwordField, '193786Az()')
        customMethods.typeIn(regForm.passRepeatField, '193786Az')
        customMethods.clickOn(regForm.nameField)
        customMethods.checkColorXpath(regForm.passRepeatFieldErrMatch, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })
})


describe('Negative Registration invalid length suite', () => {
    beforeEach(() => {
        customMethods.visitPage(baseInfo.siteLink)
        customMethods.clickOn(regForm.signUpBtn)
    })

    it('Check error message for wrong name length less than 2 field', () => {
        customMethods.typeIn(regForm.nameField, '1')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.nameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.nameFieldErrInvalidLength, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for wrong last name length less than 2 field', () => {
        customMethods.typeIn(regForm.lastNameField, '1')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.lastNameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.lastNameFieldErrInvalidLength, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for wrong email length more than 20 field', () => {
        customMethods.typeIn(regForm.nameField, 'afewfeawfawefawefawfeawefawefaewfaewfawefaefaewfawefawe')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.nameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.nameFieldErrInvalidLength, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for wrong last name length more than 20 field', () => {
        customMethods.typeIn(regForm.lastNameField, 'afewfeawfawefawefawfeawefawefaewfaewfawefaefaewfawefawe')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.lastNameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.lastNameFieldErrInvalidLength, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })
    
    it('Check error message for wrong password length less than 8 field', () => {
        customMethods.typeIn(regForm.passwordField, '123')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.passwordField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.passwordFieldErrInvalid, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for wrong password length password repeat less than 8 field', () => {
        customMethods.typeIn(regForm.passRepeatField, '123')
        customMethods.clickOn(regForm.emailField)
        customMethods.checkColor(regForm.passRepeatField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.passRepeatFieldErrInvalid, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })


    it('Check error message for wrong password length more than 15 field', () => {
        customMethods.typeIn(regForm.passwordField, '12345678910111213141516')
        customMethods.clickOn(regForm.passRepeatField)
        customMethods.checkColor(regForm.passwordField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.passwordFieldErrInvalid, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check error message for wrong password length password repeat more than 15 field', () => {
        customMethods.typeIn(regForm.passRepeatField, '12345678910111213141516')
        customMethods.clickOn(regForm.emailField)
        customMethods.checkColor(regForm.passRepeatField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColorXpath(regForm.passRepeatFieldErrInvalid, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

    it('Check full wrong info reg', () => {
        customMethods.typeIn(regForm.nameField, '1')
        customMethods.typeIn(regForm.lastNameField, '1')
        customMethods.typeIn(regForm.emailField, '123456789012345678901')
        customMethods.typeIn(regForm.passwordField, '123')
        customMethods.typeIn(regForm.passRepeatField, '123A')
        customMethods.clickOn(regForm.nameField)
        customMethods.checkColor(regForm.nameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColor(regForm.lastNameField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColor(regForm.emailField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColor(regForm.passwordField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkColor(regForm.passRepeatField, 'border-color', 'rgb(220, 53, 69)')
        customMethods.checkDisabled(regForm.registerBtn)
    })

})

//here future profile tests will be written
describe('Profile test suite', () => {
    beforeEach(() => {
        customMethods.visitPage(baseInfo.siteLink)
        customMethods.LogIn(welcomePageHeader.signInButton, baseInfo.baseLogin, baseInfo.basePassword, loginForm.emailField, loginForm.passwordField, loginForm.loginBtn)
    })

    it('Check user profile info', () => {
        customMethods.checkVisibility(profile.addCarBtn)
    })
})