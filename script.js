'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?");
	time = prompt("Введите дату в формате YYYY-MM-DD");

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?");
	}
}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце");
		let b = prompt("Во сколько обойдется?");
		
		if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
	
			appData.expenses[a] = b;
		}	else {
			console.log("Вы ввели неправильные значения");
			i--;
		}
	}	
}
chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Ежеденевный бюджет равен: " + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
	if(appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка ");
	}  else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка"); 
	} else {
		console.log("Произошла ошибка");
	}
}
detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накопленйи?"),
			percent = +prompt("Под какой процент?");
		
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц составляет " + appData.monthIncome);
	}
}
checkSavings();
 

function chooseOptExpenses() {
	for(let i = 1; i < 4; i++) {
		let questionOptExpenses = prompt("Назовите свои необязательные расходы");
		appData.optionalExpenses[i] = questionOptExpenses;
		console.log(appData.optionalExpenses);
	}
}
chooseOptExpenses();