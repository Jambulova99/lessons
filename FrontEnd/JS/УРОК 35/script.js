"use strict";

let a = 10;
    b = a; 


b = b + 15;    

//console.log(b);
//console.log(a);

const arr1 = {
        a: 1,
        b: 2,
};


//console.log(arr1);
const newArr = arr1;  //ссылка на сам объект
//console.log(newArr);

newArr.a = 10;

//console.log(newArr);
//console.log(arr1);




function copy_arr(myObj) {
    const newObj = {};
    let key;
    for(key in myObj){
        newObj[key] = myObj[key];
    }

    return newObj;
}

const oldObj = {
    name: "Elmira",
    surname: "Jambulova",
    hobby: {
        1: "reading",
        2: "swimming"
    }
};

//console.log(oldObj);
const newObj = copy_arr(oldObj);

newObj.name = "Alex";
//console.log(newObj);
//console.log(oldObj);

newObj.hobby[1] = "Чтение";

//console.log(newObj);
//console.log(oldObj);


const newAssign = Object.assign({}, oldObj);

newAssign.name = "Panda";
//console.log(newAssign);
//console.log(oldObj);



//Massiv Slice
const arr = ["яблоки", "груши", "виноград"];
//Индекс        0         1          2
const arr2 = arr.slice();

//arr2[2] = "вишня";
//console.log(arr);
//console.log(arr2);


//
const technicks = ["phone", "poerbank", "laptop"],
       jenres   = ["pop", "piano", "jazz"],
       combo    = [...technicks, ...jenres,"swim", "sing"];

//console.log(combo);

const old__per = ["phone", "poerbank", "laptop"];
const new__per = [...old__per];

new__per[1] = "shirt";


    //console.log(old__per);
    //console.log(new__per);


    const arr3 = {
        a: 1,
        b: 2,
};

const arr4 = {...arr3};

arr4.b = 10;

console.log(old__per);
    console.log(new__per);










