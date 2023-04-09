window.onload = () => {
  const canvas = document.querySelector("canvas");
  canvas.width = 1200;
  canvas.height = 600;
  canvas.style.border = "2px solid black";
  const ctx = canvas.getContext("2d");
  const level1 = {
    obstacle: [
      new Bench(0, 0, ctx),
      new Bench(300, 0, ctx),
      new Bench(300, 150, ctx),
      new Bench(450, 150, ctx),
      new Bench(1050, 0, ctx),
      new Bench(1050, 450, ctx),
      new Bench(750, 450, ctx),
      new Bench(750, 0, ctx),
      new Bench(0, 150, ctx),
      new Bench(0, 300, ctx),
      new Bench(0, 450, ctx),
      new Tomato(50, 500, ctx),
      new Cabbage(50, 50, ctx),
      new Plate(1100, 500, ctx),
      new CuttingBoard(500, 200, ctx),
      new ServiceArea(1050, 150, ctx),
      new Trash(1100, 50, ctx),
    ],
    actionArea: [
      { name: "Tomato", x: 50, y: 450 },
      { name: "Cabbage", x: 50, y: 0 },
      { name: "CuttingBoard", x: 450, y: 50 },
      { name: "CuttingBoard", x: 500, y: 150 },
      { name: "CuttingBoard", x: 450, y: 200 },
      { name: "Trash", x: 1000, y: 0 },
      { name: "Plate", x: 1000, y: 450 },
      { name: "ServiceArea", x: 1000, y: 150 },
      { name: "ServiceArea", x: 1000, y: 300 },
    ],
  };
  const chef = new Chef(750, 300, ctx, level1);

  function animate() {
    level1.obstacle.forEach((item) => item.draw());
    chef.draw();
    requestAnimationFrame(animate);
  }

  // //function startGame() {}

  // document.getElementById("start-button").onclick = () => {
  //   startGame();
  // };
  document.addEventListener("keydown", chef.move);
  animate();
};
