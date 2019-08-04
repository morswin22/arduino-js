const Snake = require("./snake");
const Candy = require("./candy");

class Game {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.clearDisplay();
    this.player = new Snake(width/2, height/2, 2, this);
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
      this.candy.eat(this.player);
      this.player.draw(this.display);

      this.candy.draw(this.display);

      console.log(this.player.history);
    } else {
      this.display = [
        "01100110".split(""),
        "10011001".split(""),
        "10000001".split(""),
        "10000001".split(""),
        "01000010".split(""),
        "00100100".split(""),
        "00011000".split(""),
        "00000000".split("")
      ];
    }
  }
}

module.exports = Game