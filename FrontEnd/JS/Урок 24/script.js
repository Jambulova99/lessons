"use strict";
//использование строгого режима для обраотки данных

let number = 1;
//Данные, которые указываются без скобок = числа
let text = "Elmira";
//Данные, которые заключены в скобки называются строки 'string'

console.log(10*"Elmira"); //NaN - неправильное использование синтаксиса
console.log(text + 1); //text + number = gluing/склеивание
                       // + это операция склеивания(gluing) и сложения(addition)


//true = истина
//false = ложь
let number2 = true;
console.log(number2);

console.log(unknown); // ошибка - is not defined = не определено

//making objects start with {} curly braces
// 1st method получения данных из объекта
let obj = {
    name: "Elmira",
    // name - название первого объекта
    // : - разделение между объектом и его значением
    // "" - внутри кавычек указывается значение объекта
    // конец строки заканчивается на ,
    age: 23,
    location: "Germany"
    // в конце строки, пере закрывающей фигурной скобки не указывается запятая
};
// console.log - это команда для вывода данных на экран
        // obj - это переменная
        // . - это операция обращения  к объекту 
        // name - это название объекта
console.log("Name:" + obj.name + "Age:" + obj.age);

// 2nd method получения данных из объекта
        // obj - это переменная
        // [] - это указание позиции и уточнение объекта
        // "" - кавычки нужны для определения объекта
        // name - это название объекта
console.log(obj["name"]);


// Массив создается с помощью квадратных скобок []
// В массивах используются сразу значения
// Для получения значения необходимо использовать порядковый номер
//            0         1        2
let arr = ["яблоко", "Iphone", "pen"];
console.log(arr.яблоко); //undefined - не определено
console.log(arr[0]); // яблоко



