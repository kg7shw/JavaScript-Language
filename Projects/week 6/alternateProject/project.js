// list (grocery list)
let groceryItems = [];

let defaultList = [
  {
    text: "Milk",
    id: new Date(),
    checked: false,
  },
  {
    text: "Eggs",
    id: new Date(),
    checked: false,
  },
  {
    text: "Bread",
    id: new Date(),
    checked: false,
  },
  {
    text: "Apples",
    id: new Date(),
    checked: false,
  },
  {
    text: "Chicken",
    id: new Date(),
    checked: false,
  },
  {
    text: "Sugar",
    id: new Date(),
    checked: false,
  },
  {
    text: "Flour",
    id: new Date(),
    checked: false,
  },
  {
    text: "Cheese",
    id: new Date(),
    checked: false,
  },
  {
    text: "Carrots",
    id: new Date(),
    checked: false,
  },
  {
    text: "Potatoes",
    id: new Date(),
    checked: false,
  },
  {
    text: "Lettuce",
    id: new Date(),
    checked: false,
  },
  {
    text: "Tomatoes",
    id: new Date(),
    checked: false,
  },
];

// (grocery item)
function addItem(text) {
  const item = {
    text,
    id: new Date(),
    checked: false,
  };

  groceryItems.push(item);
  console.log(groceryItems);

  storeInLocalStorage(groceryItems);
}

function addDefaultList() {
  groceryItems = groceryItems.concat(defaultList);
  renderList(".grocery-list", groceryItems, listTemplate);
  storeInLocalStorage(groceryItems);
}

// function addDefaultList(defaultList) {
//   newList = groceryItems.concat(defaultList);
//   groceryItems = newList;
//   console.log(newList);
//   renderList(".grocery-list", groceryItems, listTemplate);
// }

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
  renderList(".grocery-list", groceryItems, listTemplate);
}

// Render List
function listTemplate(item) {
  return `<li>${item.text}<button class="delete-btn" data-id="${item.id}">Delete</button></li>`;
}

function renderList(selector, list, template) {
  const htmlArray = list.map(template);
  document.querySelector(selector).innerHTML = htmlArray.join("");
}

// delete item function
function deleteItem(id) {
  groceryItems = groceryItems.filter((item) => item.id !== id);
  renderList(".grocery-list", groceryItems, listTemplate);
  storeInLocalStorage(groceryItems);
}

//EVENT HANDLERS

// delete button handler
const list = document.querySelector(".grocery-list");
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = event.target.dataset.id;
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
