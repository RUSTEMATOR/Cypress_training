class WelcomePageFooter {

    facebookButton = '.socials_icon.icon.icon-facebook'

    telegramButton = '.socials_icon.icon.icon-telegram'

    youtubeButton = '.socials_icon.icon.icon-youtube'

    instagramButton = '.socials_icon.icon.icon-instagram'

    linkedinButton = '.socials_icon.icon.icon-linkedin'

    ithillelLink = '.contacts_link.display-4'

    supporLink = '.contacts_link.h4'

    copyright = 'body app-root app-footer p:nth-child(1)'

    copyrightDescription = 'body app-root app-footer p:nth-child(2)'

    logo = "//a[@class='footer_logo']//*[name()='svg']"

    ithillelLinkText = 'ithillel.ua'

    supporLinkText ='support@ithillel.ua'

    copyrightText = '© 2021 Hillel IT school'

    copyrightDescriptionText = 'Hillel auto developed in Hillel IT school for educational purposes of QA courses.'




    getContacts = () => {
        return cy.get(this.contacts)
    }

    getFacebookButton = () => {
        return cy.get(this.facebookButton)
    }

    getTelegramButton = () => {
        return cy.get(this.telegramButton)
    }

    getYoutubeButton = () => {
        return cy.get(this.youtubeButton)
    }

    getInstagramButton = () => {
        return cy.get(this.instagramButton)
    }

    getLinkedinButton = () => {
        return cy.get(this.linkedinButton)
    }

    getIthillelLink = () => {
        return cy.get(this.ithillelLink)
    }

    getSupporLink = () => {
        return cy.get(this.supporLink)
    }

    getCopyright = () => {
        return cy.get(this.copyright)
    }

    getCopyrightDescription = () => {
        return cy.get(this.copyrightDescription)
    }

    getLogo = () => {
        return cy.xpath(this.logo)
    }

}

const welcomePageFooteer = new WelcomePageFooter()
export default welcomePageFooteer