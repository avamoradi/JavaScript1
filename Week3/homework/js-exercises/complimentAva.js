'use strict'

function giveCompliment(ava) {
  let compliments = ['kind','smart','brave','adorable','cute','great','calm','magnificent','polite','gentle'];
  let randomNum = Math.round(Math.random()*10);
  return ('You Are ' + compliments[randomNum] + ' ' + ava + '!');
}

  console.log(giveCompliment('Ava'));
  console.log(giveCompliment('Ava'));
  console.log(giveCompliment('Ava'));