

const students = [
    {
        id: 1,
        fname: "kamal",
        lname: "pahan",
        age: 25,
        address: "Kathmandu",
        isStudent: true
    },
    {
        id: 2,  
        fname: "aarin",
        lname: "Shakya",
        age: 24,
        address: "Bhakatrapur",
        isStudent: false
    },
    {
        id: 3,
        fname: "Pratik",
        lname: "Dahal",
        age: 25,
        address: "lalitpur",
        isStudent: false
    },
];

//for each array methods for retrieving the data...
students.forEach((student) => {
    console.log(`${student.fname} ${student.lname}`);
});


// array method using function with map...
const studentNames = students.map((student) => {
    return `${student.fname}`;
});

console.log(studentNames);

// array method using function with filter...
const isStudent = students.filter(student => student.isStudent);

console.log(isStudent);


// array method using function with find...

const find = students.find(student => student.id == 3);

console.log(find);