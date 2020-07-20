'use strict'

let grade = Math.floor(Math.random() * 100); 

console.log(myFunction(grade));

function myFunction(x) {
    if (x >= 90 && x <= 100) {
     return ('Grade A (90% - 100%)')};
    if (x >= 80 && x<= 89) {
     return ('Grade B (80% - 89%)') };
    if (x >= 70 && x<= 79) {
     return('Grade C (70% - 79%)')};
    if (x >= 60 && x<= 69) {
     return('Grade D (60% - 69%)')};
    if (x >=50 && x<= 59){
     return('Grade E (50% - 59%)')}
    else {
     return('Grade F (0% - 49%)');
   }
}



