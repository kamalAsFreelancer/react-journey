document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    let name = document.getElementById('studentName').value;
    let classNum = document.getElementById('classNum').value;
    let roll = document.getElementById('rollNum').value;
    let section = document.getElementById('section').value;

    console.log(`Student Added: ${name}, Class: ${classNum}, Roll: ${roll}, Section: ${section}`);
    
    // Your code to process the data goes here!
    // Inside your submit event listener:
const output = document.getElementById('outputContainer');
const studentParagraph = document.createElement('p');

studentParagraph.innerHTML = `<strong>${name}</strong> (Class: ${classNum}-${section}, Roll: ${roll})`;
output.appendChild(studentParagraph);
});