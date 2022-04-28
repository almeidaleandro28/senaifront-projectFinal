let products = [];

function getProducts() {
  const request = new XMLHttpRequest();
  request.open("GET", "src/Assets/products/products.json");
  request.onload = function() {
    products = JSON.parse(this.response);
    generateCard();
  }
  request.send();
  
}

function generateCard() {
  let counter = 0;
  for( const x of products ) {
    x.amount = 0;
    let idProduct = counter;

    const card = document.querySelector(".card").cloneNode(true);
    card.querySelector(".card-content > h2").innerHTML = x.name;
    card.querySelector(".image > img").src = `./src/Assets/images/${x.img}`;
    card.querySelector(".card-content #price").innerHTML = x.price;
    card.querySelector(".p_amount").value = x.amount;
    //change products amount
    card.querySelector("#bt-sub").addEventListener("click", function(){
      changeAmount(idProduct, -1);
    });
    
    card.querySelector("#bt-sum").addEventListener("click", function(){
      changeAmount(idProduct, 1);
    });
   
    
    document.querySelector(".section").append(card);
    
    counter++;
  }
  //remove origin card-product
  const card = document.querySelector(".card").remove();
}

function changeAmount(idProduct, amount) {
  let listProduct = products[ idProduct ];
  listProduct.amount += amount;
  //quantity does not go below zero
  if ( listProduct.amount < 0 ) listProduct.amount = 0;

  document.getElementsByClassName("p_amount")[idProduct].value = listProduct.amount;
  
  
}





getProducts();
