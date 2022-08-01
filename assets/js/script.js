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
window.prompt("Choose the length of your password from 8-128 characters");
console.log("The button was clicked");

return "password";
};

// presented user with prompts for password criteria
// 1. prompt for the length of the password. between 8 and 128 characters
// 2. prompt for including types of characters
	// a. make an array of types of characters?
			// lowercase, uppercase, numeric, and/or special characters
// 3. validate input and at least one character type should be chosen
// 4. return password
