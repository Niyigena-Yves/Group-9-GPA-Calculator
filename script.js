// Function to display GPA in console and update UI
function displayGPA() {
    let calcGPA = document.getElementById('calcGPA');
    let gpa = calculateGPA();
    console.log("Your GPA is:", gpa);
    calcGPA.textContent = gpa;
}

// Load stored data on page refresh
document.addEventListener("DOMContentLoaded", function () {
    display();
    displayGPA();
});

// Event Listener for button click which is "add"
document.getElementById('btn').addEventListener('click', function (event) {
    event.preventDefault();
    insert();
});
document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "s") {
        console.log("All stored data:", grades);
    }
});