const prompt = require("prompt-sync")({ sigint: true });

const studentData = (name, age, roll) => {
    return `
    ------Student Data------
    Name : ${name}
    Age : ${age}
    Roll No : ${roll}`;
};

let name = prompt("Enter your name ");
let age = prompt("Enter your age ");
let roll = prompt("Enter your roll number ");

console.log(studentData(name, age, roll));