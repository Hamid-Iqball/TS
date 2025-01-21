"use strict";
// let userName = "Hamid iqbal here"
// console.log(userName)
const updateAssignment = (assign, propstoUpdate) => {
    return Object.assign(Object.assign({}, assign), propstoUpdate);
};
const assign1 = {
    studentId: 'Hamid Iqbal',
    title: 'Final Project',
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 90 }));
const assignGrade = updateAssignment(assign1, { grade: 95 });
//Required amd Read only
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGrade), { verified: true });
console.log(recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true })));
//3) Record type: It allows to define object types where you specify both the keys and the values.
const hexColorMap = {
    red: 'FF0000',
    green: "00FF00",
    blue: "0000FF"
};
const finalGrade = {
    Sara: 'B',
    Kelly: 'U'
};
//It ensures that only defined studensts can have grades
const gradeData = {
    Sara: {
        assign1: 85, assign2: 93
    },
    Kelly: { assign1: 45, assign2: 65 }
};
const score = {
    studentId: "K123",
    grade: 34
};
const preview = {
    studentId: 'jsfdbcu',
    title: 'Hamid',
};
//ReturnType
// type newAssign = {title:string ,  points:number}
const createNewAssign = (title, points) => {
    return { title, points };
};
//This is very usefull and specially with the functions tht you did not create yourself, for example a library
const tsAssign = createNewAssign("Machine learning", 23);
console.log(tsAssign);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
//Awaited - helps us with the ReturnType of a promise
