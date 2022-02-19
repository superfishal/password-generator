var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberic = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!","#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "<", "=", ">", "?", "@", "^", "_", "`", "~"];
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// variable for password length
var passLength = function() {
  var lengthPrompt = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters.");
  if(lengthPrompt < 8 || lengthPrompt > 128) {
    window.prompt("Please input a number between 8-128.");
    return lengthPrompt;
  }
  return passLength();
  console.log(passLength);
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
  var numericConf = window.confirm("Include numbers? Press OK for yes, and CANCEL for no");
  return numericConf;
};

var special = function(){
  var specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no");
  return specialConf;
};
// var generatePassword = function(){
//   var generatedNumeric = numeric();
//   var generatedUpperCase = upperCase();
//   var generatedLowerCase = lowerCase();
//   var generatedSpecial = special();
// }
var generatePassword = function(){

for (var i = 0; i < generatedNumeric; i++){
  var generatedNumeric = Math.floor(Math.random() * numeric.length);
};
for (var i = 0; i < generatedUpperCase; i++){
  var generatedUpperCase = Math.floor(Math.random() * upperCase.length);
};
for (var i = 0; i < generatedLowerCase; i++){
  var generatedLowerCase = Math.floor(Math.random() * lowerCase.length);
};
for (var i = 0; i < generatedSpecial; i++){
  var generatedSpecial = Math.floor(Math.random() * special.length);
};
};
