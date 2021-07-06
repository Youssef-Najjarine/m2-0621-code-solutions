const img = document.querySelector('img');
const section = document.querySelector('section');
const pikachuDot = document.querySelector('.dotsDiv button:nth-of-type(1)');
const bulbasaurDot = document.querySelector('.dotsDiv button:nth-of-type(2)');
const charmanderDot = document.querySelector('.dotsDiv button:nth-of-type(3)');
const squirtleDot = document.querySelector('.dotsDiv button:nth-of-type(4)');
const jigglypuffDot = document.querySelector('.dotsDiv button:nth-of-type(5)');

document.addEventListener('click', handleButtons);
let timer = setInterval(handleSetInterval, 3000);

function handleButtons(event) {
  clearInterval(timer);
  timer = setInterval(handleSetInterval, 3000);

  let currentClass = event.target.className;
  if (currentClass === 'fas fa-angle-left leftAngle') {
    displayPreviousSection();
  } else if (currentClass === 'fas fa-angle-right rightAngle') {
    displayNextSection();
  }
  handleDots();
}

function displayPreviousSection() {
  if (section.className === 'pikachu') {
    displayJigglypuff();
  } else if (section.className === 'jigglypuff') {
    displaySquirtle();
  } else if (section.className === 'squirtle') {
    displayCharmander();
  } else if (section.className === 'charmander') {
    displayBulbasaur();
  } else if (section.className === 'bulbasaur') {
    displayPikachu();
  }
}
  function displayNextSection() {
    if (section.className === 'pikachu') {
      displayBulbasaur();
    } else if (section.className === 'bulbasaur') {
      displayCharmander();
    } else if (section.className === 'charmander') {
     displaySquirtle();
    } else if (section.className === 'squirtle') {
      displayJigglypuff();
    } else if (section.className === 'jigglypuff') {
      displayPikachu();
    }
  }

  function handleDots() {
    let dot = event.target;
       if (dot === pikachuDot) {
    displayPikachu();
  } else if (dot === bulbasaurDot) {
    displayBulbasaur();
  } else if (dot === charmanderDot) {
    displayCharmander();
  } else if (dot === squirtleDot) {
    displaySquirtle();
  } else if (dot === jigglypuffDot) {
    displayJigglypuff();
  }
  }
 function handleSetInterval() {
    displayNextSection();
  }

  function displayPikachu() {
    section.className = 'pikachu';
    img.src = 'images/1.png';
    pikachuDot.className = 'fas fa-circle';
    bulbasaurDot.className = 'far fa-circle';
    charmanderDot.className = 'far fa-circle';
    squirtleDot.className = 'far fa-circle';
    jigglypuffDot.className = 'far fa-circle';
  }
function displayBulbasaur() {
  section.className = 'bulbasaur';
  img.src = 'images/2.png';
  pikachuDot.className = 'far fa-circle';
  bulbasaurDot.className = 'fas fa-circle';
  charmanderDot.className = 'far fa-circle';
  squirtleDot.className = 'far fa-circle';
  jigglypuffDot.className = 'far fa-circle';
}
function displayCharmander() {
  section.className = 'charmander';
  img.src = 'images/3.png';
  pikachuDot.className = 'far fa-circle';
  bulbasaurDot.className = 'far fa-circle';
  charmanderDot.className = 'fas fa-circle';
  squirtleDot.className = 'far fa-circle';
  jigglypuffDot.className = 'far fa-circle';
}
function displaySquirtle() {
  section.className = 'squirtle';
  img.src = 'images/4.png';
  pikachuDot.className = 'far fa-circle';
  bulbasaurDot.className = 'far fa-circle';
  charmanderDot.className = 'far fa-circle';
  squirtleDot.className = 'fas fa-circle';
  jigglypuffDot.className = 'far fa-circle';
}
function displayJigglypuff() {
  section.className = 'jigglypuff';
  img.src = 'images/5.png';
  pikachuDot.className = 'far fa-circle';
  bulbasaurDot.className = 'far fa-circle';
  charmanderDot.className = 'far fa-circle';
  squirtleDot.className = 'far fa-circle';
  jigglypuffDot.className = 'fas fa-circle';
}
