let orders = [];
const recipes = [
  ["chopCabbage", "Plate"],
  ["chopTomato", "Plate"],
  ["chopCabbage", "chopTomato", "Plate"],
];
function pickrecipes() {
  if (orders.length === 4) {
    return;
  }
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
let ordertimer, countdownid;

const startingMinute = 1;
let time = startingMinute * 60;
const countdownThree = document.getElementById("time");

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (time === 0) {
    stopOrdering();

    //to do show lose message!
  }

  countdownThree.innerHTML = `${minutes}:${seconds}`;
  time--;
}

function startOrdering() {
  ordertimer = setInterval(pickrecipes, 3000);
  countdownid = setInterval(updateCountdown, 1000);
}
function stopOrdering() {
  clearInterval(ordertimer);
  clearInterval(countdownid);
}
function updateScore() {
  const scoreIndex = document.getElementById("score");
  const currentScore = Number(scoreIndex.innerText) + 50;
  const targetEl = document.getElementById("targetscore");
  const targetScore = Number(targetEl.innerText);
  scoreIndex.innerText = currentScore;
  if (currentScore >= targetScore) {
    stopOrdering();
    //to do win screen!
  }
}
function compareOrders(food) {
  const orderIndex = orders.findIndex((ord) =>
    ord.every((ing) => food.includes(ing))
  );
  if (orderIndex > -1) {
    orders.splice(orderIndex, 1);
    printRecipes();
    updateScore();
  } else {
    alert("NO NO");
  }
}
