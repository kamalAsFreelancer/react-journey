// there are 7 data types in javascript
// those are string, number, boolean, null, undefined, object and symbol

//string
var name = "kamal";
console.log("My name is " + name);

//number
var age = 25;
console.log("I am " + age + " years old.");

//boolean
var isStudent = true;
console.log("Am I a student? " + isStudent);

//null
var car = null;
console.log("My car is " + car);

//undefined
var address;
console.log("My address is " + address);    

//object
var person = {
    name: "kamal",
    age: 25
};
console.log("My name is " + person.name + " and I am " + person.age + " years old.");

//symbol
var symbol1 = Symbol("symbol");
var symbol2 = Symbol("symbol");
console.log(symbol1 === symbol1); // true
console.log(symbol1 === symbol2); // false
