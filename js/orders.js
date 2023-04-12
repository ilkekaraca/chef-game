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
function showEndScreen(win) {
  document.querySelector("#game-board").classList.add("hidden");
  document.querySelector(".gameover-screen").classList.remove("hidden");
  if (win) {
    document.querySelector(".end-instructions-win").classList.remove("hidden");
  } else {
    document.querySelector(".end-instructions-lost").classList.remove("hidden");
  }
  const currentScore = Number(document.getElementById("score").innerText);
  document.querySelector("#final-score").innerText = currentScore;

  const highScoreEl = document.querySelector("#high-score");
  const currentHighScore = localStorage.getItem("chefgame");
  if (
    (currentHighScore && currentHighScore < currentScore) ||
    currentHighScore === null
  ) {
    localStorage.setItem("chefgame", currentScore);
    highScoreEl.innerText = currentScore;
  } else if (currentHighScore && currentHighScore > currentScore) {
    highScoreEl.innerText = currentHighScore;
  }
  document.querySelector("audio").pause();
  document.getElementById("score").innerText = "0";
}

function printRecipes() {
  const domeOrder = document.getElementById("orders");
  domeOrder.replaceChildren();
  for (let i = 0; i < orders.length; i++) {
    const createElement = document.createElement("img");
    createElement.src = `images/${orders[i].join("")}.png`;
    createElement.className = "recipe";
    domeOrder.appendChild(createElement);
  }
}
let ordertimer, countdownid;

let time;
const countdownThree = document.getElementById("time");

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (time === 0) {
    stopOrdering();

    showEndScreen(false);
  }

  countdownThree.innerHTML = `${minutes}:${seconds}`;
  time--;
}

function startOrdering() {
  const startingMinute = 1;
  time = startingMinute * 60;
  ordertimer = setInterval(pickrecipes, 3000);
  countdownid = setInterval(updateCountdown, 1000);
  orders = [];
  printRecipes();
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
    showEndScreen(true);
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
    return true;
  } else {
    alert("NO NO");
    return false;
  }
}
