const pikachuSection = document.querySelector('.pikachu');
const bulbasaurSection = document.querySelector('.bulbasaur');
const charmanderSection = document.querySelector('.charmander');
const squirtleSection = document.querySelector('.squirtle');
const jigglypuffSection = document.querySelector('.jigglypuff');

document.addEventListener('click', handleButtons);
let timer = setInterval(handleSetInterval, '3000');


function handleButtons(event) {
  clearInterval(timer);
  timer = setInterval(handleSetInterval, '3000');
  currentScreen = event.target.closest('section').className;
  currentClass = event.target.className;
  if (currentClass === 'fas fa-angle-left leftAngle') {
    revealPreviousSection();
  } else if (currentClass === 'fas fa-angle-right rightAngle') {
    revealNextSection();
  }
  handleDots();
}


function revealPreviousSection() {
  if (currentScreen === 'pikachu') {
    revealJigglypuffSection();
  } else if (currentScreen === 'bulbasaur') {
    revealPikachuSection();
  } else if (currentScreen === 'charmander') {
    revealBulbasaurSection();
  } else if (currentScreen === 'squirtle') {
    revealCharmanderSection();
  } else if (currentScreen === 'jigglypuff') {
    revealSquirtleSection();
  }
}
function revealNextSection() {
  if (currentScreen === 'pikachu') {
    revealBulbasaurSection();
  } else if (currentScreen === 'bulbasaur') {
    revealCharmanderSection();
  } else if (currentScreen === 'charmander') {
    revealSquirtleSection();
  } else if (currentScreen === 'squirtle') {
  revealJigglypuffSection();
  } else if (currentScreen === 'jigglypuff') {
    revealPikachuSection();
  }
}
function handleDots() {
  if (currentClass === 'fas fa-circle pikachuDot' || currentClass === 'far fa-circle pikachuDot') {
    revealPikachuSection();
  } else if (currentClass === 'fas fa-circle bulbasaurDot' || currentClass === 'far fa-circle bulbasaurDot') {
    revealBulbasaurSection();
  } else if (currentClass === 'fas fa-circle charmanderDot' || currentClass === 'far fa-circle charmanderDot') {
    revealCharmanderSection();
  } else if (currentClass === 'fas fa-circle squirtleDot' || currentClass === 'far fa-circle squirtleDot') {
    revealSquirtleSection();
  } else if (currentClass === 'fas fa-circle jigglypuffDot' || currentClass === 'far fa-circle jigglypuffDot') {
    revealJigglypuffSection()
  }
}
function handleSetInterval() {
  if (currentScreen === 'pikachu') {
    currentScreen = 'bulbasaur';
    revealBulbasaurSection();
  } else if (currentScreen === 'bulbasaur') {
    currentScreen = 'charmander';
    revealCharmanderSection();
  } else if (currentScreen === 'charmander') {
    currentScreen = 'squirtle';
    revealSquirtleSection();
  } else if (currentScreen === 'squirtle') {
    currentScreen = 'jigglypuff';
    revealJigglypuffSection();
  } else if (currentScreen === 'jigglypuff') {
    currentScreen = 'pikachu';
    revealPikachuSection();
  }
}
function revealPikachuSection() {
  currentScreen = 'pikachu';
  pikachuSection.classList.remove('hidden');
  bulbasaurSection.classList.add('hidden');
  charmanderSection.classList.add('hidden');
  squirtleSection.classList.add('hidden');
  jigglypuffSection.classList.add('hidden');
}
function revealBulbasaurSection() {
  currentScreen = 'bulbasaur';
  bulbasaurSection.classList.remove('hidden');
  pikachuSection.classList.add('hidden');
  charmanderSection.classList.add('hidden');
  squirtleSection.classList.add('hidden');
  jigglypuffSection.classList.add('hidden');
}
function revealCharmanderSection() {
  currentScreen = 'charmander';
  charmanderSection.classList.remove('hidden');
  pikachuSection.classList.add('hidden');
  bulbasaurSection.classList.add('hidden');
  squirtleSection.classList.add('hidden');
  jigglypuffSection.classList.add('hidden');
}
function revealSquirtleSection() {
  currentScreen = 'squirtle';
  squirtleSection.classList.remove('hidden');
  pikachuSection.classList.add('hidden');
  bulbasaurSection.classList.add('hidden');
  charmanderSection.classList.add('hidden');
  jigglypuffSection.classList.add('hidden');
}
function revealJigglypuffSection() {
  currentScreen = 'jigglypuff';
  jigglypuffSection.classList.remove('hidden');
  pikachuSection.classList.add('hidden');
  bulbasaurSection.classList.add('hidden');
  charmanderSection.classList.add('hidden');
  squirtleSection.classList.add('hidden');
}
