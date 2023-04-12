window.onload = () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 1200;
  canvas.height = 600;

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
      new Tomato(20, 500, ctx),
      new Cabbage(20, 30, ctx),
      new Plate(1050, 450, ctx),
      new CuttingBoard(450, 150, ctx),
      new ServiceArea(1050, 150, ctx),
      new Trash(1050, 0, ctx),
      new RangeHood(750, 450, ctx),
      new Stove(0, 300, ctx),
      new Flower(300, 0, ctx),
      new KitchenSink(0, 150, ctx),
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

  document.querySelectorAll(".start-button").forEach(
    (button) =>
      (button.onclick = () => {
        document.querySelector(".intro").classList.add("hidden");
        document.querySelector(".gameover-screen").classList.add("hidden");
        document.querySelector("#game-board").classList.remove("hidden");

        chef.resetHand();
        startOrdering();
        animate();
        document.querySelector("audio").play();
      })
  );
  document.addEventListener("keydown", chef.move);
};
