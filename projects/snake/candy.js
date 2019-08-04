class Candy {
  constructor(w,h) {
    this.w = w;
    this.h = h;
    this.randomize();
  }
  randomize() {
    this.pos = {
      x: Math.floor(Math.random()*this.w),
      y: Math.floor(Math.random()*this.h)
    };
  }
  eat(player) {
    if (player.pos.x == this.pos.x && player.pos.y == this.pos.y) {
      this.randomize();
      player.len++;
    }
  }
  draw(table) {
    table[this.pos.x][this.pos.y] = '1';
  }
}

module.exports = Candy;