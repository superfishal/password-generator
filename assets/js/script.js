upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
specialArray = ["!","#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "<", "=", ">", "?", "@", "^", "_", "`", "~"];
possibleChar = [];
// need a results array? to take whats generated in random password
// function randomWhatever () {
// return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
//  }
// Character Code for JavaScript

// need to separate confirm function , randomize function, gather randomize function, display randomize function
var generatePassword = function(){

  // variable for password length
var passLength = function() {
  var lengthPrompt = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters.");
  lengthPrompt = parseInt(lengthPrompt);
  if(lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("Choose a number between 8-128");
    possibleChar.push(passLength);
    console.log(passLength());
  };
};




// lower case prompt to confirm
var lowerCase = function(){
  var lowerCaseConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
  if(lowerCaseConf === true) {
  var lowerCaseLength = lowerCaseArray.length +1;
  result.push(lowerCase[Math.floor(Math.random() * lowerCaseLength)]);
  possibleChar.push(lowerCaseLength);
  };
};



//upper case prompt to confirm
var upperCase = function(){
  var upperCaseConf = window.confirm("Include UPPERCASE characters? Press OK for yes, and CANCEL for no.");
  if(upperCaseConf === true) {
  var upperCaseLength = upperCaseArray.length +1;
  result.push(upperCase[Math.floor(Math.random() * upperCaseLength)]);
  possibleChar.push(upperCaseLength);
  };
};



// numeric characters prompt to confirm
var numeric = function(){
  var numericConf = window.confirm("Include numbers? Press OK for yes, and CANCEL for no");
  if(numericConf === true) {
    var numericLength = numericArray.length +1;
    result.push(numeric[Math.floor(Math.random() * numericLength)]);
    possibleChar.push(numericLength);
  };
};



// special character prompt to confirm
var special = function(){
  var specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no");
  if(specialConf === true) {
    var specialLength = specialArray.length +1;
    result.push(special[Math.floor(Math.random() * specialLength)]);
    possibleChar.push(specialLength);
  };
};
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // password.toString(); or password = password.join();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
};


// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// get.addEventListener("click", function () {
//   ps = generatePassword();
//   document.getElementById("password").placeholder = ps;
// });


// Choices declared outside the if statement so they can be concatenated upon condition
// var choices;
  // Start random selection variables:
  // Random selection for all variables: 
  //   for (var i = 0; i < enter; i++) {
  //     var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  //     password.push(pickChoices);
  // }
// This joins the password array and converts it to a string
//     var ps = password.join("");
//     UserInput(ps);
//     return ps;
// }





// for (var i = 0; i < generatedNumeric; i++){
//   var generatedNumeric = Math.floor(Math.random() * numeric.length); // why is this a function
// };
// for (var i = 0; i < generatedUpperCase; i++){
//   var generatedUpperCase = Math.floor(Math.random() * upperCase.length);
// };

// for (var i = 0; i < generatedSpecial; i++){
//   var generatedSpecial = Math.floor(Math.random() * special.length);
// };
// for .....
//  numeric

