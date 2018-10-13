var five = require("johnny-five");
const board = new five.Board();

//after succesful initialisation this code will run 
board.on("ready", function() {
    const led = new five.Led(10);

    led.pulse({
        easing: "linear",
        duration: 3000,
        cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
        keyFrames: [0, 10, 0, 50, 0 , 255],
        onstop: function() {
            console.log("animation finished");
        }
    });

    //this code runs code above for some amount of time and then does something
    this.wait(12000, function() {
        led.stop();
        led.off();
    });
});