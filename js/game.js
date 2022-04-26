'use strict';

// ********************** Global Variables ************************************

const MATCHESREQUIRED = 8;
const STARTING_TIME = 60;
const cardArray = [];
const imgNameArray = fillImgNameArray();
let timeRemaining = STARTING_TIME;
let userName = 'default_user';

// card1 always in postiion 1, etc

// ********************** DOM References **************************************

// id = game
// create divs for game cards
// append cards to section


// ********************** Constructor *****************************************

// construct game with game card divs
// select random image, save as property of object
const gameContainer = document.getElementById('game');
// dom reference card element
// append to game card array

// getting two images

// construct highscore object
// save it to local storage - correct index according to score rank

// ********************** Helpers, Executables ********************************

// check local storage for username
// username div = username

// countdown timer
// random image selector, two instances, not repeated

placeCardDivs();
fillCards();
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

// Constructor, fills img path and alt name values then pushes to overall cardArray
function CARD(randomImageName) {
  this.img = `img/${randomImageName}.jpeg`;
  this.alt = randomImageName;
  cardArray.push(this);
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
    console.log(cardArray[i]);
  }
}

function fillImgNameArray() {
  return ['orion-1', 'orion-2', 'orion-3', 'orion-4', 'orion-5', 'orion-6', 'orion-7', 'orion-8'];
}

// ********************** Event Handlers **************************************

// when timer runs out - end game
// when all matches made - end game
// start button
// reset button

// **********************

