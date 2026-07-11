document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // it prevent the data for relodng or refreshing the page...

    let name = document.getElementById("studentName").value;
    let classNum = document.getElementById("classNum").value;
    let rollNum = document.getElementById("rollNum").value;
    let section = document.getElementById("section").value;

    const output = document.getElementById("outputContainer");
    const outputpara = document.createElement("p");
    
    outputpara.innerHTML = `
    <strong>Name         : </strong> ${name}<br>
    <strong>Class No.    : </strong> ${classNum}<br>
    <strong>Roll No.     : </strong> ${rollNum}<br>
    <strong>Section      : </strong> ${section}<br>
    `;
    output.appendChild(outputpara);

    // clearing the data from the input fileds after submit...

    document.getElementById("studentForm").reset();
});