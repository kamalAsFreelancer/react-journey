// var examples
var age = 25;
var name = "kamal";
console.log("My name is " + name + " and  am " + age + " years old.");

// let examples
let city = "New York";
console.log("I live in " + city);

city = "Los Angeles";
console.log("Now I live in " + city);

// const examples
const country = "USA";
console.log("I live in " + country);

// block scope example

if (true) {
    let x = 10;
    const y = 20;
    console.log("this is inside the block scope: x = " + x + ", y = " + y);
}