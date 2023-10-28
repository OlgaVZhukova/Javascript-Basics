"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const salaryNet = (money) => {
    return money * 0.87;
};

const ammountSalaryGross = Number(
    prompt("Введите сумму заработной платы gross:")
);

if (Number.isNaN(ammountSalaryGross) || ammountSalaryGross < 0) {
    console.log("Значение задано неверно");
} else {
    console.log(
        `Размер заработной платы за вычетом налогов равен ${salaryNet(
      ammountSalaryGross
    )}`
    );
}