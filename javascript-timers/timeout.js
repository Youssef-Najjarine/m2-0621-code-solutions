const h1 = document.querySelector('h1');
function handleSetTimeOut() {
  h1.textContent = 'Hello There';
}

setTimeout(handleSetTimeOut, 2*1000);
