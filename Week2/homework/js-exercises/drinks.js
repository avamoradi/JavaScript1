'use strict'

const drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];

for (let i = 0 ; i < 5 ; i++) {
  switch (i) {
    case 0 :
    case 1 :
    drinkTray[i] = drinkTypes[0];
    break;

    case 2 :
    case 3:
      drinkTray[i] = drinkTypes[1];
    break;

    case 4 :
      drinkTray[i] = drinkTypes[2];  
  }
}

console.log("Hey Guys, I bought a " + drinkTray);
