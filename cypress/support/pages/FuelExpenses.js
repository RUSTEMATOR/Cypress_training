
class fuelExpenses {
    expensesElements = {
        addFuelExpenseBtnGarage: 'button.car_add-expense.btn.btn-success', 
        carsDeopdown: '#addExpenseCar', 
        reportDate: '#addExpenseDate',
        expensesMilage: '#addExpenseMileage', 
        expensesTotalCost: '#addExpenseTotalCost',
        expensesLiters: '#addExpenseLiters',
        expensesAddBtn: '/html/body/ngb-modal-window/div/div/app-add-expense-modal/div[3]/button[2]',
        expensesAddBtnText: 'Add',
        expensesTab: '/html/body/app-root/app-global-layout/div/div/div/app-panel-layout/div/div/div/div[1]/nav/a[2]',
        addExpensesBtn: 'button.btn.btn-primary',
        reportExpenses: "/html/body/app-root/app-global-layout/div/div/div/app-panel-layout/div/div/div/div[2]/div/app-fuel-expenses/div/div[2]/div/div[1]/table/tbody", 
        deleteReport: 'span.icon.icon-delete',
        delete: 'button.btn.btn-danger'
    }


    getRandomValues(){
        const totalCost = Math.floor(Math.random() * 10) + 100
        const mileage = Math.floor(Math.random() * 10)
        const liters = Math.floor(Math.random() * 10) + 1
        return {
            totalCost: totalCost,
            mileage: mileage,
            liters: liters
        }
    }
}

const expenses = new fuelExpenses()
export default expenses