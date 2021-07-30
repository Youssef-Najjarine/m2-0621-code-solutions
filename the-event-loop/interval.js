let currentCount = 3;

let timer = setInterval(
  () => {
  console.log(currentCount);
  currentCount--;
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(timer);
  }
}, 1000);
