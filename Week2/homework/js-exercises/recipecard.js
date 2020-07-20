'use strict'

const myMeal = {};
myMeal.mealName = "Cheese Sandwich";
myMeal.Serves = 1;
myMeal.Ingredients = ['2 slices white bread', '1 tablespoons butter', '1 slices Cheddar cheese'];


const keys = Object.keys(myMeal);

for (const key of keys){
  console.log(key + " : " + myMeal[key]);
}

for (let i = 0; i < keys.length; i++ ) {
  let key = keys[i];
  console.log(key + " : " + myMeal[key]);
}