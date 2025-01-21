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
