// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// variable for password length
var passLength = function() {
  var lengthPrompt = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters.");
  if(lengthPrompt < 8 || lengthPrompt > 128) {
    window.prompt("Please input a number between 8-128.");
    return passLength();
  }
  return lengthPrompt;
}

var lowerCase = function(){
  var lowerCaseConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
  return lowerCaseConf;
};

var upperCase = function(){
  var upperCaseConf = window.confirm("Include UPPERCASE characters? Press OK for yes, and CANCEL for no.");
  return upperCaseConf;
};

var numeric = function(){
  var numericCaseConf = window.confirm("Include numbers? Press OK for yes, and CANCEL for no");
  return numericCaseConf;
};



var generatePassword 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

