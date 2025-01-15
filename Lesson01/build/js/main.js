"use strict";
// let userName = "Hamid iqbal here"
// console.log(userName)
// let a: number = 12;
// let b:string ="4"
// let c:number =5;
// // JavasScript used dyanimc types and therefore it coersed the data becasue it usedd the dynamic type instead of static type.
// console.log(a/b)
//Lesson 02
/*
let myName:string = "Hamid";
let meaningOfLife:number;
let isLoading:boolean;
let album:number | string;// Union type. this can me more than one data type.

myName="Iqbal";
meaningOfLife=42;
isLoading=true;
album=1982

const sum =(a:number,b:number)=>{
    return a+b;
}
*/
//#########Lesson 03: Objects, Array ############
let stringArr = ['one', 'two', 'three'];
let cities = ['psh', 'isb', 'lhe', 1923];
let mixedDATA = ['evh', 1923, true];
cities = mixedDATA; //This is not acceptible in TS
mixedDATA = cities; //This is acceptiable in TS.
stringArr.push("2");
let test = [];
let bands = [];
//Tupple : If want to be strict about the lenght of an array or the order of type of data.
let myTupple = ["dav", 3, false]; // This is tupple
let mixed = ['dav', 4, true]; // This is union
//myTupple = mixed  one is tupple and other one is union , The tupple is not assignable to union because in union there are no restriction on order.
// #########Objects #########
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = cities;
const example = {
    prop1: "Dave",
    prop2: true,
};
example.prop1 = "jhon";
// Interface can be extending like in classes and it is also used for defining the shape of an object type allow defining complex types using unions and intersection.
let evh = {
    name: "Hamid",
    active: false,
    album: ["1980", 2024, 454]
};
let jp = {
    name: "iqbal",
    active: true,
    album: ["1980", 4, "3"]
};
jp = evh; // No issue with this because both objects have the same type of key value pairs.
console.log(evh);
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello Mr ${guitarist.name.toUpperCase()}`;
    }
    return `Hello`;
};
console.log(greetGuitarist(jp));
// ########## Enums ########
