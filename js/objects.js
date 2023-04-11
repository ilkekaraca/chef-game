// base class to hold x,y,width,height,canvas
class GameObject {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
  }
}
//other classes extend from base class
class Bench extends GameObject {
  constructor(x, y, ctx) {
    super(x, y, 150, 150, ctx);
    this.image = new Image(150, 150);
    this.image.src = `/images/cabinet.png`;
  }

  draw = () => {
    // this.ctx.fillStyle = "teal";
    // // xPos, yPos, width, height
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // this.ctx.strokeStyle = "black";
    // this.ctx.strokeRect(this.x, this.y, this.width, this.height);

    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
    this.hand = [];
  }

  draw = () => {
    this.ctx.fillStyle = "pink";
    // xPos, yPos, width, height
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  move = (event) => {
    if (event.key === " ") {
      const actionArea = this.isActionArea();
      if (actionArea) {
        this.executeRules(actionArea);
      }
    }

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

    // console.log(this.x, this.y);
    event.preventDefault();
  };

  isColliding = (x, y) => {
    for (let i = 0; i < this.level.obstacle.length; i++) {
      const element = this.level.obstacle[i];
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

  isActionArea = () => {
    for (let i = 0; i < this.level.actionArea.length; i++) {
      const actionArea = this.level.actionArea[i];
      if (
        this.x < actionArea.x + 150 &&
        this.x + this.width > actionArea.x &&
        this.y < actionArea.y + 150 &&
        this.height + this.y > actionArea.y
      ) {
        // console.log(actionArea.name);
        return actionArea.name;
      }
    }
    console.log("not in action area");
    return false;
  };

  executeRules = (actionAreaName) => {
    switch (actionAreaName) {
      case "Tomato":
        if (this.hand.includes("Tomato") || this.hand.includes("Cabbage")) {
          break;
        } else {
          this.hand.push("Tomato");
          break;
        }
      case "Cabbage":
        if (this.hand.includes("Tomato") || this.hand.includes("Cabbage")) {
          break;
        } else {
          this.hand.push("Cabbage");
          break;
        }
      case "CuttingBoard":
        if (this.hand.includes("Tomato")) {
          const tomatoIndex = this.hand.indexOf("Tomato");
          this.hand.splice(tomatoIndex, 1);
          this.hand.push("chopTomato");
        }
        if (this.hand.includes("Cabbage")) {
          const tomatoIndex = this.hand.indexOf("Cabbage");
          this.hand.splice(tomatoIndex, 1);
          this.hand.push("chopCabbage");
        }
        break;
      case "Plate":
        if (!this.hand.includes("Plate")) {
          this.hand.push("Plate");
        }
        break;
      case "Trash":
        this.hand = [];
        break;
      case "ServiceArea":
        break;
    }

    console.log(this.hand);
  };
}
