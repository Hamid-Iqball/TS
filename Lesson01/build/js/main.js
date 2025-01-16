"use strict";
// let userName = "Hamid iqbal here"
// console.log(userName)
//Convert to more or less specific 
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific
let d = 'world';
let e = 'world';
let addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b + c;
    }
    //if c==='concat" then string will returned
    return "" + a + b;
};
const myVlal = addOrConcat(2, 2, 'concat');
//Be careful TS sees no problem - but a string is returned so this is type assertions.
const nextVal = addOrConcat(2, 2, 'concat');
//OVERRULING TS
// 10 as string
10;
// Excalmation mark is referd to a non null assertion
//The DOM 
const img = document.querySelector('img');
const myimg = document.getElementById('img');
const nextImage = document.getElementById('img');
img.src;
myimg.src;
