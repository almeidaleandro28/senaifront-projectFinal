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
   
    
    document.querySelector(".section-product").append(card);
    
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

function sendRequest() {

}

let msgModal = "";
function showProducts() {
  msgModal = "";
  let total = 0;
  let subTotal = 0;
  for ( product of products ) {
    if ( product.amount > 0 ) {
            subTotal = ( product.price * product.amount ).toFixed(2);
            total += +subTotal;
            msgModal += `<p>${product.name.toUpperCase()} (R$ ${product.price} x ${product.amount}) = ${subTotal}</p>`;
    } 
  }

  if (msgModal == "") { 
    msgModal = "<p>Nenhum produto selecionado.</p>";
    document.querySelector("#btn_send").disabled = "disabled";
  } else {
    msgModal += `<p>Total ${total.toFixed(2)}</p>`
    document.querySelector("#btn_send").disabled = "";
  }

 document.querySelector(".modal-body").innerHTML = msgModal;

}


function sendRequest() {
  const phone = "55061981749346";

  msgModal = msgModal.replaceAll("<p>", "").replaceAll("</p>", "\n");
  msgModal = msgModal.replaceAll("<b>", "*").replaceAll("</b>", "*");

  const nameClient = document.querySelector("#name").value;
  const addressClient = document.querySelector("#address").value;

  msgModal += `\nNome: *${nameClient}*`;
  msgModal += `\nEnderço: *${addressClient}*`;
  msgModal = encodeURI(msgModal);

  link = `https://api.whatsapp.com/send?phone=${phone}&text=${msgModal}`;
  window.open( link, "_blank");
}

getProducts();