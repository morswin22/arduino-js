class Candy {
  constructor(w,h) {
    this.w = w;
    this.h = h;
    this.i = 0;
    this.blinkingRate = 2;
    this.randomize();
  }
  randomize() {
    this.pos = {
      x: Math.floor(Math.random()*this.w),
      y: Math.floor(Math.random()*this.h)
    };
  }
  update(player) {
    this.i++;
    if (player.pos.x == this.pos.x && player.pos.y == this.pos.y) {
      this.randomize();
      player.len++;
      console.log('Candy was eaten! Player score: '+player.len);
    }
  }
  draw(table) {
    if (this.i % this.blinkingRate == 0) table[this.pos.x][this.pos.y] = '1';
  }
}

module.exports = Candy;