"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const array = [];
for (let index = 0; index < 5; index++) {
    array[index] = Math.round(Math.random() * 10);
}

console.log(array);

let sumArray = 0;
for (let index = 0; index < array.length; index++) {
    sumArray += array[index];
}

console.log(`Сумма элементов массива: ${sumArray}`);

let minNumArray = array[0];
for (let index = 0; index < array.length; index++) {
    if (array[index] < minNumArray) minNumArray = array[index];
}

console.log(`Минимальное значение в массиве: ${minNumArray}`);

let count = 0;
let indexesOfThrees = [];

for (let index = 0; index < array.length; index++) {
    if (array[index] === 3) {
        count++;
        indexesOfThrees.push(index);
    }
}

if (count === 0) {
    console.log("Троек в сгенерированном массиве нет");
} else {
    console.log("Новый массив:");
    console.log(indexesOfThrees);
}