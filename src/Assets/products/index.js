let products = [];

function getProducts() {
  const request = new XMLHttpRequest();
  request.open("GET", "src/Assets/products/products.json");
  request.onload = function() {
    products = JSON.parse(this.responseText);
    console.log( products)
  }
  request.send();
}

function generateCard() {
  const card = document.querySelector(".card").cloneNode(true);
  card.querySelector(".card-content > h2").innerHTML = "odlsldldld";
  document.querySelector(".section").append(card);



}

const bt_add = document.getElementById("bt-sum");
const bt_decrease = document.getElementById("bt-sub");
let counter = 0;

function add() {
  updateAmount(counter++)
  console.log( counter)
}

function sub() {
  updateAmount(counter--)
  console.log( counter )
}

function updateAmount( counter ) {
  document.getElementById("price").value = counter;
}

generateCard();
