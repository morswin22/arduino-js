const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  const heart = [
    "01100110",
    "10011001",
    "10000001",
    "10000001",
    "01000010",
    "00100100",
    "00011000",
    "00000000"
  ];

  const matrix = new five.Led.Matrix({
    pins: {
      data: 4,
      clock: 2,
      cs: 3
    }
  });


  matrix.on();

  let msg = "msg".split("");

  function next() {
    let c;

    if (c = msg.shift()){
      matrix.draw(c);
      setTimeout(next, 1000);
    }  
  }
  next();


  board.repl.inject({
    matrix: matrix,
    heart: function() {
      matrix.draw(heart);
    }
  });

  board.on("exit", () => {
    matrix.off();
  });
}); 