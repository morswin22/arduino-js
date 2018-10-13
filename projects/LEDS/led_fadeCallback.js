var five = require("johnny-five");
const board = new five.Board();

//after succesful initialisation this code will run 
board.on("ready", () => {
    const leds = new five.Leds([11, 10, 9, 6, 5, 3]);

    const timing = 250;
    let randomFade = true;
    let fadeIndex = 0;
    let ledCount = leds.length;

    const fadeNext = () => {
        let candidateIndex = fadeIndex;
        leds[fadeIndex].fadeIn(timing);

        if (randomFade) {
            while (candidateIndex === fadeIndex) {
                candidateIndex = Math.round(Math.random() * (ledCount - 1));
            }
        } else {
            candidateIndex = (fadeIndex < ledCount - 1) ? fadeIndex + 1 : 0;
        }

        fadeIndex = candidateIndex;

        leds[fadeIndex].fadeOut(timing, fadeNext)
    };

    leds.on();
    leds[fadeIndex].fadeOut(timing, fadeNext); 
});