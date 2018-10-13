const five = require("johnny-five");
const board = new five.Board();


board.on("ready", () => {
  let number = 0;
  const leds = new five.Leds([3, 4, 5, 6, 7, 8, 9, 10].reverse());
  const button = new five.Button(2);

  leds.each((led, index) => {
    led.on();
    setTimeout(() => {
      led.off(); 
    }, 100 *(index + 1));
  });

  function update() {
    number++;
    let copy = number;
    let list = [];

    while (true) {
      list.push(copy % 2);
      copy = Math.floor(copy / 2);
      if (!copy) {
        break;
      }
    }

    while (list.length < leds.length) {
      list.push(0);
    }

    while (list.length > leds.length) {
      list.pop();
    }
 
    list.reverse();
    leds.each((led, index) => {
      if (list[index]) {
        led.on();
      } else {
        led.off();
      }
    }); 
  }

  button.on("up", () => {
    update();
  });

  board.on("exit", () => {
    leds.stop()
    leds.off();
  })
}); 