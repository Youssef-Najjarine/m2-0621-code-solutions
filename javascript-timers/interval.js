const h1 = document.querySelector('h1');

let myTimer = setInterval(handleSetInterval, 1000);
function handleSetInterval() {
  console.log('hi');
if (h1.textContent === '4') {
  h1.textContent = '3';
} else if (h1.textContent === '3') {
  console.log('hi');
  h1.textContent = '2';
} else if (h1.textContent === '2') {
  h1.textContent = '1';
} else if (h1.textContent === '1') {
  h1.textContent = '~Earth Beeeelooowww Us~';
clearInterval(myTimer);
}
}
