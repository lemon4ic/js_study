'use strict';
let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    incomeTitle = document.querySelector('income-title'),
    expensesTitile = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodAmount = document.querySelector('.period-amount'),
    periodSelect = document.querySelector('.period-select'),
    additionaExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount');

    let range = periodAmount.textContent;
    



let isNumber = function (num){
    return !isNaN(parseFloat(num)) && isFinite(num);
};

let isString = function(str, query) {
    while (!isNaN(str || str.trim() === '' || str === null) ) {
        str = prompt('Данное значение не яляется допустимым! Введите другое значение! \n' + query);
    }
    return str;
};


let appData = {
    budget: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function() {
        
        if (salaryAmount.value === ''){
            alert('Ошибка, поле "Месячный доход" должно быть заполненно!');
            return;
        }
        appData.budget = salaryAmount.value;
        
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getIncome();
        appData.getBudget();

        appData.showResuls();

        // appData.getInfoDeposit();

        

    },

    showResuls: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();

        periodSelect.addEventListener('input', function () {
            range = periodSelect.value;
        });
    },

    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },

    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    },

    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        })
    },


    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
                console.log(appData);
            }
        });
    },

    getIncome: function() {
        incomeItems.forEach(function(item) {
            let incomeTitle = item.querySelector('.income-title').value;
            let incomeAmount = item.querySelector('.income-amount').value;

            if (incomeTitle !== '' && incomeAmount !== '') {
                appData.income[incomeTitle] = incomeAmount;
            }
        });

        for (let item in appData.income) {
            appData.additionalIncome += +appData.income[item];
        }
    },

    getAddExpenses(){
        let addExpenses = additionaExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },

    getExpensesMonth: function() {
        let sum = 0;

        for (const item in appData.expenses) {
            sum += appData.expenses[item];
        }

        appData.expensesMonth = sum;
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);

        appData.budgetMonth = appData.budgetMonth;
        appData.budgetDay = appData.budgetDay;
    },
    getTargetMonth: function() {
        return targetAmount.value / appData.budgetMonth;
    },
    getStatusIncome: function() {
        if ( appData.budgetDay > 1200 ) {
            console.log('У Вас высокий уровень дохода');
        } else if ( appData.budgetDay > 600 && appData.budgetDay <= 1200 ) {
            console.log('У Вас средний уровень дохода');
        } else if ( appData.budgetDay > 0 && appData.budgetDay <= 600 ) {
            console.log('К сожалению, у вас уровень дохода ниже среднего');
        } else {
            console.log('Что то пошло не так');
        }
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какая ставка в процентах у Вашего депозита?', '10');

            while (!isNumber(appData.percentDeposit) || appData.percentDeposit < 0) {
                appData.percentDeposit = prompt('Какая ставка в процентах у Вашего депозита?', '10');
            }

            appData.moneyDeposit = prompt('Сколько денег у Вас на депозите?', '5000');

            while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit < 0) {
                appData.moneyDeposit = prompt('Сколько денег у Вас на депозите?', '5000');
            }
        }
    },
    calcPeriod: function() {
        return appData.budgetMonth * periodSelect.value;
    },
};

function startBudget() {
    start.addEventListener('click', function (event) {
    if (salaryAmount.value === '') {
      event.preventDefault();
      return;
    }
    appData.start();
    start.disabled = "true";
  });
}
startBudget();

start.addEventListener('click', appData.start);
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);

periodSelect.addEventListener('input', function () {
    periodAmount.textContent = periodSelect.value;
        incomePeriodValue.value = appData.calcPeriod();
    });


console.log('expensesMonth: ', appData.expensesMonth);
appData.getTargetMonth();
appData.getStatusIncome();




for (let item in appData.addExpenses) {
    let newString = '';

    for (let i = 0; i < appData.addExpenses[item].length; i++) {
        if (i === 0) {
            newString += appData.addExpenses[item][i].toUpperCase();
        } else {
            newString += appData.addExpenses[item][i];
        }
    }

    appData.addExpenses[item] = newString;
}



// console.log(appData.addExpenses.join(', '));