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


var characterTypes = {
	lowerCase: "abcdefghijklmnopqrstuvwxyz".split(""),
	upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
	numbers: "123456789".split(""),
	special: "!@#$%^&*".split("")
};


// function where all the code to generate a function
function generatePassword() {
	var passwordLength = prompt("Choose the length of your password from 8-128 characters");
			// if password is longer than 3 characters then ask again
		if(passwordLength.length < 1 || passwordLength.length > 3) {
			// ask again
				alert("You must enter an integer between 8 and 128");
				generatePassword();
			}	else {
						passwordLength = parseInt(passwordLength);
			}
		if(passwordLength < 8 || passwordLength > 128) { 
			alert("This number needs to be between 8 and 128");
			generatePassword();
			}
		
	var	lowerCaseYesNo = confirm("Do you want to include lowercase letters in your password?");
	var	upperCaseYesNo = confirm("Do you want to include uppercase letters in your password?");
	var	numbersYesNo = confirm("Do you want to include numbers in your password?");
	var	specialYesNo = confirm("Do you want to include special characters in your password?");
	
	// var passwordText = [];
// 	while lowerCaseYesNo {
// 		passwordText = passwordText;
// 	}
	
	
	console.log(passwordLength);
	console.log(passwordLength.length);	
	console.log(typeof passwordLength);
	return passwordLength;			
};		
			
	// console.log(typeof passwordLength) is string - make integer
	// passwordLength = parseInt(passwordLength);
	// console.log(typeof passwordLength) now passwordLength is a number (int)
	// what if they enter something that is not number?
	// then we get Nan. Therefore check if what they entered is integer



// presented user with prompts for password criteria
// 1. prompt for the length of the password. between 8 and 128 characters
// 2. prompt for including types of characters
	// a. make an array of types of characters?
			// lowercase, uppercase, numeric, and/or special characters
// 3. validate input and at least one character type should be chosen
// 4. return password
