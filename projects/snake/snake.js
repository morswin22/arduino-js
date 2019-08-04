class Snake {
  constructor(x,y,len,game) {
    this.dir = {
      x: 0,
      y: 1,
      left: ()=>{
        if (this.dir.y !== 0) {
          this.dir.x = this.dir.y * -1;
          this.dir.y = 0;
        } else if (this.dir.x !== 0) {
          this.dir.y = this.dir.x;
          this.dir.x = 0;
        }
      },
      right: ()=>{
        if (this.dir.y !== 0) {
          this.dir.x = this.dir.y;
          this.dir.y = 0;
        } else if (this.dir.x !== 0) {
          this.dir.y = this.dir.x * -1;
          this.dir.x = 0;
        }
      }
    };
    this.pos = {x, y};
    this.len = len;
    this.history = [];
    this.w = game.width;
    this.h = game.height;
    this.alive = true;
  }
  update() {

    this.pos.x += this.dir.x;
    this.pos.y += this.dir.y;
    if (this.pos.x > this.w || this.pos.x < 0 || this.pos.y > this.h || this.pos.y < 0) {
      console.log('Game over');
      this.dir.x = 0;
      this.dir.y = 0;
      this.alive = false;
    }

    this.history.push({
      x: this.pos.x,
      y: this.pos.y
    });

    this.hisotry = this.history.reverse();
    for (let i = 0; i < this.history.length-this.len; i++) {
      this.history.pop();
    }
    this.hisotry = this.history.reverse();
  }
  draw(table) {
    for (let body of this.history) {
      table[body.x][body.y] = 1;
    }
    return table;
  }
}

module.exports = Snake;