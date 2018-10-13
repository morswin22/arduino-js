const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  const leds = new five.Leds([2, 3, 4, 5, 6]);
  let pot = new five.Sensor("A0");

  pot.scale([-1, 4]).on("change", function() {
    var lastIndex = Math.round(this.value);

    if (lastIndex === -1) {
      leds.off();
    } else {
      leds.each(function(led, index) {
        if (index <= lastIndex) {
          led.on();
        } else {
          led.off();
        }
      });
    }
  });
}); 
