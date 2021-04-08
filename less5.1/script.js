let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n) ;
  };
  
  let money;
  let income = 'Фриланс';
  let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', еда, квартплата);
  console.log(addExpenses.toLowerCase().split(','));
  let deposit = confirm('Если ли у вас депозит в банке?');
  let mission = 100000;
  let period = 3;
  
  let start = function () {
    do {
      money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));
  };
  
  start();
  
  let showTypeOf = function(data) {
    console.log(data, typeof(data));
  };
  showTypeOf(money);
  showTypeOf(income);
  showTypeOf(deposit);
  
  let expenses = [];
  
  
  let getEspensesMonth = function () {
    let sum = 0;
  
    for (let i = 0; i < 2; i++){
        
      expenses[i] = prompt('Введите обязательную статью расходов?');
      let expense = prompt('Во сколько эта статья обойдется?');
      while (!isNumber(expense)) {
        expense = prompt('Это не число');
      }
      sum += +expense;        
    }
    return sum;
  };
  
  let axpensesAmount = getEspensesMonth();
  
  console.log('Сумма расходов на месяц:', axpensesAmount);
  
  
  
  let getAccumulatedMonth = function () {
    return money - axpensesAmount;
  };
  getAccumulatedMonth();
  console.log('Накопления за месяц составили: ', getAccumulatedMonth());
  
  let accumulatedMonth = getAccumulatedMonth();
  
  
  let getTargetMonth = function () {
    let division = 0;
  
    division = mission / accumulatedMonth;
  
    if (division > 0) {
      console.log('Цель будет достигнута');
    } else {
      console.log('цель не будет достигнута');
    }
    
   return division;
  };
  console.log('Сколько месяцев понадобиться:', getTargetMonth());
  
  
  let budgetDay = accumulatedMonth / 30;
  console.log(`Бюджет на день : ${Math.floor(budgetDay)}`, Math.floor(budgetDay));
  
  let getStatusIncome = function () {
      if (budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if ( 600 <= budgetDay <= 1200) {
      return ('У вас средний уровень дохода');
    } else if ( 0 <= budgetDay <= 600) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
      budgetDay < 0;
      return('Что то пошло не так');
    }
  };
  getStatusIncome();
  console.log(getStatusIncome());