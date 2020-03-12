'use strict';

// let money = prompt("Ваш бюджет на месяц?");
// let time = prompt("Введите дату в формате YYYY-MM-DD");

// let appData = {
// 	budget: money,
// 	timeData: time,
// 	expenses: {},
// 	optionalExpenses: '',
// 	income: [],
// 	savings: false
// }



// let a1 = prompt("Введите обязательную статью расходов в этом месяце");
// let	a2 = prompt("Во сколько обойдется?");
// let	a3 = prompt("Введите обязательную статью расходов в этом месяце");
// let	a4 = prompt("Во сколько обойдется?");

// appData.expenses[a1] = a2;
// appData.expenses[a4] = a3;

// alert(appData.budget/30);


let num = 50;

switch (num) {
	case num > 51:
		console.log('false');
		break;
	case num < 100:
		console.log('Too much');
		break;
	case num < 60:
		console.log('Not yet');
		break;
	case 50:
		console.log("That's close");
		break;
}

while (num < 55) {
	console.log(num);
	num++;
}