var five = require("johnny-five");
var board = new five.Board();
let buttonLeft, buttonRight;

const Game = require("./game");

board.on("ready", function() {

  const game = new Game(8,8);

  var matrix = new five.Led.Matrix({
    pins: {
      data: 12,
      clock: 10,
      cs: 11
    }
  });

  buttonLeft = new five.Button(4);
  buttonRight = new five.Button(5);

  buttonLeft.on('down', e=>{
    game.player.dir.left();
  })
  buttonRight.on('down', e=>{
    game.player.dir.right();
  })

  matrix.on();

  setInterval(()=>{
    // Draw loop
    game.clearDisplay();
    game.update();
    matrix.draw(game.toDisplay());
  }, 1000/3)

});