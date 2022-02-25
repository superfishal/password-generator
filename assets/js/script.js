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
// empty array which above arrays will be added to after prompts for randomizing
var possibleChar = [];

// variable selector for generate password button
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button which runs the writePassword function
generateBtn.addEventListener("click", writePassword);
// generate oasswird function triggered from writePassword function
function generatePassword() {
  // upperCase prompt
  var upperCaseConf = confirm("Do you want Upper Case?  Click OK to confirm.");
  if (upperCaseConf) {
    // adds upperCase array to possibleChar array
    possibleChar = possibleChar.concat(upperCase);
  }
  // lowerCase prompt
  var lowerCaseConf = confirm("Do you want lower Case?  Click OK to confirm.");
  if (lowerCaseConf) {
    possibleChar = possibleChar.concat(lowerCase);
  }
  // numbers prompt
  var numberConf = confirm("Do you want numbers?  Click OK to confirm.");
  if (numberConf) {
    possibleChar = possibleChar.concat(numeric);
  }
  // special characters prompt
  var specialConf = confirm(
    "Do you want special characters?  Click OK to confirm."
  );
  if (specialConf) {
    possibleChar = possibleChar.concat(special);
  }
  // password length prompt and parseInt to make it a string
  var passLength = parseInt(
    prompt("How many characters do you want your password to be?", "12")
  );
  // confirms password is between 8-128 characters
  if (passLength < 8 || passLength > 128) {
    alert(
      "You must select a password length between 8 and 128. Please try again."
    );
    // adds Try Again to password text area
    return "Try again";
  }
  // requires user to choose one criteria
  if (!lowerCaseConf && !upperCaseConf && !specialConf && !numberConf) {
    alert("You must select at least one of the criteria!!!");
    generatePassword();
  }

  // empty text string to be added to
  var finalPassword = "";
  //loop through possibleChar array passLength times to formulate a password
  for (var i = 0; i < passLength; i++) {
    // randomizer to select a character in possibleChar array
    var randomIndex = Math.floor(Math.random() * possibleChar.length);
    var randomChar = possibleChar[randomIndex];
    // concatenate each random character to finalPassword
    finalPassword = finalPassword.concat(randomChar);
    // view console in dev tools to watch the function build the password
    console.log(finalPassword);
  }

  return finalPassword;
}
