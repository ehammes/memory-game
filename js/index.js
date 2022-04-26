'use strict';



// ********************** Global Variables ************************************


let userNameArray = [];


let userName = ''; // pulled from local storage



// ********************** DOM References **************************************

let userForm = document.getElementById('user-data');

// username div = username
let userNameDiv = document.getElementById('username');
// ********************** Helpers, Executables ********************************

// check local storage for username


// ********************** Event Handlers **************************************

function userNameSubmission(event) {

  event.preventDefault();

  let userName = event.target.username.value;
  userNameDiv.textContent = userName;
}
// Form submission
// username input saved to local storage

let stringifiedUserName = JSON.stringify(userName);
localStorage.setItem('userName', userName);
// Creation of object constructor begins

function Username(userName, highscore) {
  this.username = userName;
  this.highscore = highscore;

  userNameArray.push(this);
}

console.log('userName', userName);


// {userName: event.target.username.value}
// color - stretch

// ********************** Event Listeners ****************//

userForm.addEventListener('click', userNameSubmission);




