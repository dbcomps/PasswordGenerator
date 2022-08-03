// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  password = undefined;	// reset after clicks

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
		
		// if password is longer than 3 characters or didn't enter then ask again
	if(passwordLength.length < 1 || passwordLength.length > 3) {
		// ask again
			alert("You must enter an integer between 8 and 128");
			passwordLength = undefined;
			generatePassword();
		}	else if (isNaN(parseInt(passwordLength))) {
			alert("You must enter only integers. Thank you.");
			passwordLength = undefined;
			generatePassword();
		} else {
				passwordLength = parseInt(passwordLength);
				console.log(passwordLength)
		};
		
		
	if(passwordLength > 7 && passwordLength < 129) { 
	
			includedCharacters = [];
			var	characterLength = 0; // initialize so if lowerCase not chosen then no error
		
			var	lowerCaseYesNo = confirm("Do you want to include lowercase letters in your password?");
			if (lowerCaseYesNo) {
					includedCharacters = includedCharacters.concat(characterTypes.lowerCase);
					characterLength = characterTypes.lowerCase.length;
			};
	
			var	upperCaseYesNo = confirm("Do you want to include uppercase letters in your password?");
			if (upperCaseYesNo) {
					includedCharacters = includedCharacters.concat(characterTypes.upperCase);
					characterLength = characterLength + characterTypes.upperCase.length;
			};
	
			var	numbersYesNo = confirm("Do you want to include numbers in your password?");
			if (numbersYesNo) {
					includedCharacters = includedCharacters.concat(characterTypes.numbers);
					characterLength = characterLength + characterTypes.numbers.length;
			};
	
			var	specialYesNo = confirm("Do you want to include special characters in your password?");
			if (specialYesNo) {
					includedCharacters = includedCharacters.concat(characterTypes.special);
					characterLength = characterLength + characterTypes.special.length;
			};
	
			// validate at least one character type chosen
			if (includedCharacters.length < 1 ) {
					alert("You must pick some kind of characters to include in your password. Lets try again.")
					generatePassword();
			}
	
			// var passwordText = new Array(passwordLength);
	
			generatedPassword = ""; //starts as empty to add characters
 
			for(var i = 0; i < passwordLength; i++) {
			generatedPassword = generatedPassword + includedCharacters[Math.floor(Math.random() * characterLength )];
			}
 	
 	 } else {
 		alert("This number needs to be between 8 and 128");
		passwordLength = undefined;
		generatePassword();
		};
 		
	console.log(generatedPassword);
	console.log(characterLength);

	
	return generatedPassword;
	
	
};		


