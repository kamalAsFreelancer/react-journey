 // do while loop...
// the loops runs at least once, even the condition is false...

let j = 10;

do{
    console.log(j);
    j++;
} while(j <= 5);

//for of loop
// this is the most useful loop for the arrays... 

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits){
    console.log(fruit);
}

// foor in loop
// this is usde for objects...
const student = {
    name: "kamal",
    address: "Dhulabari",
    age: 24,
};

for (const key in student) {
    console.log(key, student[key]);
}

//break loop
// break will stop will the loop immediately..

for (let i = 1; i<=5; i++){
    if (i == 3){
        break;
    }
    console.log(i);
}