function calculatePercentage() {
    // Get values from inputs
    const subjects = [
        parseFloat(document.getElementById('subject1').value),
        parseFloat(document.getElementById('subject2').value),
        parseFloat(document.getElementById('subject3').value),
        parseFloat(document.getElementById('subject4').value),
        parseFloat(document.getElementById('subject5').value),
        parseFloat(document.getElementById('subject6').value),
        parseFloat(document.getElementById('subject7').value)
    ];

    // Check if all inputs are numbers
    if (subjects.some(isNaN)) {
        alert("Please enter valid numbers for all subjects.");
        return;
    }

    // Calculate total and percentage
    const totalMarks = subjects.reduce((acc, marks) => acc + marks, 0);
    const totalPossibleMarks = subjects.length * 100; // assuming each subject is out of 100
    const percentage = (totalMarks / totalPossibleMarks) * 100;

    // Display the result
    document.getElementById('total-marks').textContent = `Total Marks: ${totalMarks}`;
    document.getElementById('percentage').textContent = `Percentage: ${percentage.toFixed(2)}%`;
}
