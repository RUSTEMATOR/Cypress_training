
class WelcomePageHeader{
    hillelLogo = 'svg[width="135"][height="30"]'
    homeButton = ('a.btn.header-link', 'Home')
    aboutButton = ('.btn', 'About')
    contactsButton = ('.btn', 'Contacts')
    guestButton = ('.header-link.-guest')
    signInButton = ('.header_signin')
    guestButtonText = 'Guest log in'
    signInButtonText = 'Sign In'

    getHillelLogo = () => {
        return cy.get(this.hillelLogo)
    }

    getHomeButton = () => {
        return cy.contains(this.homeButton)
    }

    getAboutButton = () => {
        return cy.contains(this.aboutButton)
    }

    getContactsButton = () => {
        return cy.contains(this.contactsButton)
    }

    getGuestButton = () => {
        return cy.get(this.guestButton)
    }

    getSignInButton = () => {
        return cy.get(this.signInButton)
    }
}


const welcomePageHeader = new WelcomePageHeader()
export default welcomePageHeader