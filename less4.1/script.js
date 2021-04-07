let money = Number(prompt("Ваш месячный доход?", 5000));

let income = 'Фриланс';

let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");

let deposit = Boolean((prompt("Есть ли у вас депозит в банке?")));

let expenses1 = prompt("Введите обязательную статью расходов?");

let expenses2 = prompt("Введите обязательную статью расходов?");

let amount1 = Number(prompt("Во сколько это обойдется?", 700));

let amount2 = Number(prompt("Во сколько это обойдется?", 500));

let mission = Number(prompt("Какую сумму вы бы хотели накопить?", 50000));

console.log("Цель заработать " + mission + " рублей");

let showTypeof = function(data){
    console.log('data: ',typeof(data));
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);
showTypeof(addExpenses);
showTypeof(expenses1);
showTypeof(expenses2);
showTypeof(amount1);
showTypeof(amount2);


function getExpensesMonth(){
    return amount1 + amount2
};

console.log(getExpensesMonth());

function getAccumulatedMonth(){
    return money - (amount1 + amount2)
};

console.log(getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth(){
    return mission / accumulatedMonth
};

let budgetDay = money / 30;

console.log('budgetDay: ', budgetDay);

let getStatusIncome = function(){
    if (budgetDay > 1200) {
        return "У вас высокий уровень дохода"
    }
    else if (budgetDay >= 600 && budgetDay <= 1200) {
        return "У вас средний уровень дохода"
    }
    else if (budgetDay < 600 && budgetDay >= 0) {
        return "К сожалению у вас низкий уровень дохода"
    }
    else {
        budgetDay < 0;
        return "Что-то пошло не так"
    }
}

console.log(getStatusIncome());

// console.log(Math.ceil(accumulatedMonth)); 

// console.log(Math.floor(accumulatedMonth));




