//alert("Text1");
//console.log("Text2");


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




// Базовые функции / Взаимодействие с пользователем
//console.log("Сообщение"); // - Данная команда нужна для того чтобы вывести сообщение в браузере

//alert("Привет гость");  //Модальное окно - системное - дизайн изменть нельзя


//var result = prompt("2+2?", "");

//var msg;
//if(result == "4") {
   //msg = "Correct";
//} else {
        //msg = "Incorrect";
//}
//alert(msg);

//result = result + 2;
//alert("You are" + result + "age!")




//var result = confirm("Результат сложения 2+2 будет равен 4?");
//alert(result);



//26 Урок
//Важно знать: Операции всегда будут возвращать одно и из следующих значений 
//TRUE - истина
//FALSE - ложь

//alert(2 == 4); // == - опереция сравнения  
                // = - операция присваивания

//alert(8 > 4); // > - операция сравнения на большее
//alert(8 < 4); // < - операция сравнения на меньшее

//alert(4 < 4); // операция на меньшее

//alert(4<=4); // меньше равно
//alert(4>=5); // больше равно

//alert(12 != 5); // не равно

//alert("2" == 2); // Когда происходят операция сравнения, значения конвертируются в цифры 
                // "" в кавычках только ТЕКСТ
                // без кавычек ЧИСЛА 

                // == сравнение значений (конвертируют текста в цифры)
                // === сравнение типов данных + значений


//Условные операторы
//if - если
//else - в противном случае

 //если 2 равно 2 то, выполни след условие: выведи на экран сообщение о том, что "ответ правильный!", 
 //в противном случае, выведи на экран "Ответ не правильный!"

 //если 2 равно 2 (2==2)
 //if (2==2)
 //то {}
 //Выведи на экран сообщение:
 //alert("Ответ правильный!")
// В проиивном случае
// else {}
//Выведи на экран 
//alert("Ответ не правильный!")

//Общее решение
if(2==2){
        alert("Ответ правильный!");
} else {
        alert("Ответ не правильный!");
}




























