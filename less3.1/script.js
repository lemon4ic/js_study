let money = Number(prompt("Ваш месячный доход?"));

console.log(money);

let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");

console.log(addExpenses);

let deposit = Boolean((prompt("Есть ли у вас депозит в банке?")));

console.log(deposit);

let expenses1 = prompt("Введите обязательную статью расходов?");

console.log(expenses1);

let expenses2 = prompt("Введите обязательную статью расходов?");

console.log(expenses2);

let amount1 = Number(prompt("Во сколько это обойдется?"));

console.log(amount1);

let amount2 = Number(prompt("Во сколько это обойдется?"));

console.log(amount2);

let mission = prompt("Какую сумму вы бы хотели накопить?");

console.log("Цель заработать " + mission + " рублей");

let budgetMonth = money - (amount1 + amount2);

console.log(budgetMonth);

let ceil = mission / money;

console.log(Math.ceil(ceil)); 

let floor = mission / budgetMonth;

console.log(Math.floor(floor));

if (budgetMonth > 1200) {
    console.log("У вас высокий уровень дохода");
}
else if (budgetMonth >= 600 && budgetMonth <= 1200) {
    console.log("У вас средний уровень дохода");
}
else if (budgetMonth < 600 && budgetMonth >= 0) {
    console.log("К сожалению у вас низкий уровень дохода");
}
else {
    console.log("Что-то пошло не так");
}