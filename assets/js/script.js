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


// var characterType = {
// 	lowerCase = "",
// 	upperCase = "",
// 	numbers   = "",
// 	special   = "",
// };

// function where all the code to generate a function
function generatePassword() {
	var passwordLength = prompt("Choose the length of your password from 8-128 characters");
	// console.log(typeof passwordLength) is string - make integer
	// passwordLength = parseInt(passwordLength);
	// console.log(typeof passwordLength) now passwordLength is a number (int)
	// what if they enter something that is not number?
	// then we get Nan. Therefore check if what they entered is integer
	console.log(passwordLength.length)
	console.log(typeof passwordLength)
	console.log(passwordLength);
	console.log(parseInt(passwordLength))
	console.log(typeof parseInt(passwordLength))

	if(passwordLength.length == 0 || passwordLength.length > 3) {
		var passwordLength = prompt("Enter a number between 8 and 128.");
	} else {
		passwordLength = parseInt(passwordLength)
	return passwordLength;
	} 

return passwordLength;
};

// presented user with prompts for password criteria
// 1. prompt for the length of the password. between 8 and 128 characters
// 2. prompt for including types of characters
	// a. make an array of types of characters?
			// lowercase, uppercase, numeric, and/or special characters
// 3. validate input and at least one character type should be chosen
// 4. return password
