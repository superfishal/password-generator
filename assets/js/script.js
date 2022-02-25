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
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // upperCase prompt
  var upperCaseConf = confirm("Do you want Upper Case?  Click OK to confirm.");
  if (upperCaseConf) {
    possibleChar = possibleChar.concat(upperCase);
  }
  // lowerCase prompt
  var lowerCaseConf = confirm("Do you want lower Case?  Click OK to confirm.");
  if (lowerCaseConf) {
    possibleChar = possibleChar.concat(lowerCase);
  }
  // specialChar prompt
  var numberConf = confirm("Do you want numbers?  Click OK to confirm.");
  if (numberConf) {
    possibleChar = possibleChar.concat(numeric);
  }
  // nuberChar prompt
  var specialConf = confirm(
    "Do you want special characters?  Click OK to confirm."
  );
  if (specialConf) {
    possibleChar = possibleChar.concat(special);
  }

  var passLength = parseInt(
    prompt("How many characters do you want your password to be?", "12")
  );
  if (passLength < 8 || passLength > 128) {
    alert(
      "You must select a password length between 8 and 128. Please try again."
    );
    return "Try again";
  }
  var finalPassword = "";
  //loop through possibleChar array passLength times to formulate a pw
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChar.length);
    var randomChar = possibleChar[randomIndex];

    finalPassword = finalPassword.concat(randomChar);
    console.log(finalPassword);
  }

  return finalPassword;
}
