// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  const outputElement = document.querySelector("#output");

  const html = `<h1>${results.name}</h1><img src="${results.sprites.back_shiny}" alt="${results.name}">`;

  outputElement.innerHTML = html;
}

// function doStuffList(data) {
//   console.log(data);
//   const pokeListElement = document.querySelector("#outputList");
//   pokeList = data.results;
//   pokeList.forEach((item) => {
//     const html = `<li>${item.name}</li>`;
//     pokeListElement.innerHTML += html;
//   });
// }

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    // execute the callback
    doThis(data);
  }
}

async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    renderList("#outputList", data.results, listTemplate);
  }
}
getPokemon(url);
console.log("second: ", results);
getPokemonList(urlList);

function listTemplate(data) {
  return `<li>${data.name}</li>`;
}

function renderList(selector, data, template) {
  const htmlArray = data.map(template);
  document.querySelector(selector).innerHTML = htmlArray.join("");
  console.log(htmlArray);
}
