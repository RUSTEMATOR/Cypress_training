class RegForm{
    signInBtn = ('.header_signin')
    signUpBtn = ('.btn-primary')
    nameField = ('#signupName')
    lastNameField = ('#signupLastName')
    emailField = ('#signupEmail')
    passwordField = ('#signupPassword')
    passRepeatField = ('#signupRepeatPassword')
    registerBtn = ('ngb-modal-window > div > div > app-signup-modal > div.modal-footer > button')


    nameReqErrEmpty = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Name required')]"
    lastNameFieldErrEmpty = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Last name required')]"
    emailFieldErrEmpty = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Email required')]"
    passwordFieldErrEmpty = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Password required')]"
    passRepeatFieldErrEmpty = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Re-enter password required')]"

    nameFieldErrInvalid = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Name is invalid')]"
    lastNameFieldErrInvalid = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Last name is invalid')]"
    emailFieldErrInvalid = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Email is incorrect')]"
    passwordFieldErrInvalid = `//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')]`
    passRepeatFieldErrInvalid = `//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')]`

    nameFieldErrInvalidLength = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Name has to be from 2 to 20 characters long')]"
    lastNameFieldErrInvalidLength = "//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Last name has to be from 2 to 20 characters long')]"

    
    passRepeatFieldErrMatch = `//div[contains(@class, 'invalid-feedback')]//p[contains(text(), 'Passwords do not match')]`




    regFormArray = [this.signUpBtn, this.nameField, this.lastNameField, this.emailField, this.passwordField, this.passRepeatField, this.registerBtn]

    signUpColors = [
        'background-color',
        'border-bottom-color',
        'border-left-color',
        'border-right-color',
        'border-top-color'
    ];
} 


const regForm = new RegForm()
export default regForm