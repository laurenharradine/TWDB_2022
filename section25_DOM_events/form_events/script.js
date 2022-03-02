const form = document.querySelector("#itemForm");
const item = document.querySelector("#product");
const qty = document.querySelector("#qty");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(item.value);
  const itemName = `${qty.value} ${item.value}s`; 
  const newItem = document.createElement("li");
  newItem.innerText = itemName;
  list.appendChild(newItem);
  qty.value = "";
  item.value = "";
})