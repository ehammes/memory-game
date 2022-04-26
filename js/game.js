'use strict';

// ********************** Global Variables ************************************

const MATCHESREQUIRED = 8;
const STARTING_TIME = 60;
const cardArray = [];
const imgNameArray = fillImgNameArray();
let timeRemaining = STARTING_TIME;
let timerID;
let prevCardID = null;
// let userName = 'default_user';


// card1 always in postiion 1, etc

// ********************** DOM References **************************************

// id = game
// create divs for game cards
// append cards to section
const gameContainer = document.getElementById('game');
const startButton = document.getElementById('start-game');
const resetButton = document.getElementById('reset-game');
const timer = document.getElementById('timer');


// ********************** Constructor *****************************************

// Constructor, fills img path and alt name values then pushes to overall cardArray
function CARD(randomImageName) {
  this.img = `img/${randomImageName}.jpeg`;
  this.alt = randomImageName;
  cardArray.push(this);
}

// construct highscore object
// save it to local storage - correct index according to score rank


// ********************** Helpers, Executables ********************************

// check local storage for username
if (localStorage.getItem('userName')) {
  let userName = localStorage.getItem('userName');
  let userNameDiv = document.getElementById('username');
  userNameDiv.textContent = userName;
}
timer.textContent = `Time Remaining: ${timeRemaining}`;

// countdown timer



fillCards();
placeCardDivs();
fillCardDivs();

// places blank divs on page and assigns corresponding id value
function placeCardDivs() {
  for(let i = 0; i < MATCHESREQUIRED * 2; i++) {
    let currCard = document.createElement('div');
    gameContainer.appendChild(currCard);
    currCard.id = `card-${i}`;
  }
}

// Picks a random image and fill two Card Objects with that image
function fillCards() {
  let pickedIndices = [];
  for(let i = 1; i <= MATCHESREQUIRED; i++) {
    let randomImageName = getRandomImage(pickedIndices);
    new CARD(randomImageName);
    new CARD(randomImageName);
  }
}

// Returns a string randomly picked from imgNameArray representing the file name of the image
function getRandomImage(pickedIndices) {
  let imageIndex = Math.floor(Math.random() * (imgNameArray.length));
  while(pickedIndices.includes(imageIndex)) {
    imageIndex = Math.floor(Math.random() * (imgNameArray.length));
  }
  pickedIndices.push(imageIndex);
  return imgNameArray[imageIndex];
}


function fillCardDivs() {
  let pickedIndices = [];
  for(let i = 0; i < cardArray.length; i++) {
    let randomDivIndex = Math.floor(Math.random() * (cardArray.length));
    while(pickedIndices.includes(randomDivIndex)) {
      randomDivIndex = Math.floor(Math.random() * (cardArray.length));
    }
    pickedIndices.push(randomDivIndex);
    cardArray[i].domAddress = document.getElementById(`card-${randomDivIndex}`);
    // cardArray[i].domEL.src = cardArray[i].img;
    // cardArray[i].domEl.alt = cardArray[i].alt;
    cardArray[i].domAddress.textContent = cardArray[i].alt;
  }
}

function fillImgNameArray() {
  return ['orion-1', 'orion-2', 'orion-3', 'orion-4', 'orion-5', 'orion-6', 'orion-7', 'orion-8'];
}

// Start Game function - hide start button, show reset button, begin timer
function startGame() {
  startButton.style.display = 'none';
  resetButton.style.display = 'block';
  timer.textContent = `Time Remaining: ${timeRemaining}`;
  timerID = setInterval(advanceTimer, 1000);
  gameContainer.addEventListener('click', flipCard);
}

// Flips card when cliked. If it is the second card being pressed, it will compare itself with the previously flipped card and if they match save it, otherwise flip both cards back over.
function flipCard(e) {
  let clickedCard = e.target.textContent;
  let divID = e.target.id;
  console.log(clickedCard + ' ' + divID);
  e.target.style.border = '2px solid black';
  if(prevCardID === null) {
    prevCardID = divID;
  } else if (divID === prevCardID) {
    //make match
    prevCardID = null;
  } else {
    //flip cards back over
    prevCardID = null;
  }
}

function advanceTimer() {
  if(timeRemaining > 0) {
    timeRemaining -= 1;
    timer.textContent = `Time Remaining: ${timeRemaining}`;
  } else {
    clearInterval(timerID);
    // endGame();
  }
}

function resetGame() {
  resetButton.style.display = 'none';
  startButton.style.display = 'block';
  clearInterval(timerID);
  gameContainer.removeEventListener('click', flipCard);
  timeRemaining = STARTING_TIME;
  timer.textContent = `Time Remaining: ${timeRemaining}`;
  // reset Cards
}

// ********************** Event Handlers **************************************

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);


// when timer runs out - end game
// when all matches made - end game
// start button
// reset button

// **********************

