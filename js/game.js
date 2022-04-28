'use strict';

// ********************** Global Variables ************************************

const MATCHESREQUIRED = 8;
const STARTING_TIME = 60;
const imgNameArray = fillImgNameArray();
let cardArray = [];
let timeRemaining = STARTING_TIME;
let attemptsMade = 0;
let matchesMade = 0;
let previousCard = null;
let previousCardContainer = null;
let userName = 'default_user';
let fetchHighScoresArray = getHighScores();
let parsedHiScoresArray = JSON.parse(fetchHighScoresArray);
let timerID;


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
function Card(randomImageName) {
  this.img = `img/${randomImageName}.jpeg`;
  this.alt = randomImageName;
  cardArray.push(this);
}

// construct highscore object
// save it to local storage - correct index according to score rank


// ********************** Helpers, Executables ********************************

// check local storage for username
if (localStorage.getItem('userName')) {
  userName = localStorage.getItem('userName');
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
  for (let i = 0; i < 4; i++) {
    let cardRow = document.createElement('div');
    gameContainer.appendChild(cardRow);
    cardRow.id = `row-${i + 1}`;
    cardRow.className = 'card-row';
    for (let j = i * 4; j < (i + 1) * 4; j++) {
      let currCard = document.createElement('div');
      cardRow.appendChild(currCard);
      currCard.id = `card-${j}`;
      currCard.className = 'card-container';
    }
  }
}

// Picks a random image and fill two Card Objects with that image
function fillCards() {
  let pickedIndices = [];
  for (let i = 1; i <= MATCHESREQUIRED; i++) {
    let randomImageName = getRandomImage(pickedIndices);
    new Card(randomImageName);
    new Card(randomImageName);
  }
}

// Returns a string randomly picked from imgNameArray representing the file name of the image
function getRandomImage(pickedIndices) {
  let imageIndex = Math.floor(Math.random() * (imgNameArray.length));
  while (pickedIndices.includes(imageIndex)) {
    imageIndex = Math.floor(Math.random() * (imgNameArray.length));
  }
  pickedIndices.push(imageIndex);
  return imgNameArray[imageIndex];
}


function fillCardDivs() {
  let pickedIndices = [];
  for (let i = 0; i < cardArray.length; i++) {
    let randomDivIndex = Math.floor(Math.random() * (cardArray.length));
    while (pickedIndices.includes(randomDivIndex)) {
      randomDivIndex = Math.floor(Math.random() * (cardArray.length));
    }
    pickedIndices.push(randomDivIndex);
    cardArray[i].containerDomAddress = document.getElementById(`card-${randomDivIndex}`);
    cardArray[i].domAddress = document.createElement('img');
    cardArray[i].containerDomAddress.alt = cardArray[i].alt;
    cardArray[i].domAddress.id = `${cardArray[i].alt}`;
    cardArray[i].containerDomAddress.appendChild(cardArray[i].domAddress);
    cardArray[i].domAddress.src = cardArray[i].img;
    cardArray[i].domAddress.alt = cardArray[i].alt;
  }
}

function fillImgNameArray() {
  return ['ben-dogs-1', 'ben-dogs-2', 'ben-dogs-3', 'ben-dogs-4', 'ben-dogs-5', 'ben-dogs-6', 'ben-dogs-7', 'ben-dogs-8', 'ben-dogs-9', 'ben-dogs-10', 'ben-dogs-11', 'ben-dogs-12', 'gsd-1', 'gsd-2', 'gsd-3', 'gsd-4', 'gsd-5', 'gsd-6', 'gsd-7', 'gsd-8', 'gsd-9', 'Quentin1', 'Quentin2', 'Quentin3', 'Quentin4', 'Quentin5', 'Quentin6', 'Quentin7', 'Quentin8', 'IMG_1', 'IMG_2', 'IMG_3', 'IMG_4', 'IMG_5', 'IMG_6', 'IMG_7', 'IMG_8', 'IMG_9'];
}

// Start Game function - hide start button, show reset button, begin timer
function startGame() {
  startButton.style.display = 'none';
  resetButton.style.display = 'flex';
  timer.textContent = `Time Remaining: ${timeRemaining}`;
  timerID = setInterval(advanceTimer, 1000);
  gameContainer.addEventListener('click', flipCard);
}

// Flips card when clicked. If it is the second card being pressed, it will compare itself with the previously flipped card and if they match save it, otherwise flip both cards back over.
function flipCard(e) {
  if (!(e.target.id === 'start-game' || e.target.id === 'reset-game' || e.target.tagName === 'IMG' || e.target.tagName === 'SECTION' || previousCardContainer === e.target.id || e.target.className === 'card-row')) {
    let clickedCard = e.target.alt;
    let divID = e.target;
    e.target.children.item(0).style.visibility = 'visible';
    if (previousCard === null) {
      previousCard = clickedCard;
      previousCardContainer = divID;
    } else if (clickedCard === previousCard) {
      attemptsMade++;
      matchesMade++;
      previousCard = null;
      if(matchesMade === MATCHESREQUIRED) {
        endGame();
      }
    } else {
      attemptsMade++;
      gameContainer.removeEventListener('click', flipCard);
      setTimeout(function () { noMatch(e.target); }, 1000);
    }
    console.log(matchesMade + ' out of ' + attemptsMade);
  }
}

function noMatch(currCard) {
  gameContainer.addEventListener('click', flipCard);
  currCard.children.item(0).style.visibility = 'hidden';
  previousCardContainer.children.item(0).style.visibility = 'hidden';
  previousCard = null;
}

function advanceTimer() {
  if (timeRemaining > 0) {
    timeRemaining -= 1;
    timer.textContent = `Time Remaining: ${timeRemaining}`;
  } else {
    endGame();
  }
}

function resetGame() {
  resetButton.style.display = 'none';
  startButton.style.display = 'flex';
  clearInterval(timerID);
  gameContainer.removeEventListener('click', flipCard);
  timeRemaining = STARTING_TIME;
  timer.textContent = `Time Remaining: ${timeRemaining}`;
  for(let i = 0; i < cardArray.length; i++) {
    cardArray[i].containerDomAddress.innerHTML = '';
  }
  cardArray = [];
  fillCards();
  fillCardDivs();
  attemptsMade = 0;
  matchesMade = 0;
  previousCard = null;
  previousCardContainer = null;
}

function endGame() {
  clearInterval(timerID);
  gameContainer.removeEventListener('click', flipCard);
  let currScore = new HighScore();
  insertHighScore(currScore);
  let stringifiedHiScoresArray = JSON.stringify(parsedHiScoresArray);
  localStorage.setItem('hiScoresArray', stringifiedHiScoresArray);
  if (matchesMade === MATCHESREQUIRED) {
    setTimeout(function() {alert('Congrats, you completed all the matches!');}, 5);
  } else {
    alert('You failed!');
  }
}

function insertHighScore(currScore) {
  let insertionPointIndex = placeHighScore(currScore);
  parsedHiScoresArray.splice(insertionPointIndex, 0, currScore);
}

function placeHighScore(currScore) {
  for(let i = 0; i < parsedHiScoresArray.length; i++) {
    if(currScore.matchesMade > parsedHiScoresArray[i].matchesMade) {
      return i;
    } else if (currScore.timeRemaining > parsedHiScoresArray[i].timeRemaining) {
      return i;
    }
  }
  return parsedHiScoresArray.length;
}

function HighScore() {
  this.userName = userName;
  this.matchesMade = matchesMade;
  this.attemptsMade = attemptsMade;
  this.timeRemaining = timeRemaining;
}

function getHighScores() {
  if (localStorage.getItem('hiScoresArray')) {
    return localStorage.getItem('hiScoresArray');
  } else {
    return '[]';
  }
}

// ********************** Event Handlers **************************************

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);


// when timer runs out - end game
// when all matches made - end game
// start button
// reset button

// **********************

