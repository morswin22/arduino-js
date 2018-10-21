const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  const buzzer = new five.Piezo(10);
  const led1 = new five.Led(11);
  const led2 = new five.Led(12);

  const c = 261;
  const d = 294;
  const e = 329;
  const f = 349;
  const g = 391;
  const gS = 415;
  const a = 440;
  const aS = 455;
  const b = 466;
  const cH = 523;
  const cSH = 554;
  const dH = 587;
  const dSH = 622;
  const eH = 659;
  const fH = 698;
  const fSH = 740;
  const gH = 784;
  const gSH = 830;
  const aH = 880;

  let counter = 0;

  fistSection();
  secondSection();

  play(f, 250);  
  play(gS, 500);  
  play(f, 350);  
  play(a, 125);
  play(cH, 500);
  play(a, 375);  
  play(cH, 125);
  play(eH, 650);
  
  setTimeout(500);

  secondSection();

  play(f, 250);  
  play(gS, 500);  
  play(f, 375);  
  play(cH, 125);
  play(a, 500);  
  play(f, 375);  
  play(cH, 125);
  play(a, 650);  

  setTimeout(650);



  function play(note, duration) {
    buzzer.frequency(note, duration);

    if (counter % 2 == 0) {
      led1.on();
      setTimeout(duration);
      led1.off();
    } else {
      led2.on();
      setTimeout(duration);
      led2.off();
    }

    setTimeout(50);

    counter++;
  }

  function firstSection() {
    play(a, 500);
    play(a, 500);    
    play(a, 500);
    play(f, 350);
    play(cH, 150);  
    play(a, 500);
    play(f, 350);
    play(cH, 150);
    play(a, 650);

    setTimeout(500);

    play(eH, 500);
    play(eH, 500);
    play(eH, 500);  
    play(fH, 350);
    play(cH, 150);
    play(gS, 500);
    play(f, 350);
    play(cH, 150);
    play(a, 650);

    setTimeout(500);
  } 

  function secondSection() {
    play(aH, 500);
    play(a, 300);
    play(a, 150);
    play(aH, 500);
    play(gSH, 325);
    play(gH, 175);
    play(fSH, 125);
    play(fH, 125);    
    play(fSH, 250);

    setTimeout(325);

    play(aS, 250);
    play(dSH, 500);
    play(dH, 325);  
    play(cSH, 175);  
    play(cH, 125);  
    play(b, 125);  
    play(cH, 250);  

    setTimeout(350);
  }

}); 