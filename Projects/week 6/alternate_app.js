// list (grocery list)
let groceryItems = [];

// object (grocery item)
function addItem(text) {
  const item = {
    text,
    id: new Date(),
    checked: false,
  };

  groceryItems.push(item);
  console.log(groceryItems);
}

// Prevents form from using default
const form = document.querySelector(".grocery-main-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.querySelector("#grocery");
  console.log(input);

  const cleanText = input.value.trim();
  console.log(cleanText);

  if (cleanText !== "") {
    addItem(cleanText);
    input.value = "";
    input.focus();
    renderList(".grocery-list", groceryItems, listTemplate);
  }

  console.log(cleanText);
});
// Render List

// function listTemplate(item) {
//   console.log(`<li>${item.text}</li>`);
//   return `
//   <li>
//   ${item.text}
//   <button class="edit-button">Edit</button>
//   <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>
// </li>`;
// }

function listTemplate(item) {
  let checkedItem = item.checked ? "checked" : "";
  return `
  <li class="${checkedItem}" data-id="${item.itemId}">
    <input type="checkbox" class="checkbox" ${item.checked ? "checked" : ""}>
    ${item.text}
    <button class="delete-btn" onclick="deleteItem(${
      item.itemId
    })">Delete</button>
  </li>`;
}

function renderList(selector, list, template) {
  const htmlArray = list.map(template);
  document.querySelector(selector).innerHTML = htmlArray.join("");
}

// delete item from list
// function deleteItem(id) {
//   const index = groceryItems.findIndex((item) => item.id === id);
//   groceryItems.splice(index, 1);
//   console.log(groceryItems);
//   renderList(".grocery-list", groceryItems, listTemplate);
// }

function deleteItem(itemId) {
  const index = groceryItems.findIndex((item) => item.itemId === itemId);
  groceryItems.splice(index, 1);
  renderList(".grocery-list", groceryItems, listTemplate);
}

// // Select delete button
// const deleteButton = document.querySelector("#delete-button");
// deleteButton.addEventListener("click", function () {
//   const selectedId = document.querySelector(".grocery-list li.selected").dataset
//     .id;
//   deleteItem(selectedId);
// });

// Edit Button
// Add event listener to checkbox
document.addEventListener("change", function (event) {
  if (event.target.classList.contains("checkbox")) {
    const selectedId = event.target.parentElement.dataset.id;
    const item = groceryItems.find((item) => item.id === selectedId);
    item.checked = !item.checked;
    renderList(".grocery-list", groceryItems, listTemplate);
    console.log(`test ${checked}`);
  }
});
// Checked off button

//local storage
// Store an array of objects in local storage as a JSON
function storeInLocalStorage(array) {
  localStorage.setItem("groceryItems", JSON.stringify(array));
}

// Get data from local storage
function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("groceryItems")) || [];
}

// Initialize the grocery items array with data from local storage
groceryItems = getFromLocalStorage();

// Call renderList to display the grocery items from local storage
renderList(".grocery-list", groceryItems, listTemplate);

// Update local storage every time the grocery items array is modified
addItem = (function (originalAddItem) {
  return function (text) {
    originalAddItem(text);
    storeInLocalStorage(groceryItems);
  };
})(addItem);

// Retrieve data from local storage
function init() {
  const storedData = localStorage.getItem("groceryItems");
  if (storedData) {
    groceryItems = JSON.parse(storedData);
    renderList(".grocery-list", groceryItems, listTemplate);
  }
}

// Call `init` function on page load
window.addEventListener("load", init);

<button class="delete-btn" onclick="deleteItem(${item.id})">
  Delete
</button>;

function deleteItem(id) {
  const itemObject = groceryItems.findIndex((item) => item.id === id);
  if (itemObject > -1) {
    groceryItems.splice(itemObject, 1);
  }

  console.log(itemObject);
  // groceryItems.splice(itemObject, 1);

  renderList(".grocery-list", groceryItems, listTemplate);
}
