let orders = [];
const recipes = [
  ["chopCabbage", "Plate"],
  ["chopTomato", "Plate"],
  ["chopCabbage", "chopTomato", "Plate"],
];
function pickrecipes() {
  let randomNumber = Math.floor(Math.random() * recipes.length);
  orders.push(recipes[randomNumber]);
  console.log(orders);
  printRecipes();
}

function printRecipes() {
  const domeOrder = document.getElementById("orders");
  domeOrder.replaceChildren();
  for (let i = 0; i < orders.length; i++) {
    const createElement = document.createElement("div");
    createElement.textContent = orders[i].join(" ");
    createElement.className = "recipe";
    domeOrder.appendChild(createElement);
  }
}
setInterval(pickrecipes, 3000);
