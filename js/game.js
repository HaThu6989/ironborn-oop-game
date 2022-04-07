class Game {
  constructor(creat, draw) {
    this.player = null
    this.creat = creat
    this.draw = draw
  }

  start() {

    this.player = new Player();
    this.player.domElement = this.creat("player");
    //calling function creatDomElement(className)
  }

  movePlayer(direction) {
    if (direction === "left") {
      this.player.moveLeft();
    } else if (direction === "right") {
      this.player.moveRight();
    }
    this.draw(this.player)//calling function drawDomElm()
  }

}

class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.domElement = null
  }

  moveLeft() {
    this.positionX--;
    console.log(`moving left... ${this.positionX}`)
  }

  moveRight() {
    this.positionX++;
    console.log(`moving right... ${this.positionX}`)
  }
}
