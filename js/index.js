'use strict';



// ********************** Global Variables ************************************

let parseduserName = 'New User';


// let userName = ''; // pulled from local storage



// ********************** DOM References **************************************

let userForm = document.getElementById('user-data');

// username div = username
let userNameDiv = document.getElementById('username');
// ********************** Helpers, Executables ********************************

// check local storage for username
let retrieveduserName = localStorage.getItem(userName);
parseduserName = JSON.parse(retrieveduserName);
userNameDiv.textContent = parseduserName;



// ********************** Event Handlers **************************************

function userNameSubmission(event) {

  event.preventDefault();



  let parseduserName = event.target.username.value;
  userNameDiv.textContent = parseduserName;
  console.log('userName', parseduserName);

  // let stringifiedUserName = JSON.stringify(userName);
  localStorage.setItem('userName', parseduserName);
}
// Form submission
// username input saved to local storage







// {userName: event.target.username.value}
// color - stretch

// ********************** Event Listeners ****************//

userForm.addEventListener('submit', userNameSubmission);




