'use strict'
const shoppingCart = ['bananas', ' milk'];

function addToShoppingCart(grocery) {
  if (shoppingCart.length < 3 ){
    shoppingCart.push(grocery);
  } else {
    shoppingCart.shift();
    shoppingCart.push(grocery);
  }
  var resault = '';
  for( let x of shoppingCart){
    resault = resault + x;
  }
  console.log('you bought ' + resault + '!');
}

addToShoppingCart(' chocolate');
addToShoppingCart(' waffles');
addToShoppingCart(' tea');

