// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year?.setAttribute("datetime",thisYear)
// year?.textContent = thisYear

//1st Variation
// let year:HTMLElement | null 
// year= document.getElementById('year')

// let thisYear:string 
// thisYear= new Date().getFullYear().toString()

// if(year){
//     year.setAttribute("datetime",thisYear)
//     year.textContent = thisYear
// }

//Type Assertion is what TS allows you to manually specify the type of a variable when typescript cannnot infer it correctly or when you want to override its inferred type. It acts as a way to tell Ts "Trust  me, i know what i am doing. This value is of this specific type"
//final Variation
const year= document.getElementById('year') as HTMLSpanElement

const thisYear:string = new Date().getFullYear().toString()

year.setAttribute("datetime",thisYear)
year.textContent = thisYear


// #####################################
//               Classes
//######################################

