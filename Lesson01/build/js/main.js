"use strict";
// let userName = "Hamid iqbal here"
// console.log(userName)
//Literal Types
let myName;
let userName;
//Type literals and Aliases can possibly make our cide DRY(don't repeat yourself)
//######################################
//             Functions
//######################################
const add = (a, b) => {
    return a + b;
};
//Any function that does not have an explicit return is void which essentialy means there is no return at all. It indicate that the purpose of this function is to perform side effect, e.g logging to the console or updating a variable, rather than returning data.
const logMsg = (message) => {
    console.log(message);
};
console.log(logMsg("heyeeee"));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { (a:number, b:number):number } /Iterface is also an option. but type Alias suits it.
console.log(subtract(3, 1));
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(2, 4));
//Optional parameters: optional parameter should be the last in the list 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//Default Parameter: we can give any param
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3));
logMsg(sumAll(1, 2));
logMsg(sumAll(undefined, 4)); // InOrder to skip the first number
//Default value will not work if we work with a function signature.
//Reset parameters: The reset operator should comes at the end as well.
const total = (a, ...nums) => {
    return a + nums.reduce((prev, cur) => (prev + cur));
};
logMsg(total(2, 1, 2, 3, 4, 4));
