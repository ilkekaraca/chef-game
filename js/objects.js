class GameObject {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
  }
}

class Bench extends GameObject {
  constructor(x, y, ctx) {
    super(x, y, 150, 150, ctx);
  }

  draw = () => {
    this.ctx.beginPath();
    this.ctx.fillStyle = "teal";
    // xPos, yPos, width, height
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);

    this.ctx.fill();
    this.ctx.closePath();
  };
}

class Chef extends GameObject {
  constructor(x, y, ctx) {
    super(x, y, 70, 70, ctx);
    this.speed = 20;
  }

  draw = () => {
    this.ctx.fillStyle = "pink";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  move = (event) => {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    if (event.key === "ArrowDown") {
      this.y += this.speed;
    }
    if (event.key === "ArrowUp") {
      this.y -= this.speed;
    }
    if (event.key === "ArrowRight") {
      this.x += this.speed;
    }
    if (event.key === "ArrowLeft") {
      this.x -= this.speed;
    }

    event.preventDefault();
  };
}
