class Garage{
    garageElements = {
        garageTab: "/html/body/app-root/app-global-layout/div/div/div/app-panel-layout/div/div/div/div[1]/nav/a[1]",
        addCarBtn: 'button.btn.btn-primary',
        carBrandField: '#addCarBrand',
        carModelField: '#addCarModel',
        carMilageInput: '#addCarMileage',
        addBtn: '/html/body/ngb-modal-window/div/div/app-add-car-modal/div[3]/button[2]',
        closeButton: 'span[aria-hidden="true"]',
        cancelButton: 'button.btn.btn-secondary',
        editCar: 'button.car_edit.btn.btn-edit',
        removeCar: 'button.btn.btn-outline-danger',
        delete: 'button.btn.btn-danger',
        carCard: 'div.car.jumbotron', 
        emptyGarageMessage: 'p.h3.panel-empty_message',
        emptyGarageMessageText: 'You don’t have any cars in your garage'
    }

    
    brands = ['Audi', 'BMW', 'Ford', 'Porsche', 'Fiat']
    models = {
        'Audi': ['TT', 'R8', 'Q7', 'A6', 'A8'],
        'BMW': ['3', '5', 'X5', 'X5', 'Z3'],
        'Ford': ['Fiesta', 'Focus', 'Fusion', 'Mondeo', 'Sierra'],
        'Porsche': ['911', 'Cayenne', 'Panamera'],
        'Fiat': ['Palio', 'Panda', 'Ducato', 'Punto', 'Scudo']
    }
    getRandomCarData() {
        const brand = this.brands[Math.floor(Math.random() * this.brands.length)];
        const model = this.models[brand][Math.floor(Math.random() * this.models[brand].length)];
        return {
            brand: brand,
            model: model,
            mileage: Math.floor(Math.random() * 100000) + 10000
        }
    }

    getBrandSelector(brand) {
        return `option:contains("${brand}")`
    }

    getModelSelector(model) {
        return `option:contains("${model}")`
    }
}


const garage = new Garage()
export default garage
