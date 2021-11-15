const takeAChance = require('./take-a-chance');

const myPromise = takeAChance('Youssef Najjarine');

myPromise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error.message);
  });
