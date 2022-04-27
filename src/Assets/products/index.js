let products = [];

function getProducts() {
  const request = new XMLHttpRequest();
  request.open("GET", "src/Assets/products/products.json");
  request.onload = function() {
    products = JSON.parse(this.responseText);
    console.log( products)
    generateCard();
  }
  request.send();
  
}

function generateCard() {
  for( const x of products ) {
    const card = document.querySelector(".card").cloneNode(true);
    card.querySelector(".card-content > h2").innerHTML = x.name;
    card.querySelector(".image > img").src = `./src/Assets/images/${x.img}`;
    document.querySelector(".section").append(card);
  }
  //remove origin card-product
  const card = document.querySelector(".card").remove();
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

getProducts();
