'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: '',
	income: [],
	savings: false
};

// Выполнение цикла с помощью for

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце");
	let b = prompt("Во сколько обойдется?");
	
	if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

		appData.expenses[a] = b;
	}	else {
		let a = prompt("Введите обязательную статью расходов в этом месяце");
		let b = prompt("Во сколько обойдется?");
	}
}

// Выполнение цикла с помощью while

// let i = 0;

//  while (i < 2) {
// 	i++
// 	let a = prompt("Введите обязательную статью расходов в этом месяце");
// 	let b = prompt("Во сколько обойдется?");
// 	if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

// 		appData.expenses[a] = b;
//  }

// Выполнение когда с помощью do

// let i = 0;

// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце");
// 	let b = prompt("Во сколько обойдется?");
// 	i++
// 	if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

// 				appData.expenses[a] = b;
// 		 }
// }
// while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежеденевный бюджет равен: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка ");
}  else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка"); 
} else {
	console.log("Произошла ошибка");
}