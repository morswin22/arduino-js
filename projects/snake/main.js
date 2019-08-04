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

  // Use "a" and "d" to control the snake from the terminal
  var stdin = process.stdin;
  stdin.setRawMode( true );
  stdin.resume();
  stdin.setEncoding( 'utf8' );
  stdin.on( 'data', function( key ){
    if ( key === '\u0003' ) {
      process.exit();
    } else {
      if (key == 'a') {
        game.player.dir.left();
      } else if (key == 'd') {
        game.player.dir.right();
      }
    }
  });

  matrix.on();

  setInterval(()=>{
    // Draw loop
    game.clearDisplay();
    game.update();
    matrix.draw(game.toDisplay());
  }, 1000/3)

});