import { welcomePageHeader, welcomePageBody, welcomePageFooter, customMethods, regForm, baseInfo, profile, garage, expenses} from '../support/pages';

describe('Intercept car creation test', () => {
    beforeEach(() => {
        customMethods.visitPage(baseInfo.baseUrl);
        customMethods.LogIn(baseInfo.loginSpecsAndCreds);
        customMethods.clickOn(garage.garageElements.addCarBtn);
    });

    it('Create a car via UI and check the POST method', () => {
        const carDara = {
            brand: 'Audi',
            model: 'R8',
            mileage: 100000,
        }

        cy.intercept('POST', 'https://qauto.forstudy.space/api/cars').as('createCar')

        cy.get(garage.garageElements.carBrandField).select(carDara.brand)
        cy.get(garage.garageElements.carModelField).select(carDara.model)
        cy.get(garage.garageElements.carMilageInput).type(carDara.mileage)
        customMethods.clickOnXpath(garage.garageElements.addBtn)

        cy.wait('@createCar').then((interception) => {
            console.log(interception.response.body);
            expect(interception.response.body.data.brand).to.equal(carDara.brand);
            expect(interception.response.body.data.model).to.equal(carDara.model);
            expect(interception.response.body.data.mileage).to.equal(carDara.mileage);
        })

        customMethods.clickOn(garage.garageElements.editCar)
        customMethods.clickOn(garage.garageElements.removeCar)
        customMethods.clickOn(garage.garageElements.delete)
        customMethods.CheckText(garage.garageElements.emptyGarageMessage, garage.garageElements.emptyGarageMessageText)

    })
})


describe('API tests JSON placeholder', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com/posts'
    it('Get info about posts', () => {
        cy.api('GET', baseURL).as('posts')

        cy.get('@posts').then((response) => {
            expect(response.status).to.eq(200)

            cy.get('@posts').its('body').each((post) => {
                expect(post).to.have.all.keys('userId', 'id', 'title', 'body')
        
        
            })
        })
    })

    it('Get the first post id positive', () => {
        cy.api('GET', `${baseURL}/1`).as('posts')

        cy.get('@posts').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('userId', 1)
            expect(response.body).to.have.property('id', 1)
            cy.log(response.body)
        })
    })


    // this test should fail
    it('Get the first post id negative', () => {
        cy.api('GET', `${baseURL}/1`).as('posts')

        cy.get('@posts').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('userId', 2)
            expect(response.body).to.have.property('id', 2)
            cy.log(response.body)
        })
    })

    it('Get list of posts', () => {
        cy.api('GET', baseURL).as('posts')

        cy.get('@posts').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body.length).to.be.eq(100)
        })
    })
})

describe('API tests: creating, updating and deleting posts', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com/posts'

    //create test 
    beforeEach(() => {
    

        const newPost = {
            userId: 11,
            id: 101,
            title: 'IDK',
            body: 'Whaaaaaat'
        }
        cy.api('POST', baseURL, newPost).as('newPost')
        cy.get('@newPost').then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('userId', 11)
            expect(response.body).to.have.property('id', 101)
            expect(response.body).to.have.property('title', 'IDK')
            expect(response.body).to.have.property('body', 'Whaaaaaat')
        })
    })


    //update test

    it('Update the new post', () => {
        cy.api('PUT', `${baseURL}/24`, { title: 'New Title' }).as('updatedPost')
        cy.get("@updatedPost").then((response) => {
            expect(response.body).to.have.property('title', 'New Title')

    })

    })

    //delete test 
    
    //I decided to unite these 3 tests in one suite, as they can be part of a
    //single test in a form of setup, body and teardown phases

    afterEach(() => {
        cy.api('DELETE', `${baseURL}/24`).as('deletePost')
        cy.get('@deletePost').then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})