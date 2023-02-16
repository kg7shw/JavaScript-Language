const myList = ["1", "2", "3"];

function listTemplate(item) {
  return `<li>${item}</li>`;
}

const html = myList.map(listTemplate);
console.log(html);

const listElement = document.querySelector("#myList");
listElement.innerHTML = html.join("");

const grades = ["A", "B", "A"];
function convertToGPAPoints(grade) {
  let points = 0;
  switch (grade) {
    case "A":
      points = 4;
      break;

    case "B":
      points = 4;
      break;
    default:
      points = -1;
  }
  return points;
}
