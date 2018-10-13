var five = require("johnny-five");
const board = new five.Board();

//after succesful initialisation this code will run 
board.on("ready", function() {
    const led = new five.Led(11);

    led.fade({
        easing: "linear",
        duration: 1000,
        cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
        keyFrames: [0, 255, 25, 150, 100, 125],
        onstop: () => {
            console.log("animation finished");
        }
    })

    this.wait(2000, function() {
        led.fadeOut();
    })
});