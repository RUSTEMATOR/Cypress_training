class BaseInfo {
    baseUrl = Cypress.config('baseUrl')

    loginSpecsAndCreds = {
        signInBtn: '.header_signin',
        loginField: '#signinEmail',
        passwordField: '#signinPassword',
        loginBtn: '.btn-primary',
        loginBtnText: 'Login',
        login: Cypress.config('login'),
        password: Cypress.config('password')
    }
   
}

const baseInfo = new BaseInfo()
export default baseInfo
