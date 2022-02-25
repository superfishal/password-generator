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
  var upperCaseConf = confirm("Do you want Upper Case?  Click OK to confirm.")
  // lowerCase prompt
  // specialChar prompt
  // nuberChar prompt
  return "hello this worked ;)";
}