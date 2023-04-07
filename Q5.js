// Define the list of student marks

const marks = [80, 70, 90, 60, 75];

// Calculate the average mark
const sum = marks.reduce((total, mark) => total + mark);
const average = sum / marks.length;

// Determine the corresponding grade
let grade;

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

// Display the grade to the console
console.log(`The average mark is ${average} and the corresponding grade is ${grade}`);
