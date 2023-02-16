// list (grocery list)
let groceryItems = [];
let id = 1;

let defaultGroceryList = [
  "Milk",
  "Eggs",
  "tomatoes",
  "Lettuce",
  "Bread",
  "Potatoes",
  "Carrots",
  "Cheese",
  "Flour",
  "Sugar",
  "Chicken",
  "Apples",
];

// (grocery item)
function addItem(text) {
  const item = {
    text,
    id: id++,
    checked: false,
  };

  groceryItems.unshift(item);
  console.log(groceryItems);

  storeInLocalStorage(groceryItems);
}

function setId() {
  id = getFromLocalStorage().reduce((highest, currentItem) => {
    if (highest < currentItem.id) {
      return currentItem.id;
    } else {
      return highest;
    }
  }, 1);
}

function addDefaultList() {
  defaultGroceryList.forEach(addItem);
  renderList(".grocery-list", groceryItems, listTemplate);
}

function clearList() {
  groceryItems = [];
  renderList(".grocery-list", groceryItems, listTemplate);
  storeInLocalStorage(groceryItems);
}

//local storage

function storeInLocalStorage(groceryItems) {
  localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
}

function getFromLocalStorage() {
  const storedList = localStorage.getItem("groceryItems");
  if (storedList) {
    return JSON.parse(storedList);
  } else {
    return [];
  }
}

function init() {
  groceryItems = getFromLocalStorage();
  setId(groceryItems);
  renderList(".grocery-list", groceryItems, listTemplate);
}

// Render List
function listTemplate(item) {
  return `<li class="list-item">${item.text}<button class="btn delete-btn" data-id="${item.id}"><i class="fa-solid fa-trash-can"></i></button></li>`;
}

function renderList(selector, list, template) {
  const htmlArray = list.map(template);
  document.querySelector(selector).innerHTML = htmlArray.join("");
}

// // delete item function
// function deleteItem(id) {
//   groceryItems = groceryItems.filter((item) => item.id !== parseInt(id));
//   renderList(".grocery-list", groceryItems, listTemplate);
//   storeInLocalStorage(groceryItems);
// }

// delete item function
function deleteItem(id) {
  groceryItems = groceryItems.filter((item) => item.id != id);
  renderList(".grocery-list", groceryItems, listTemplate);
  storeInLocalStorage(groceryItems);
}

//EVENT HANDLERS

// delete button handler
const list = document.querySelector(".grocery-list");
list.addEventListener("click", function (event) {
  let target = event.target;
  if (target.nodeName === "I") {
    target = target.closest("button");
  }
  if (target.classList.contains("delete-btn")) {
    const id = target.dataset.id;
    deleteItem(id);
  }
});

// Clear List button handler
document.querySelector("#clear-list-btn").addEventListener("click", clearList);

//add default List button handler
document
  .querySelector("#add-default-list-btn")
  .addEventListener("click", addDefaultList);

// Prevents form from using default event handler
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

// Call `init` function on page load
window.addEventListener("load", init);
