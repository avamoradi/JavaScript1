'use strict'

let grade = Math.floor(Math.random() * 100); // it give us a random number between 1 to 100

console.log(myFunction(grade));

function myFunction(grade) {
 let x = (grade * 100) / 100; // this line calculates the percentages
  if (x >= 90 && x <= 100) {
    return ('you got a A' + x + '%')};
  if (x >= 80 && x<= 89) {
    return ('you got a B '+ x + '%' )};
  if (x >= 70 && x<= 79) {
    return('you got a C '+ x + '%')};
  if (x >= 60 && x<= 69) {
    return('you got a D '+ x + '%')};
  if (x >=50 && x<= 59){
    return('you got a E ' + x + '%')}
  else {
    return('you got a F ' + x + '%');
  }
}



