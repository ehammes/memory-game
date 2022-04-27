'use strict';

// ********************** Global Variables ************************************

// check local storage for username
let displayedUserName = 'New User';
if (localStorage.getItem('userName') !== null) {
  displayedUserName = (localStorage.getItem('userName'));
} else {
  console.log('username does not exist');
}

// ********************** DOM References **************************************

let userForm = document.getElementById('user-data');

// username div = username
let userNameDiv = document.getElementById('username');
userNameDiv.textContent = displayedUserName;

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

