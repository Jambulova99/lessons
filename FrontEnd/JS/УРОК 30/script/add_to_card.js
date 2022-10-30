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














