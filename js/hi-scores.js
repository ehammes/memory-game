'use strict';

// ********************** Global Variables ************************************

let displayedUserName = 'New User';
if (localStorage.getItem('userName') !== null) {
  displayedUserName = (localStorage.getItem('userName'));
} else {
  displayedUserName;
}

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
}

function createHighScoreRows() {
  const highScoreRow = document.createElement('tr');
  tBodyElem.appendChild(highScoreRow);

  const rowPlayer = document.createElement('td');
  highScoreRow.appendChild(rowPlayer);
  rowPlayer.textContent = displayedUserName;

  const rowMatchesMade = document.createElement('td');
  highScoreRow.appendChild(rowMatchesMade);
  rowMatchesMade.textContent = 'number of matches made';

  const rowTimeRemaining = document.createElement('td');
  highScoreRow.appendChild(rowTimeRemaining);
  rowTimeRemaining.textContent = 'time remaining';

}

createHeaderRow();

for (let i = 0; i < 6; i++) {
  createHighScoreRows();
} // placeholder for constructor function, putting scores in from games played



// ********************** Helpers, Executables ********************************

let userNameDiv = document.getElementById('username');
userNameDiv.textContent = displayedUserName;

// highscores = [name, number of cards matched, time] - from local storage
// current username
// render highscores data to table
