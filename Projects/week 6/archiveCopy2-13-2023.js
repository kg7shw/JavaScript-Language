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

  storeInLocalStorage(groceryItems);
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

// function deleteItem(id) {
//   groceryItems = groceryItems.filter(function (item) {
//     return item.id !== id;
//   });
//   renderList(".grocery-list", groceryItems, listTemplate);
//   storeInLocalStorage(groceryItems);
// }

// add event listener for delete button
const list = document.querySelector(".grocery-list");
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = event.target.dataset.id;
    deleteItem(id);
  }
});

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

// Call `init` function on page load
window.addEventListener("load", init);
