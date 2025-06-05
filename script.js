// GPA Calculator - Core JavaScript Logic (Compatible Version)
// Lines 1-44: Data Management & GPA Calculation

// Global array to store all assignments
var entries = [];

// Function to add a new assignment
function addAssignment(name, grade) {
    // Validate inputs
    if (!name || name.trim() === '') {
        console.error('Assignment name cannot be empty');
        return false;
    }
    
    if (isNaN(grade) || grade < 0 || grade > 5) {
        console.error('Grade must be a number between 0 and 5');
        return false;
    }
    
    // Create assignment object
    var assignment = {
        id: Date.now(), // Simple unique ID
        name: name.trim(),
        grade: parseFloat(grade),
        dateAdded: new Date().toLocaleString()
    };
    
    // Add to entries array
    entries.push(assignment);
    console.log('Assignment added:', assignment);
    return true;
}

// Function to calculate GPA
function calculateGPA() {
    if (entries.length === 0) {
        return 0;
    }
    
    // Sum all grades using reduce method
    var totalGrades = entries.reduce(function(sum, entry) {
        return sum + entry.grade;
    }, 0);
    
    // Calculate average (GPA)
    var gpa = totalGrades / entries.length;
    return Math.round(gpa * 100) / 100; // Round to 2 decimal places
}

// Function to get all assignments
function getAllAssignments() {
    return entries;
}

// Function to remove an assignment by ID
function removeAssignment(id) {
    var initialLength = entries.length;
    entries = entries.filter(function(entry) {
        return entry.id !== id;
    });
    return entries.length < initialLength; // Returns true if removed
}

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

