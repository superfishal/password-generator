## PASSWORD GENERATOR

- web based password generator built with Javascript
- generates a password based off 5 criteria
  - upperCase, lowerCase, numbers, special characters and length
- users must select at least one criteria and the password must be between 8-128 characters

## Links

Deployed Application - https://superfishal.github.io/password-generator/

Github Repository - https://github.com/superfishal/password-generator

## Application

WHEN user clicks the button to generate a password
THEN user is presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN user selects which criteria to include in the password
WHEN asked for character types to include in the password
THEN user confirms whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN prompted for the length of the password
THEN user chooses a length of at least 8 characters and no more than 128 characters
WHEN user answers each prompt
THEN the input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
