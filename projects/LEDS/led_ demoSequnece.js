var five = require("johnny-five");
const board = new five.Board();

let loop = true;
let led;

let demoSequence = [{
    method: "pulse",
    args: [1000],
    duration: 5000
  }, {
    method: "strobe",
    args: [500],
    duration: 3000
  }, {
    method: "fadeIn",
    args: [
      2000,
      function() {
        console.log("fadeIn complete!");
      }
    ],
    duration: 2500
  }, {
    method: "fadeOut",
    args: [
      5000,
      function() {
        console.log("fadeOut complete!");
      }
    ],
    duration: 5500
  }, {
    method: "brightness",
    args: [10],
    duration: 3000
  }, {
    method: "off"
  }];
  

const execute = (step) => {
    let method = demoSequence[step].method;
    let args = demoSequence[step].args;
    let duration = demoSequence[step].duration || 3000;

    console.log("led." + method + "(" + (args ? args.join() : "") + ")");

    five.Led.prototype[method].apply(led, args);

    step++;

    if (step === demoSequence.length) {
        if (loop) {
            step = 0;
        } else {
            process.exit(0);
        }
    }

    board.wait(duration, function() {
        execute(step);
    });
}

//after succesful initialisation this code will run 
board.on("ready", function() {
    led = new five.Led(process.argv[2] || (11));
    
    execute(0);

    this.on("exit", () => {
        led.stop();
        led.off();
    })
});