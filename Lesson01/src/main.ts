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

/*
let stringArr = ['one','two','three']
let cities = ['psh','isb','lhe', 1923]
let mixedDATA=['evh', 1923, true]

cities =mixedDATA; //This is not acceptible in TS
mixedDATA=cities //This is acceptiable in TS.

stringArr.push("2")

let test =[];
let bands:string[]=[]

//Tupple : If want to be strict about the lenght of an array or the order of type of data.
let myTupple:[string,number,boolean] = ["dav",3,false] // This is tupple
let mixed = ['dav',4,true] // This is union
//myTupple = mixed  one is tupple and other one is union , The tupple is not assignable to union because in union there are no restriction on order.

// #########Objects #########
let myObj:object
myObj =[]
console.log(typeof myObj)

myObj = cities

const example = {
    prop1:"Dave",
    prop2:true,
}

example.prop1 = "jhon"


//This is convenient because we define types in advance for our object.
interface Guitarist {
    name?:string,
    active:boolean,  // Now this is optional.
    album:(string | number)[]
}

// Interface can be extending like in classes and it is also used for defining the shape of an object type allow defining complex types using unions and intersection.
let evh:Guitarist = {
    name:"Hamid",
    active:false,
    album:["1980", 2024,454]

}
let jp:Guitarist = {
    name:"iqbal",
    active:true,
    album:["1980",4,"3"]

}
jp = evh // No issue with this because both objects have the same type of key value pairs.
console.log(evh)

const greetGuitarist = (guitarist:Guitarist)=>{

    if(guitarist.name){
        return `Hello Mr ${guitarist.name.toUpperCase()}`
    }
    return `Hello`

}

console.log(greetGuitarist(jp))



// ########## Enums ########
//Unlike most Typescript features, Enums are not a type-level addition to JavaScript but something added yo the language and runtime.

enum Grade {
    U=1,
    D,
    C,
    B,
    A,
}

console.log(Grade.A)




//######################################
//       Aliases and Type Literals
//######################################

//Type Aliases: Type Aliases allow us to give name to any type, whether it is built-in, a user-defined type, or a complex combination of types. once defined the Alias can be used like any other type throughout your code, making it easier to read,write and maiantain.

type stringOrNumber = string |  number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?:string,
    active:boolean,  // Now this is optional.
    album:stringOrNumberArray
}

type userId = stringOrNumber  // This is how we use one type Alias as type for another TypeAliace.We can not do this with interface it can only be done with type.

//Literal Types
let myName:"Hamid"
let userName: "Hamid"|"iQBAL"|"AZHAR"

//Type literals and Aliases can possibly make our cide DRY(don't repeat yourself)


//######################################
//             Functions
//######################################

const add = (a:number, b:number):number =>{
    return a+b
}

//Any function that does not have an explicit return is void which essentialy means there is no return at all. It indicate that the purpose of this function is to perform side effect, e.g logging to the console or updating a variable, rather than returning data.
const logMsg = (message:any): void=>{
    console.log(message)
}

console.log(logMsg("heyeeee"))

let subtract = function (c:number,d:number):number{
return c-d
}

//Type Aliase  
type mathFunction = (a:number, b:number) => number
// interface mathFunction { (a:number, b:number):number } /Iterface is also an option. but type Alias suits it.
console.log(subtract(3,1))


let multiply:mathFunction = function (c,d){
    return c*d
}

console.log(multiply(2,4))


//Optional parameters: optional parameter should be the last in the list 

const addAll = (a:number, b:number, c?:number)=>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
    return a+b

}


//Default Parameter: we can give any param
const sumAll = (a:number=10, b:number, c:number=2)=>{
    return a+b+c
}

logMsg(addAll(1,2,3))
logMsg(sumAll(1,2))
logMsg(sumAll(undefined,4)) // InOrder to skip the first number
//Default value will not work if we work with a function signature.

//Reset parameters: The reset operator should comes at the end as well.
const total = (a:number,...nums:number[]):number=>{
return a+nums.reduce((prev,cur)=>(prev+cur))
}

logMsg(total(2,1,2,3,4,4))


//Never type: This is for function that explicitly throw error, or if a function has infinite loop inside then the type will also be never. And if there is no explicit retun the type of that function will be void.

const isNumber = (value:any):boolean=>{
    return typeof value === 'number'?true:false
}


const numberOrSyring = (value:number|string):string =>{
    if (typeof value === 'string') return 'string'
    if(isNumber(value)) return "number"

    
}


1) Type Aliases
2)Functions
3) Never type




//###################################################
//         Type Assertion || Type Casting
//###################################################

//Some time you will have information about the type of a value that TypeScript can't know about, this come into way when we are working with the DOM.
//Type Aliases
type One = string
type two = number | string
type Three = 'hello'

//Convert to more or less specific 

let a:One = 'hello'
let b=a as two // less specific type
let c = a as Three // more specific


let d = <One>'world'
let e = <string | number>'world'

let addOrConcat = (a:number, b:number,c:'add' | "concat"):number|string =>{

if(c==='add'){
    return a+b+c
}

//if c==='concat" then string will returned
return "" + a + b;

}


const myVlal : string = addOrConcat(2,2,'concat') as string

//Be careful TS sees no problem - but a string is returned so this is type assertions.
const nextVal: number = addOrConcat(2,2,'concat') as number


//OVERRULING TS
// 10 as string
(10 as unknown) as string

// Excalmation mark is referd to a non null assertion
//The DOM 
const img = document.querySelector('img')!
const myimg = document.getElementById('img') as HTMLImageElement
const nextImage = <HTMLImageElement>document.getElementById('img') as HTMLImageElement

img.src
myimg.src



// #####################################
//               Classes
//######################################

class Coder {
    
secondLang! :string

constructor(
    public readonly name:string,  // Public is called Data modifier this makes our code a little but DRY.
    public music:string, 
    private age:number , // only acessiable in this class
    protected lang:string ='TypeScript' // Lang can be access inside the class but it can also be access in derived classes as well.This is difference between Private and protected
){
        this.name=name
        this.music=music
        this.age=age
        this.lang= lang
    }
    
    
    public getAge (){
        return `Hello, I'm ${this.age}`
    }
}

const Hamid = new Coder('Hamid iqbal' , 'Rock', 24 ,'Urdu')
console.log(Hamid.getAge())
// console.log(Hamid.age)
// console.log(Hamid.lang)

class webDev extends Coder {
    constructor(
        public computer :string,
        name:string,
        music:string,
        age:number,
        
    ){
        super(name,music,age)
    this.computer = computer
}

public getLang (){
    return `I writes in ${this.lang}`
}
}

const sarah  = new webDev('mac','sarah','happy',23)
console.log(sarah.getLang())
// console.log(sarah.age)

//This is interface, an interface is a way t define the structure that an object should have
interface Musician{
    name:string,
    instrument:string,
    play(action:string):string
}

class Guitarist implements Musician {
    name:string
    instrument:string
    constructor(name:string , instrument:string){
        this.name = name,
        this.instrument=instrument
    }
    
    
    play(action: string): string {
        return `${this.name} has ${action} of ${this.instrument}`
    }
}


const tariq = new Guitarist('tariq','Rabab')
console.log(tariq.play('classic'))
////////////////////////////////////////////////

class Peeps {
    static count:number = 0
    static getCount():number {
        return Peeps.count
    }
    
    public id :number
    
    
    constructor(
        public name:string
    ){
        this.name =name
        this.id = ++Peeps.count
    }
    
}

const nasar = new Peeps('nasar')
const ahmad =new Peeps('ahmad')
const way = new Peeps('way')
console.log(nasar.id)
console.log(ahmad.id)
console.log(way .id)

/////////////////////////////////////
//Guiters and Seter

class Bands{
    private dataSet:string[]
    constructor (){
        this.dataSet=[]
    }
    
    public get data():string[]{
        return this.dataSet
    }
    
    public set data(value:string[]){
        if(Array.isArray(value) && // This condition checks if the value is an Array or not.
        value.every(el=>
        typeof el ==='string' //If every element of the array is string.
    )){                      
        this.dataSet = value   //Seter cannot return a value
    }
    else  {
        throw new Error ('Param is not an array of string')
}
}

}

const myBands = new Bands()
myBands.data = ['hey','jau','if']
console.log(myBands.data) //getter
console.log(myBands.data=[...myBands.data,'zdfg'])
myBands.data=['van','hahb',2313]




// ##################################################################
//              Index signatures and key Assertions
//###################################################################


//Index signnatures: It is a way to define the shape of objects with properties whose names are not known in advance, but the type of the keys and values is known. IT allows you to describe objects that have dynamic or variable property keys.

//Interface for our object, we willc create objects from this.
// interface TransictionObj{
//     Pizza:number,
//     Books:number,
//     Job:number
// }

//This is index signature, we can make it readonly as well.
interface TransictionObj{
[index:string]:number
}


//This is the obect that we are making from the above interface
const todaysTransiction :TransictionObj = {
    Pizza :-10,
    Books:-4,
    Job:16
}


// console.log(todaysTransiction.Pizza)
// console.log(todaysTransiction['Pizza'])

let prop:string = 'Pizza'
console.log(todaysTransiction[prop]) // This dynamically accessing the property, TS is complaining about this and this often happens in loops.

const todaysNet = (transictions:TransictionObj):number =>{
    let total=0;
    for (const transition in transictions){
        total +=transictions[transition]
    }

    return total
}

console.log(todaysNet(todaysTransiction))

interface Students {
    [index:string]:number|string |undefined | number[]
    name:string,
    GPA:number,
    classess?:number[]
}

const student:Students = {
    name:'Hamid',
    GPA:3.5,
    classess:[100,200]
}

for (const key in student){
    console.log(`${key}: ${student[key]}`)
}

///////////////////////////////////////////////////

// interface Incomes {
//     [key:string] :number
// }


type streams = 'salaray'|'bonus'|'sideHustle'

type Incomes = Record<streams,number|string>

const montlyIncome: Incomes = {
salaray:500,
bonus:100,
sideHustle:250,
}

for (const revenu in montlyIncome){
    console.log(montlyIncome[revenu as keyof Incomes]) // This is key assertions
}


// ##################################################################
//              Generics
//###################################################################

//Sometimes we don't know what type will be pass into a funciton,interface,typ Aliace and classess etc and generics provide a placeholder a variable. for example;

const stringEcho = (arg:string):string =>arg // The problem with this is that it only accept string.

const echo = <T>(arg:T):T=>arg //This is the more generic type and this works for any other type as well, we can write anything else of T as well.

//example funciton

const isObj = <T>(arg:T):boolean =>{
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null  ) 
}

console.log(isObj(true))
console.log(isObj([1,2,3,4]))
console.log(isObj(false))
console.log(isObj({name:'jhon'}))
console.log(isObj(null))

//Usecases of generics: one best indication of when to use generics is when the function involves a logic of what this funciton will return.

const isTrue = <T>(arg:T):{arg:T, is:boolean} =>{
    if(Array.isArray(arg) && !arg.length){
        return{arg,is:false}
    }
    
    if (isObj(arg) && ! Object.keys(arg as keyof T).length){
        return {arg,is:false}
    }
    
    return {arg,is: !!arg} // Double negation operator
}

console.log(isTrue({}))



//Let's do it with interface.

interface BoolCheck <T>{
    value:T,
    is:boolean,
}

const checkBoolVlue = <T>(arg:T):BoolCheck<T>=>{
    if (Array.isArray(arg) && !arg.length){
        return {value:arg,is:false}
    }
    
    
    if(isObj(arg) && !Object.keys(arg as keyof T)
    ){
        return {value:arg, is:false}
    }
    
    return {value:arg,is:!!arg}
}

console.log(checkBoolVlue({}))


interface HasId{
    ID:number,
}

const processUser = <T extends HasId>(user:T):T =>{
    //Process the user with the logic here
    return user
}

console.log(processUser({ID:1,name:'Hamid'}))

const getUsersProperty =<T extends HasId, k extends keyof T>(users:T[], key:k): T[k][]=>{
    return users.map(user=>user[key])
}

console.log(getUsersProperty([],2))
*/


// ##################################################################
//              Utility Type
//###################################################################

//Definition: Utility types in Typescript are prededfined types provided by th language that allow you to manupulate and transform other types.They are designed to simply common type transformations, making it easier to work with the manage complex types.

//1) Partial:Sometimes , we want to update or work with only a subset of properties from an object without requiring all of them. Partial<Type> Allows  us to create such partial objects.
interface Assignment{
studentId:string,
title:string,
grade:number,
verified?:boolean,
}

const updateAssignment = (assign:Assignment, propstoUpdate:Partial<Assignment>):Assignment=>{
return {...assign, ...propstoUpdate}
}


const assign1:Assignment={
    studentId:'Hamid Iqbal',
    title:'Final Project',
    grade:0
}

console.log(updateAssignment(assign1,{grade:90}))
const assignGrade:Assignment = updateAssignment(assign1,{grade:95})

console.log(assignGrade)