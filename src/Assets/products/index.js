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