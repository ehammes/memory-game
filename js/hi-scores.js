'use strict';

// ********************** Global Variables ************************************

let displayedUserName = 'New User';
if (localStorage.getItem('userName') !== null) {
  displayedUserName = (localStorage.getItem('userName'));
} else {
  displayedUserName;
}
let fetchHighScoresArray = getHighScores();
let parsedHiScoresArray = JSON.parse(fetchHighScoresArray);

// ********************** DOM References **************************************

// table

const hiScoresContainer = document.getElementById('high-scores');
const hiScoresTable = document.createElement('table');
hiScoresContainer.appendChild(hiScoresTable);

const tBodyElem = document.createElement('tbody');
hiScoresTable.appendChild(tBodyElem);


function createHeaderRow() {
  const tHeadElem = document.createElement('thead');
  hiScoresTable.appendChild(tHeadElem);

  const tr = document.createElement('tr');
  tHeadElem.appendChild(tr);

  const userNameHeading = document.createElement('td');
  tr.appendChild(userNameHeading);
  userNameHeading.textContent = 'Player';

  const scoreHeading = document.createElement('td');
  tr.appendChild(scoreHeading);
  scoreHeading.textContent = 'Matches Made';

  const timeHeading = document.createElement('td');
  tr.appendChild(timeHeading);
  timeHeading.textContent = 'Time Remaining';

  const accuracyHeading = document.createElement('td');
  tr.appendChild(accuracyHeading);
  accuracyHeading.textContent = 'Accuracy';
}

function createHighScoreRows(i) {
  const highScoreRow = document.createElement('tr');
  tBodyElem.appendChild(highScoreRow);

  const rowPlayer = document.createElement('td');
  highScoreRow.appendChild(rowPlayer);
  rowPlayer.textContent = parsedHiScoresArray[i].userName;

  const rowMatchesMade = document.createElement('td');
  highScoreRow.appendChild(rowMatchesMade);
  rowMatchesMade.textContent = parsedHiScoresArray[i].matchesMade;

  const rowTimeRemaining = document.createElement('td');
  highScoreRow.appendChild(rowTimeRemaining);
  rowTimeRemaining.textContent = parsedHiScoresArray[i].timeRemaining;

  const rowAccuracy = document.createElement('td');
  highScoreRow.appendChild(rowAccuracy);
  rowAccuracy.textContent = `${(parsedHiScoresArray[i].matchesMade / parsedHiScoresArray[i].attemptsMade * 100).toFixed(0)}%`;
}

createHeaderRow();

for (let i = 0; i < parsedHiScoresArray.length; i++) {
  createHighScoreRows(i);
}



// ********************** Helpers, Executables ********************************

let userNameDiv = document.getElementById('username');
userNameDiv.textContent = displayedUserName;

// highscores = [name, number of cards matched, time] - from local storage
// current username
// render highscores data to table

function getHighScores() {
  if (localStorage.getItem('hiScoresArray')) {
    return localStorage.getItem('hiScoresArray');
  } else {
    return '[]';
  }
}
