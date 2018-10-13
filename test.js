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

  
}); 



// void loop()
// {

//   //Play first section
//   firstSection();

//   //Play second section
//   secondSection();

//   //Variant 1
//   beep(f, 250);  
//   beep(gS, 500);  
//   beep(f, 350);  
//   beep(a, 125);
//   beep(cH, 500);
//   beep(a, 375);  
//   beep(cH, 125);
//   beep(eH, 650);

//   delay(500);

//   //Repeat second section
//   secondSection();

//   //Variant 2
//   beep(f, 250);  
//   beep(gS, 500);  
//   beep(f, 375);  
//   beep(cH, 125);
//   beep(a, 500);  
//   beep(f, 375);  
//   beep(cH, 125);
//   beep(a, 650);  

//   delay(650);
// }

// void beep(int note, int duration)
// {
//   //Play tone on buzzerPin
//   tone(buzzerPin, note, duration);

//   //Play different LED depending on value of 'counter'
//   if(counter % 2 == 0)
//   {
//     digitalWrite(ledPin1, HIGH);
//     delay(duration);
//     digitalWrite(ledPin1, LOW);
//   }else
//   {
//     digitalWrite(ledPin2, HIGH);
//     delay(duration);
//     digitalWrite(ledPin2, LOW);
//   }

//   //Stop tone on buzzerPin
//   noTone(buzzerPin);

//   delay(50);

//   //Increment counter
//   counter++;
// }

// void firstSection()
// {
//   beep(a, 500);
//   beep(a, 500);    
//   beep(a, 500);
//   beep(f, 350);
//   beep(cH, 150);  
//   beep(a, 500);
//   beep(f, 350);
//   beep(cH, 150);
//   beep(a, 650);

//   delay(500);

//   beep(eH, 500);
//   beep(eH, 500);
//   beep(eH, 500);  
//   beep(fH, 350);
//   beep(cH, 150);
//   beep(gS, 500);
//   beep(f, 350);
//   beep(cH, 150);
//   beep(a, 650);

//   delay(500);
// }

// void secondSection()
// {
//   beep(aH, 500);
//   beep(a, 300);
//   beep(a, 150);
//   beep(aH, 500);
//   beep(gSH, 325);
//   beep(gH, 175);
//   beep(fSH, 125);
//   beep(fH, 125);    
//   beep(fSH, 250);

//   delay(325);

//   beep(aS, 250);
//   beep(dSH, 500);
//   beep(dH, 325);  
//   beep(cSH, 175);  
//   beep(cH, 125);  
//   beep(b, 125);  
//   beep(cH, 250);  

//   delay(350);
// }