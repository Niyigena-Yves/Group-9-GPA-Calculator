const grades = JSON.parse(localStorage.getItem("grades")) || [];
let courseObject = '';
let course = '';
let score = '';

// Function to insert data into the array and save to localStorage
function insert() {
    course = document.getElementById('course').value;
    score = parseFloat(document.getElementById('score').value);

    if (course.trim() === "" || isNaN(score) || score < 0 || score > 5) {
        alert("Please enter a valid grade between 0 and 5!");
        return; 
    }

    courseObject = { name: course, points: score };
    grades.push(courseObject);
    localStorage.setItem("grades", JSON.stringify(grades)); 
    display();
    displayGPA();
}

// Function to display entered data
function display() {
    let mylist = document.getElementById('mylist');
    mylist.innerHTML = ""; 

    grades.forEach(courseObject => {
        let listItem = document.createElement('li');
        listItem.textContent = `${courseObject.name} -- ${courseObject.points}`;
        mylist.appendChild(listItem);
    });

    document.getElementById('course').value = "";
    document.getElementById('score').value = "";
}

// Function to calculate GPA
function calculateGPA() {
    if (grades.length === 0) return "N/A";
    let totalGrades = grades.reduce((sum, course) => sum + course.points, 0);
    return (totalGrades / grades.length).toFixed(2);
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

