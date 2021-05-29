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

let person: {name: string, age: number}; //object typing

person = {
  name: "Max",
  age: 32,
};

person = {
  isEmployee: true;
}

let people: {
  name: string, age: number
}[] // array of objects...

//type inference ...
let course = "react - the complete guide";

course = 12345;

//union types
let courses: string | number = "react- the complete guide"

courses = 12345