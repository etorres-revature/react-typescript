//Primitieve: nubmer, string, boolean
//more complex types: arrays, objects
//function types, parameters
//have null and undefined types
//falback type is any

//primitives

let age: number;

age = 12;

age = "bob";

let userName: string;

userName = "bob";

userName = false;

let isUsingTS: boolean;

isUsingTS = true;

//more complex types

let hobbies: string[]; //an array of strings

hobbies = ["sports", "cooking"];

hobbies.push(12);

//type definition/alias 
type Person = {name: string, age: number}

let person: Person //{name: string, age: number}; object typing

person = {
  name: "Max",
  age: 32,
};

person = {
  isEmployee: true;
}

let people: Person
/*{
  name: string, age: number
}[] array of objects... */

//type inference ...
let course = "react - the complete guide";

course = 12345;

//union types
let courses: string | number = "react- the complete guide"

courses = 12345

//functions && types
function add(a: number, b: number): string {
return a.toString() + b.toString(); 
}

function printer(value: any) {
  console.log(value)
}

//generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray;
}

const demoArray = [1,2,3]

const updatedArray = insertAtBeginning(demoArray, -1);  //[-1,1,2,3]

const stringArray = insertAtBeginning(['a', 'b','c'], 'd')

updatedArray[0].split('')