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
console.log(assignGrade);
