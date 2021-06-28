const pikachuDiv = document.querySelector('.pikachu');
const pikachuLeftAngle = document.querySelector('.pikachuLeftAngle');
const pikachuRightAngle = document.querySelector('.pikachuRightAngle');
const pikachuDot1 = document.querySelector('.pikachuDot1');
const pikachuDot2 = document.querySelector('.pikachuDot2');
const pikachuDot3 = document.querySelector('.pikachuDot3');
const pikachuDot4 = document.querySelector('.pikachuDot4');
const pikachuDot5 = document.querySelector('.pikachuDot5');

const bulbasaurDiv = document.querySelector('.bulbasaur');
const bulbasaurLeftAngle = document.querySelector('.bulbasaurLeftAngle');
const bulbasaurRightAngle = document.querySelector('.bulbasaurRightAngle');
const bulbasaurDot1 = document.querySelector('.bulbasaurDot1');
const bulbasaurDot2 = document.querySelector('.bulbasaurDot2');
const bulbasaurDot3 = document.querySelector('.bulbasaurDot3');
const bulbasaurDot4 = document.querySelector('.bulbasaurDot4');
const bulbasaurDot5 = document.querySelector('.bulbasaurDot5');

const charmanderDiv = document.querySelector('.charmander');
const charmanderLeftAngle = document.querySelector('.charmanderLeftAngle');
const charmanderRightAngle = document.querySelector('.charmanderRightAngle');
const charmanderDot1 = document.querySelector('.charmanderDot1');
const charmanderDot2 = document.querySelector('.charmanderDot2');
const charmanderDot3 = document.querySelector('.charmanderDot3');
const charmanderDot4 = document.querySelector('.charmanderDot4');
const charmanderDot5 = document.querySelector('.charmanderDot5');

const squirtleDiv = document.querySelector('.squirtle');
const squirtleLeftAngle = document.querySelector('.squirtleLeftAngle');
const squirtleRightAngle = document.querySelector('.squirtleRightAngle');
const squirtleDot1 = document.querySelector('.squirtleDot1');
const squirtleDot2 = document.querySelector('.squirtleDot2');
const squirtleDot3 = document.querySelector('.squirtleDot3');
const squirtleDot4 = document.querySelector('.squirtleDot4');
const squirtleDot5 = document.querySelector('.squirtleDot5');

const jigglypuffDiv = document.querySelector('.jigglypuff');
const jigglypuffLeftAngle = document.querySelector('.jigglypuffLeftAngle');
const jigglypuffRightAngle = document.querySelector('.jigglypuffRightAngle');
const jigglypuffDot1 = document.querySelector('.jigglypuffDot1');
const jigglypuffDot2 = document.querySelector('.jigglypuffDot2');
const jigglypuffDot3 = document.querySelector('.jigglypuffDot3');
const jigglypuffDot4 = document.querySelector('.jigglypuffDot4');
const jigglypuffDot5 = document.querySelector('.jigglypuffDot5');


pikachuLeftAngle.addEventListener('click', handlepikachuLeftAngle);
pikachuRightAngle.addEventListener('click', handlepikachuRightAngle);
pikachuDot1.addEventListener('click', handlePikachuDot1);
pikachuDot2.addEventListener('click', handlePikachuDot2);
pikachuDot3.addEventListener('click', handlePikachuDot3);
pikachuDot4.addEventListener('click', handlePikachuDot4);
pikachuDot5.addEventListener('click', handlePikachuDot5);

bulbasaurLeftAngle.addEventListener('click', handleBulbasaurLeftAngle);
bulbasaurRightAngle.addEventListener('click', handleBulbasaurRightAngle);
bulbasaurDot1.addEventListener('click', handleBulbasaurDot1);
bulbasaurDot2.addEventListener('click', handleBulbasaurDot2);
bulbasaurDot3.addEventListener('click', handleBulbasaurDot3);
bulbasaurDot4.addEventListener('click', handleBulbasaurDot4);
bulbasaurDot5.addEventListener('click', handleBulbasaurDot5);

charmanderLeftAngle.addEventListener('click', handleCharmanderLeftAngle);
charmanderRightAngle.addEventListener('click', handleCharmanderRightAngle);
charmanderDot1.addEventListener('click', handleCharmanderDot1);
charmanderDot2.addEventListener('click', handleCharmanderDot2);
charmanderDot3.addEventListener('click', handleCharmanderDot3);
charmanderDot4.addEventListener('click', handleCharmanderDot4);
charmanderDot5.addEventListener('click', handleCharmanderDot5);

squirtleLeftAngle.addEventListener('click', handleSquirtleLeftAngle);
squirtleRightAngle.addEventListener('click', handleSquirtleRightAngle);
squirtleDot1.addEventListener('click', handleSquirtleDot1);
squirtleDot2.addEventListener('click', handleSquirtleDot2);
squirtleDot3.addEventListener('click', handleSquirtleDot3);
squirtleDot4.addEventListener('click', handleSquirtleDot4);
squirtleDot5.addEventListener('click', handleSquirtleDot5);

jigglypuffLeftAngle.addEventListener('click', handleJigglypuffLeftAngle);
jigglypuffRightAngle.addEventListener('click', handleJigglypuffRightAngle);
jigglypuffDot1.addEventListener('click', handleJigglypuffDot1);
jigglypuffDot2.addEventListener('click', handleJigglypuffDot2);
jigglypuffDot3.addEventListener('click', handleJigglypuffDot3);
jigglypuffDot4.addEventListener('click', handleJigglypuffDot4);
jigglypuffDot5.addEventListener('click', handleJigglypuffDot5);

setInterval(handleSetInterval, '3000');
let currentScreen = 'pikachu';
function handleSetInterval() {
  if (currentScreen === 'pikachu') {
    currentScreen = 'bulbasaur';
    pikachuDiv.classList.add('hidden');
    bulbasaurDiv.classList.remove('hidden');
    charmanderDiv.classList.add('hidden');
    squirtleDiv.classList.add('hidden');
    jigglypuffDiv.classList.add('hidden');
  } else if (currentScreen === 'bulbasaur') {
    currentScreen = 'charmander';
    pikachuDiv.classList.add('hidden');
    bulbasaurDiv.classList.add('hidden');
    charmanderDiv.classList.remove('hidden');
    squirtleDiv.classList.add('hidden');
    jigglypuffDiv.classList.add('hidden');
  } else if (currentScreen === 'charmander') {
    currentScreen = 'squirtle';
    pikachuDiv.classList.add('hidden');
    bulbasaurDiv.classList.add('hidden');
    charmanderDiv.classList.add('hidden');
    squirtleDiv.classList.remove('hidden');
    jigglypuffDiv.classList.add('hidden');
  } else if (currentScreen === 'squirtle') {
    currentScreen = 'jigglypuff';
    pikachuDiv.classList.add('hidden');
    bulbasaurDiv.classList.add('hidden');
    charmanderDiv.classList.add('hidden');
    squirtleDiv.classList.add('hidden');
    jigglypuffDiv.classList.remove('hidden');
  } else if (currentScreen === 'jigglypuff') {
    currentScreen = 'pikachu';
    pikachuDiv.classList.remove('hidden');
    bulbasaurDiv.classList.add('hidden');
    charmanderDiv.classList.add('hidden');
    squirtleDiv.classList.add('hidden');
    jigglypuffDiv.classList.add('hidden');
  }
}
function handlepikachuLeftAngle() {
  currentScreen = 'jigglypuff';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.remove('hidden');
};
function handlepikachuRightAngle() {
  currentScreen = 'bulbasaur';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.remove('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handlePikachuDot1() {
  currentScreen = 'pikachu';
  pikachuDiv.classList.remove('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handlePikachuDot2() {
  currentScreen = 'bulbasaur';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.remove('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handlePikachuDot3() {
  currentScreen = 'charmander';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.remove('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handlePikachuDot4() {
  currentScreen = 'squirtle';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.remove('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handlePikachuDot5() {
  currentScreen = 'jigglypuff';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.remove('hidden');
};

function handleBulbasaurLeftAngle() {
  currentScreen = 'pikachu';
  pikachuDiv.classList.remove('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleBulbasaurRightAngle() {
  currentScreen = 'charmander';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.remove('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleBulbasaurDot1() {
  currentScreen = 'pikachu';
  pikachuDiv.classList.remove('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleBulbasaurDot2() {
  currentScreen = 'bulbasaur';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.remove('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleBulbasaurDot3() {
  currentScreen = 'charmander';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.remove('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleBulbasaurDot4() {
  currentScreen = 'squirtle';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.remove('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleBulbasaurDot5() {
  currentScreen = 'jigglypuff';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.remove('hidden');
};

function handleCharmanderLeftAngle() {
  currentScreen = 'bulbasaur';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.remove('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleCharmanderRightAngle() {
  currentScreen = 'squirtle';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.remove('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleCharmanderDot1() {
  currentScreen = 'pikachu';
  pikachuDiv.classList.remove('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleCharmanderDot2() {
  currentScreen = 'bulbasaur';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.remove('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleCharmanderDot3() {
  currentScreen = 'charmander';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.remove('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleCharmanderDot4() {
  currentScreen = 'squirtle';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.remove('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleCharmanderDot5() {
  currentScreen = 'jigglypuff';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.remove('hidden');
};

function handleSquirtleLeftAngle() {
  currentScreen = 'charmander';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.remove('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleSquirtleRightAngle() {
  currentScreen = 'jigglypuff';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.remove('hidden');
};
function handleSquirtleDot1() {
  currentScreen = 'pikachu';
  pikachuDiv.classList.remove('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleSquirtleDot2() {
  currentScreen = 'bulbasaur';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.remove('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleSquirtleDot3() {
  currentScreen = 'charmander';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.remove('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleSquirtleDot4() {
  currentScreen = 'squirtle';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.remove('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleSquirtleDot5() {
  currentScreen = 'jigglypuff';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.remove('hidden');
};

function handleJigglypuffLeftAngle() {
  currentScreen = 'squirtle';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.remove('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleJigglypuffRightAngle() {
  currentScreen = 'pikachu';
  pikachuDiv.classList.remove('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleJigglypuffDot1() {
  currentScreen = 'pikachu';
  pikachuDiv.classList.remove('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleJigglypuffDot2() {
  currentScreen = 'bulbasaur';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.remove('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleJigglypuffDot3() {
  currentScreen = 'charmander';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.remove('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleJigglypuffDot4() {
  currentScreen = 'squirtle';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.remove('hidden');
  jigglypuffDiv.classList.add('hidden');
};
function handleJigglypuffDot5() {
  currentScreen = 'jigglypuff';
  pikachuDiv.classList.add('hidden');
  bulbasaurDiv.classList.add('hidden');
  charmanderDiv.classList.add('hidden');
  squirtleDiv.classList.add('hidden');
  jigglypuffDiv.classList.remove('hidden');
};
