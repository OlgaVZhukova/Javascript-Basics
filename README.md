# Javascript-Basics

## ДЗ1. Урок 2

### Задание 1.

Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) \* градусы Цельсия + 32

Уточнение: пользователь всегда вводит корректное число.

### Задание 2.

Необходимо создать переменную name, записать в эту переменную свое имя.
Необходимо также создать переменную admin и присвоить этой переменной значение
из переменной name.
Вывести значение переменной admin в консоль.

## ДЗ2. Урок 4

### Задание 1.

Создать переменные positive и negative, в которые пользователь вводит с
клавиатуры значения. Нужно попросить пользователя ввести положительное число в
переменную positive и отрицательное в переменную negative.
Перед тем, как положить значения в данные переменные необходимо их превратить
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если
пользователь действительно ввел корректные значения, которые мы просили его
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести
в консоль "Одно или более значений некорректно.".

### Задание 2.

Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.

    let test = confirm("У вас много денег?");
    if (test === true) {
        console.log("Скоро будем у вас ;)");
    } else {
        console.log("До свидания.");
    }

### Задание 3.

Необходимо создать переменную dayNumber, в которую пользователь должен ввести
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо
определить, в какую декаду месяца попадает это число и вывести сообщение в
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая
число 32.

### Задание 4\*.

Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.

## ДЗ3. Урок 6

### Задание 1.

Создайте функцию которая принимает число, возводит переданное число в куб и
возвращает полученное значение.
Необходимо продемонстрировать вызов данной функции, с выводом результата,
который получаем от функции, в консоль.

### Задание 2.

Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию
(нужно будет ее создать), которая будет принимать введенное пользователем
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль
сообщение "Размер заработной платы за вычетом налогов равен N."

### Задание 3.

Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения,
три числа. Проверять их не нужно.

### Задание 4.

Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):

1. Сложение
2. Разность
3. Умножение
4. Деление

Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.

## ДЗ4. Урок 8

### Задание 1.

Необходимо с помощью цикла for вывести следующие 11 строк в консоль:  
0 – это ноль  
1 – нечетное число  
2 – четное число  
3 – нечетное число  
…  
10 – четное число

### Задание 2.

Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали:
[1, 2, 100, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];

### Задание 3.

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

### Задание 4\*.

_Необязательное задание_.  
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x  
xx  
xxx  
xxxx  
xxxxx

## ДЗ5. Урок 10

### Задание 1.

Дан объект numbers.
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.

    const numbers = {
    key1: 12,
    key2: 2,
    key3: 4,
    key4: 1,
    key5: -244,
    key6: 0,
    key7: 7,
    };

### Задание 2.

Необходимо из объекта post, вывести значения, к которым приписан комментарий,
в консоль.

    const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2, // вывести это число
        },
        },
        {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
            likes: 3,
            dislikes: 1,
        },
        },
    ],
    };

### Задание 3.

Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.

    const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
    ];

### Задание 4.

1.  Необходимо вывести в консоль массив продуктов в котором есть хоть одна
    фотография, используя метод filter. Исходные данные - массив products.
2.  Необходимо отсортировать массив products используя метод sort по цене,
    начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
    отсортированный массив в консоль.
    Если сложно работать с методами массива, то можно сделать и обычным циклом.

        const products = [
        {
            id: 3,
            price: 127,
            photos: ["1.jpg", "2.jpg"],
        },
        {
            id: 5,
            price: 499,
            photos: [],
        },
        {
            id: 10,
            price: 26,
            photos: ["3.jpg"],
        },
        {
            id: 8,
            price: 78,
        },
        ];

### Задание 5.

Необходимо создать объект, в котором будут объединены два массива en и ru
так, чтобы в объекте ключами выступали значения из массива en, а значениями
объекта являлись значения из массива ru.

    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
    ];
