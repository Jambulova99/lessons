"use strict"

//OOП - понятие пример
//как понять что есть строка

let str  = "текст";
let strObj = new String(str);
//console.log(typeof(str));
//console.log(typeof(strObj));



let array = [1,2,3];
//console.log(array);



let car = {
    kuzov: "Железо",
    kolesa: "4 колеса",
    modal: function(){
        console.log("Hello");
    }
};

//let mb = {
  // marka: "Мерс",
  //  год: "2021"
//};

let mb = Object.create(car);


//mb.__proto__ = car;
//Object.setPrototypeOf(mb, car);

console.log(mb.modal);
mb.modal();




//Динамическая типитизация
//let number = +"1";
//console.log(number + 5);
//console.log(parseInt (number + 5);
//console.log(typeof(1));

let res_input = prompt ("Введите свой возраст", "");

console.log(typeof(res_input));

console.log(res_input);









































