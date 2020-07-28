'use strict'

 const cartForParty = {
  Nachos : 2 ,
  Popcorn : 1.5,
  Peanuts : 0.7,
  Beer : 3,
  chips : 1.3
}

function calculateTotalPrice (cartForParty) {
//   let sum = 0;
//  for ( let x in cartForParty) {
//    sum += cartForParty[x];
//  }
//  console.log(sum);

const values = Object.values(cartForParty);
let sum = 0;
for (const value of values) {
 sum += value;
}
console.log('Total: € ' + sum);
}

calculateTotalPrice(cartForParty);

