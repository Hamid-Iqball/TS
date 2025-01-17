"use strict";
// let userName = "Hamid iqbal here"
// console.log(userName)
//This is the obect that we are making from the above interface
const todaysTransiction = {
    Pizza: -10,
    Books: -4,
    Job: 16
};
console.log(todaysTransiction.Pizza);
console.log(todaysTransiction['Pizza']);
let prop = 'Pizza';
console.log(todaysTransiction[prop]); // This dynamically accessing the property, TS is complaining about this and this often happens in loops.
const todaysNet = (transictions) => {
    let total = 0;
    for (const transition in transictions) {
        total += transictions[transition];
    }
    return total;
};
console.log(todaysNet(todaysTransiction));
