var five = require("johnny-five");
const board = new five.Board();

//after succesful initialisation this code will run 
board.on("ready", function() {
    const led = new five.Led(10);

    led.pulse();

    this.wait(5000, function() {
        led.stop();
        led.off();
    });
});