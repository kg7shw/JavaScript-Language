// Define grocery items array and default list
let groceryItems = [];

const defaultList = [
  { text: "Milk", id: new Date(), checked: false },
  { text: "Eggs", id: new Date(), checked: false },
  { text: "Bread", id: new Date(), checked: false },
  { text: "Apples", id: new Date(), checked: false },
  { text: "Chicken", id: new Date(), checked: false },
  { text: "Sugar", id: new Date(), checked: false },
  { text: "Flour", id: new Date(), checked: false },
  { text: "Cheese", id: new Date(), checked: false },
  { text: "Carrots", id: new Date(), checked: false },
  { text: "Potatoes", id: new Date(), checked: false },
  { text: "Lettuce", id: new Date(), checked: false },
  { text: "Tomatoes", id: new Date(), checked: false },
];

// Add grocery item
function addItem(text) {
  const item = { text, id: new Date(), checked: false };
  groceryItems.push(item);
  renderList(".grocery-list", groceryItems, listTemplate);
  storeInLocalStorage(groceryItems);
}

// Add default list
function addDefaultList() {
  groceryItems = groceryItems.concat(defaultList);
  renderList(".grocery-list", groceryItems, listTemplate);
  storeInLocalStorage(groceryItems);
}

// Clear list
function clearList() {
  groceryItems = [];
  renderList(".grocery-list", groceryItems, listTemplate);
  storeInLocalStorage(groceryItems);
}

// Local storage
function storeInLocalStorage(groceryItems) {
  localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
}

function getFromLocalStorage() {
  const storedList = localStorage.getItem("groceryItems");
  return storedList ? JSON.parse(storedList) : [];
}

// Initialize
function init() {
  groceryItems = getFromLocalStorage();
  renderList(".grocery-list", groceryItems, listTemplate);
}

// Render list
function listTemplate(item) {
  return (
    <li>
      ${item.text}
      <button class="delete-btn" data-id="${item.id}">
        Delete
      </button>
    </li>
  );
}

function renderList(selector, list, template) {
  const htmlArray = list.map(template);
  document.querySelector(selector).innerHTML = htmlArray.join("");
}

// Delete item
function deleteItem(id) {
  groceryItems = groceryItems.filter((item) => item.id !== id);
  renderList(".grocery-list", groceryItems, listTemplate);
  storeInLocalStorage(groceryItems);
}

// Event handlers
const list = document.querySelector(".grocery-list");
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = event.target.dataset.id;
    deleteItem(id);
  }
});

document.querySelector("#clear-list-btn").addEventListener("click", clearList);

document
  .querySelector("#add-default-list-btn")
  .addEventListener("click", addDefaultList);

const form = document.querySelector(".grocery-main-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.querySelector("#grocery");
  const cleanText = input.value.trim();
  if (cleanText !== "") {
    addItem(cleanText);
    input.value = "";
    input.focus();
  }
});

// Call init function on page load
window.addEventListener("load", init);
