const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  const array = new five.Leds([3, 5, 6, 10]);
  
  array.pulse();

  // this.on("exit", function() {
  //   // for (led of array) {
  //   //   led.stop();
  //   //   led.off();
  //   // }
  // });
}); 
