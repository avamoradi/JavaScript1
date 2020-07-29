'use strict'

function validateCreditCardNumber(srtNum) {
  let finalCheck = true ;

  // if the CCnumber is less than 16 digit
  if (srtNum.length !== 16 ) { 
    console.log('Invalid, The input ' + srtNum  + ' shoul be 16 digit!');
    finalCheck = false;
    return;
  }

  // if CCnumber is only number
  let allNumber;
  for ( let i = 0; i < srtNum.length; i++) {
    let checkNum = srtNum[i];
    if (checkNum >= 0 &&  checkNum <= 9 ) {
      allNumber = true;
    } else  {
      allNumber = false;
      break;
    }
  }
  if (allNumber == false){
    console.log('Invalid, The input ' + srtNum  + ' should contain only Numbers!');
    finalCheck = false;
    return;
  }
 
  // check if we have at least 2 different number
  let indexzero = srtNum[0];
  let check ;
  for (let y = 1 ; y < srtNum.length; y++ ) {
    if (indexzero == srtNum[y]) {
      check = true;
    } else {
      check = false;
      break;
    }
  }
  if (check == true) {
    console.log('Invalid! The input ' + srtNum + ' should contain at least 2 different types of numbers!');
    finalCheck = false;
    return;
  }

  // if CCnumber is an even number
  let lastIndex = srtNum[15];
  if (lastIndex % 2 !== 0) {
    console.log('Invalid, The input ' + srtNum  + ' should be an even number');
    finalCheck =  false;
    return;
  }
  
  // the sum should be more than 16
  let sum = 0;
  for (let i = 0 ; i< srtNum.length; i++) {
    sum += parseInt(srtNum[i]);
  }
  if (sum <= 16 ) {
    console.log('Invalid, The input ' + srtNum  + ' sum of digits is less than 16');
    finalCheck = false;
    return;
  }

  // if everything is good , and all the conditions are valid .
  if (finalCheck == true) {
    console.log('Success! The input ' + srtNum + ' is a valid credit card number!');
    return;
  }
} 



validateCreditCardNumber('a92332119c011112');
validateCreditCardNumber('4444444444444444');
validateCreditCardNumber('6666666666661666');
