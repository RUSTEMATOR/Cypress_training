import { welcomePageHeader, welcomePageBody, welcomePageFooteer, customMethods } from '../support/pages';

describe('Hillel test suite', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space')
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
        customMethods.checkVisibility(welcomePageBody.doMoreText)
        customMethods.checkVisibility(welcomePageBody.descriptionBodyText)
        customMethods.CheckText(welcomePageBody.descriptionBodyText, welcomePageBody.descriptionBodyTextPlaceholder)
        customMethods.checkVisibility(welcomePageBody.signUpButton)
        customMethods.CheckText(welcomePageBody.signUpButton, welcomePageBody.signUpButtonText)
        customMethods.checkVisibility(welcomePageBody.videoFrame)
        customMethods.checkVisibility(welcomePageBody.fuelExpenses)
        customMethods.checkVisibility(welcomePageBody.instructionsAndManuals)
        customMethods.CheckText(welcomePageBody.instructionsAndManuals, welcomePageBody.instructionsAndManualsText)
        customMethods.checkVisibility(welcomePageBody.instructionsAndManualsDescription)
        customMethods.checkVisibility(welcomePageBody.instructionsAndManualsDescription, welcomePageBody.instructionsAndManualsDescriptionText)
        customMethods.checkVisibility(welcomePageBody.instructionsImage)
        customMethods.checkVisibility(welcomePageBody.logFuelExpenses)
        customMethods.CheckText(welcomePageBody.logFuelExpenses, welcomePageBody.logFuelExpensesText)
        customMethods.checkVisibility(welcomePageBody.fuelExpensesDescription)
    })

    it('Check footer elements', () => {
        customMethods.checkVisibilityPlaceholder(welcomePageFooteer.contacts)
        customMethods.checkVisibility(welcomePageFooteer.facebookButton)
        customMethods.checkVisibility(welcomePageFooteer.telegramButton)
        customMethods.checkVisibility(welcomePageFooteer.youtubeButton)
        customMethods.checkVisibility(welcomePageFooteer.instagramButton)
        customMethods.checkVisibility(welcomePageFooteer.linkedinButton)
        customMethods.checkVisibility(welcomePageFooteer.ithillelLink)
        customMethods.CheckText(welcomePageFooteer.ithillelLink, welcomePageFooteer.ithillelLinkText)
        customMethods.checkVisibility(welcomePageFooteer.supporLink)
        customMethods.CheckText(welcomePageFooteer.supporLink, welcomePageFooteer.supporLinkText)
        customMethods.checkVisibility(welcomePageFooteer.copyright)
        customMethods.CheckText(welcomePageFooteer.copyright, welcomePageFooteer.copyrightText)
        customMethods.checkVisibility(welcomePageFooteer.copyrightDescription)
        customMethods.CheckText(welcomePageFooteer.copyrightDescription, welcomePageFooteer.copyrightDescriptionText)
        customMethods.checkVisibility(welcomePageFooteer.logo)
    })  

})