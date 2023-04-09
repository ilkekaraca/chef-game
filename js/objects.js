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
    this.ctx.fillStyle = "teal";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
}
class Tomato extends GameObject {
  constructor(x, y, ctx) {
    super(x, y, 50, 50, ctx);
  }
  draw = () => {
    this.ctx.fillStyle = "tomato";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
}
class Cabbage extends GameObject {
  constructor(x, y, ctx) {
    super(x, y, 50, 50, ctx);
  }
  draw = () => {
    this.ctx.fillStyle = "green";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
}
class Plate extends GameObject {
  constructor(x, y, ctx) {
    super(x, y, 50, 50, ctx);
  }
  draw = () => {
    this.ctx.fillStyle = "white";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
}
class CuttingBoard extends GameObject {
  constructor(x, y, ctx) {
    super(x, y, 50, 50, ctx);
  }
  draw = () => {
    this.ctx.fillStyle = "brown";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
}
class ServiceArea extends GameObject {
  constructor(x, y, ctx) {
    super(x, y, 150, 300, ctx);
  }
  draw = () => {
    this.ctx.fillStyle = "yellow";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
}
class Trash extends GameObject {
  constructor(x, y, ctx) {
    super(x, y, 50, 50, ctx);
  }
  draw = () => {
    this.ctx.fillStyle = "grey";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
}

class Chef extends GameObject {
  constructor(x, y, ctx, level) {
    super(x, y, 50, 50, ctx);
    this.speed = 25;
    this.level = level;
  }

  draw = () => {
    this.ctx.fillStyle = "pink";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  move = (event) => {
    // temporary values of the chef to test it before moving
    let a = this.x,
      b = this.y;
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    if (
      event.key === "ArrowDown" &&
      this.y + this.height < this.ctx.canvas.height
    ) {
      b += this.speed;
    }
    if (event.key === "ArrowUp" && this.y > 0) {
      b -= this.speed;
    }
    if (
      event.key === "ArrowRight" &&
      this.x + this.width < this.ctx.canvas.width
    ) {
      a += this.speed;
    }
    if (event.key === "ArrowLeft" && this.x > 0) {
      a -= this.speed;
    }

    if (!this.isColliding(a, b)) {
      this.x = a;
      this.y = b;
    }

    console.log(this.x, this.y);
    event.preventDefault();
  };

  isColliding = (x, y) => {
    for (let i = 0; i < this.level.length; i++) {
      const element = this.level[i];
      if (
        x < element.x + element.width &&
        x + this.width > element.x &&
        y < element.y + element.height &&
        this.height + y > element.y
      ) {
        return true;
      }
    }

    return false;
  };
}
