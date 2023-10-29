"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const firstNumber = Number(prompt("Введите первое число:"));
const secondNumber = Number(prompt("Введите второе число:"));
const thirdNumber = Number(prompt("Введите третье число:"));

function findMaxValue(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

alert(
    `Максимальное значение среди чисел ${firstNumber}, ${secondNumber}, ${thirdNumber} 
    равно ${findMaxValue(firstNumber, secondNumber, thirdNumber)}.`
);