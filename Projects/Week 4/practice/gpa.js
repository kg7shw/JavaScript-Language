// getInput - getGrades
// convertToGpaPoints - lookUpGrade
// calcAvg - calcGpa
//displayResults - outputGpa
//eventHandler - clickHandler
function getGrades(inputSelector) {
  const grades = document.querySelector("#grades").value;

  const gradeArray = grades.value.split(",");

  const cleanGrades = gradeArray.map((grade) => grade.toUpperCase().trim());

  gradeArray.map((grade) => {
    let upperGrade = grade.toUpperCase();
    return upperGrade.trim();
  });

  console.log(cleanGrades);
  return cleanGrades;
}

// function getGrades(inputSelector) {
//   // get grades from the input box
//   // split them into an array (String.split(','))
//   // clean up any extra spaces, and make the grades all uppercase. (Array.map())
//   // return grades

//   myArray = [];
//   let gradesInput = document.querySelector("#grades").value;
//   gradesInput.split(",").toUpperCase().trim();
//   myArray = Array.push(gradesInput);
//   console.log(myArray);
// }

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  let value = 0;
  switch (grade) {
    case "A":
      value = 4.0;
      break;
    case "B":
      value = 3.0;
      break;
    default:
      value = 0;
  }
  return value;
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  // calculates the GPA
  // return the GPA
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  const gpaPoints = grades.map(lookupGrade);
  console;
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  // calculate the gpa from the grades entered
  // display the gpa
}
document.querySelector("#submitButton").addEventListener("click", clickHandler);
