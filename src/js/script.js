// 'use strict';

// let alo = 3.14;
// console.log(alo);

//alert("Hello World!");            //Всплывающее окно

// let answer = confirm("Are you her?");        //Всплывающее окно с  выбором - Ок или cansel
// console.log(answer);          // Вывод результата в консоль

// let answer = prompt("You now 18?", "Yes");       //       Всплывающее окно с формой для заполненияф и изначальным placeholder = true
// console.log(typeof(answer));         // Вывод результата в консоль

// console.log("Lol-Kek" + " " + 5);         // Сложение строки и числа - получается они просто складываются в одну строку - подряд друг за другом становятся

// let incr = 10,       //Задаем переменные
//     descr = 20;      //Задаем переменные

// incr++;      //Добавляем едиинцу к переменной incr
// descr--;         //Добавляем едиинцу к переменной descr

// console.log(incr);        //Выводим результат в консоль и поулчается 11
// console.log(descr);       //Выводим результат в консоль и получается 19

// console.log(incr++);      //Выводим результат в консоль другим способом - сначало выводится изначальное значение - и все. =) Единица добавляется только после вывода
// console.log(descr--);        //Тоже самое, только единица вычитается
// console.log(incr);       //Выводим еще раз, тоесть после прибавления, и получается 11!!!

// console.log(5%1);        //Выводим в консоль ОСТАТОК деления 5 на 1 тоесть это равно 0, если бы 5%2, то вывод был бы 1

// console.log("2" == 2);       //ПИШЕМ 2 знака РАВНО!! Не три - ведь три знака - это уже сравнение объектов, нужно ставить 2!!!

// let isChecked = false,
//     isClose = true;
   
// console.log(isChecked || !isClose); // Все собственно понятно, && - И, || - ИЛИ

let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: "",
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appDatabudget / 30);
close();







