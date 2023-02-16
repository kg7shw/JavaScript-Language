// Make function that stores an array of objects in local starage as a JSON

// make init function that gets data from local storage.

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

// Store data in local storage
function storeData() {
  localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
}

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
