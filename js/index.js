'use strict';

// ********************** Global Variables ************************************

let displayedUserName = 'New User';

// ********************** DOM References **************************************

let userForm = document.getElementById('user-data');

// username div = username
let userNameDiv = document.getElementById('username');
userNameDiv.textContent = displayedUserName;

// ********************** Helpers, Executables ********************************

// // check local storage for username
// function checkLocalStorage () {

//   let retrieveduserName = localStorage.getItem(displayedUserName);
//   let parseduserName = JSON.parse(retrieveduserName);

//   if (parseduserName !== '') {
//     userNameDiv.textContent = parseduserName;
//   }
// }
// checkLocalStorage();

// ********************** Event Handlers **************************************

function userNameSubmission(event) {

  event.preventDefault();

  displayedUserName = event.target.username.value;
  userNameDiv.textContent = displayedUserName;

  // let stringifiedUserName = JSON.stringify(userName);
  localStorage.setItem('userName', displayedUserName);
}

// ********************** Event Listeners ****************//

userForm.addEventListener('submit', userNameSubmission);

