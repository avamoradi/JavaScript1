'use strict'

const numChildren = ['1', '2', '3', '4', '0'];
const partnerNames = ['Willem', 'Ali', 'Tom', 'Mohammad', 'Sam'];
const locations = ['Amsterdam', 'Rotterdam', 'Newyork', 'Singapour', 'Dubai'];
const jobs = ['FE Developer', 'BE Developer', 'FS Developer', 'IT Manager', 'Graphic Designer'];

function tellFortune (jobTitle, location, partnerName, numberkids ) {

  const randomNum = () => (Math.floor(Math.random() * 4));
  
   
  return ('You will be ' + jobTitle[randomNum()] + ' in ' + locations[randomNum()] + ', married to ' + partnerNames[randomNum()] + ' with ' + numberkids[randomNum()] + ' kids.')
}

  console.log(tellFortune(jobs, locations, partnerNames, numChildren ));
  console.log(tellFortune(jobs, locations, partnerNames, numChildren));
  console.log(tellFortune(jobs, locations, partnerNames, numChildren));
  console.log(tellFortune(jobs, locations, partnerNames, numChildren));





