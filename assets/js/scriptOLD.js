var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberic = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  "/",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "`",
  "~",
];

var possibleChar = [];
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// variable for password length
var passLength = function () {
  var lengthPrompt = window.prompt(
    "How long would you like your password? Min 8 characters, Max 128 characters."
  );
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    return lengthPrompt;
  }
  return passLength();
};
// console.log(passLength()); // HOW CAN WE TEST THIS??

// lower case prompt to confirm -- WHY ARE THEY STRINGS?
var lowerCase = function () {
  var lowerCaseConf = window.confirm(
    "Include lowercase characters? Press OK for yes, and CANCEL for no."
  );
  if (lowerCaseConf === true) {
    possibleChar.push(lowerCase);
  }
};
//upper case prompt to confirm
var upperCase = function () {
  var upperCaseConf = window.confirm(
    "Include UPPERCASE characters? Press OK for yes, and CANCEL for no."
  );
  if (upperCaseConf === true) {
    possibleChar.push(upperCase);
  }
};
// numeric characters prompt to confirm
var numeric = function () {
  var numericConf = window.confirm(
    "Include numbers? Press OK for yes, and CANCEL for no"
  );
  if (numericConf === true) {
    possibleChar.push(numeric);
  }
};
// special character prompt to confirm
var special = function () {
  var specialConf = window.confirm(
    "Include special characters? Press OK for yes, and CANCEL for no"
  );
  if (specialConf === true) {
    possibleChar.push(special);
  }
};
// turned these into for statements inside generatePassword function to choose a random part of each string
var generatePassword = function () {
  for (var i = 0; i < generatedNumeric; i++) {
    var generatedNumeric = Math.floor(Math.random() * numeric.length); // why is this a function
  }
  for (var i = 0; i < generatedUpperCase; i++) {
    var generatedUpperCase = Math.floor(Math.random() * upperCase.length);
  }
  for (var i = 0; i < generatedLowerCase; i++) {
    var generatedLowerCase = Math.floor(Math.random() * lowerCase.length);
  }
  for (var i = 0; i < generatedSpecial; i++) {
    var generatedSpecial = Math.floor(Math.random() * special.length);
  }
};
console.log(generatePassword());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// writePassword();
