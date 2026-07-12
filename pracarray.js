// create an array containing student details... done
// get only students marks=> 80... done 
// find the student whose id = 3
// calculate the total marks
// calculate the average marks
//check the student who are passed in the exam 
// sorth the highest student marks...

// creating the student data array...
const studentData = [
    {
        id : 1,
        fullname : "Kamal Pahan",
        marks : 80,
        address : "dhulabari",
    },
    {
        id : 2,
        fullname : "Aarin Shakya",
        marks : 75,
        address : "Bhakatrapur",
    },
    {
        id : 3,
        fullname : "Pratik Dahal",
        marks : 85,
        address : "Lalitpur",
    }
];

///students marks above or equal to 80...
const marksAbove80 = studentData.filter(student => student.marks >= 80);
console.log("Students with Marks above or equal to 80:");
console.log(marksAbove80);

// student whose id = 3
const studentid = studentData.find(student => student.id == 3);
console.log("Student with ID 3:");
console.log(studentid);

// calculate the total marks...
const totalMarks = studentData.reduce((total, student) => total + student.marks, 0);
console.log(`Total marks of all students: ${totalMarks}`);

// calculate the average marks...
const average  = totalMarks / studentData.length;
console.log(`Average marks of all students: ${average}`);

// check the student are passed or no...
const pass = studentData.filter (student => student.marks>=40);
console.log(`the passed students are`);
console.log(pass);
