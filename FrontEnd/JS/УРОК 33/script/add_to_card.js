//ЧТОБЫ ПОЛУЧИТЬ ЗАГОЛОВОК
//let p_title = document.getElementsByClassName("p_title");
//console.log(p_title[0].innerText);
//console.log(p_title[1].innerText);
//console.log(p_title[2].innerText);
//console.log(p_title[3].innerText);
//console.log(p_title[4].innerText);
//console.log(p_title[5].innerText);
//console.log(p_title[6].innerText);
//console.log(p_title[7].innerText);
//let p_title = document.getElementsById("p_title");


//var arr = ["Яблоко", "Апельсин", "Груша"];

//arr.forEach(function(item, i, arr) {
//    alert( i +": " + item + " (массив:" + arr + ")" );
//});
 


//FILTER
//var arr = [1, -1, 2, -2, 3];

//var positiveArr = arr.filter(function(number) {
//  return number > 0;
//});

//alert( positiveArr ); // 1,2,3



//СЧИТЫВАНИЕ ДЛИНЫ length
//var names = ['HTML', 'CSS', 'JavaScript'];

//var nameLengths = names.map(function(name) {
//  return name.length;
//});

// получили массив с длинами
//alert( nameLengths ); // 4,3,10



//every/some
//var arr = [1, -1, 2, -2, 3];

//function isPositive(number) {
//  return number > 0;
//}

//alert( arr.every(isPositive) ); // false, не все положительные
//alert( arr.some(isPositive) ); // true, есть хоть одно положительное



//СКЛАДЫВАНИЕ ЗНАЧЕНИЙ В МАССИВЕ
//var arr = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
//var result = arr.reduce(function(sum, current) {
//  return sum + current;
//}, 0);

//alert( result ); // 15


//let p_title = document.querySelectorAll(".body_product > .p_title");

//console.log(p_title);
//console.log(p_title[0].innerText);
//console.log(p_title[1].innerText);
//console.log(p_title[2].innerText);
//console.log(p_title[3].innerText);
//console.log(p_title[4].innerText);

//for (let text of p_title) {
  //  console.log(text.innerText);
//}


var elements = document.getElementsByClassName("add_card");

var myFunction = function() {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".p_title");
    alert(attribute[0].innerText);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}


//Что такое function?

//function name_fun(number){
  //let num = number;

  //console.log(num);
//}

//let num = 10;
//let num2 = 15;
//let num3 = 25;

//console.log(num);
//console.log(num2);
//console.log(num3);

//name_fun(200);
//name_fun(300);

//let per = 10;
//console.log(per);


let num = 200;

  function name_fun(num){
    let per_const = 120;
    let result;

    result = per_const + num;
    console.log(result);
  }
name_fun();

//console.log(num);



//Методы и Cвойства строк

let text = "             Привет! как у тебя дела?";
console.log(text);
console.log(text.trim());


//Методы и Cвойства чисел
let number = 120;
number.toString();


let x = 9; //число
let a = "10"; //текст
let result;
result = x + +a; //конвертация текста в число

console.log(result);


//Добавление товара в корзину
let class_name = document.getElementsByClassName("add_card");

  console.log(class_name);

let myFunction = function(evt) {
    evt.preventDafault();
    //alert("Product");

    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
    let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price span");
    let image = this.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");

    let creat_li = document.createElement('li');
    console.log; 
    console.log;
    console.log;


    creat_li.innerHTML = '<div class="bag__img">\
                                    <a href="?search=#">\
                                        <img src="'+image[0].src+'" alt="">\
                                    </a>\
                                </div>\
                                <div? class="bag__info">\
                                    <p class="info__title"><a href="?search=#">'+title[0].innerText+'</a></p>\
                                <div class="info__price">\
                                    <span>'+price[0].innerText+'</span>\
                                    <del>'+price[0].innerText+'</del>\
                                </div>\
                                <div class="trash">\
                                    <a href="?search=#"><i class="far fa-trash-alt"></i></a>\
                                    </div>\
                        </div>';

let block_card = document.querySelector('.bag.shopcard__dropdown ul');
block_card.appendChild(creat_li);

alert("Товары добавлены в корзину!");

};




for (var i = 0; i < class_name.length; i++) {
  class_name[i].addEventListener('click', myFunction, false);
  //addEventListener - добавляем событие клика
  //('click', myFunction, false);
  // тип события
  //что должно выполнится
  //обратботчик
}







