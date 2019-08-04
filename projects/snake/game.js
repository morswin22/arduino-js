const Snake = require("./snake");
const Candy = require("./candy");

const heart = [
  [0,1,1,0,0,1,1,0],
  [1,0,0,1,1,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [0,1,0,0,0,0,1,0],
  [0,0,1,0,0,1,0,0],
  [0,0,0,1,1,0,0,0],
  [0,0,0,0,0,0,0,0]
];

class Game {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.clearDisplay();
    this.player = new Snake(4, 3, 2, this);
    this.candy = new Candy(width, height)
  }
  clearDisplay() {
    this.display = []
    for (let x = 0; x < this.width; x++) {
      let row = [];
      for (let y = 0; y < this.width; y++) {
        row.push('0');
      }
      this.display.push(row);
    }
  }
  toDisplay() {
    return this.display.map(elt => elt.join('').substring(0,this.width));
  }
  update() {
    if (this.player.alive) {
      this.player.update();
      this.candy.update(this.player);

      this.player.draw(this.display);
      this.candy.draw(this.display);
    } else {
      this.display = heart;
    }
  }
}

module.exports = Game