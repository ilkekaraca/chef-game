window.onload = () => {
  const canvas = document.querySelector("canvas");
  canvas.width = 1200;
  canvas.height = 600;
  canvas.style.border = "2px solid black";
  const ctx = canvas.getContext("2d");
  const level1 = [
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
  ];
  const chef = new Chef(750, 300, ctx, level1);

  function animate() {
    level1.forEach((item) => item.draw());
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
