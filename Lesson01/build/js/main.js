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
        return a + b;
    }
    return "" + a + b;
};
const myVlal = addOrConcat(2, 2, 'concat');
//Be careful TS sees no problem - but a string is returned
const nextVal = addOrConcat(2, 2, 'concat');
