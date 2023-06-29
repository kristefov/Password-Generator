// Values for the characters used in the password
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_+-=[]{}|;':<>,.?/";

function generatePassword() {
  var passCharacters = "";
  //Propmt to enter your desired length
  const charLength = parseInt(
    prompt(
      "Enter the desired password length (minimum 8, maximum 128 characters):"
    )
  );

  // Validate password length
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }

  // Ask the user if they want to include lowercase letters
  const lowerPrompt = confirm("Click OK to include lowercase letters");

  // Ask the user if they want to include uppercase letters
  const upperPrompt = confirm("Click OK to include uppercase letters");

  // Ask the user if they want to include numbers
  const numbersPrompt = confirm("Click OK to include numbers");

  // Ask the user if they want to include special characters
  const specialPrompt = confirm("Click OK to include special characters");

  if(!lowerPrompt || !upperPrompt || !numbersPrompt || !special) {
    alert("You must choose at least one characteristic")
  }
  // For loop to choose a random characters from the selecetions above 
  for (var i = 0; i < charLength; i++) {
    if (lowerPrompt) {
      passCharacters = passCharacters.concat(
        lowercase.charAt(Math.random() * lowercase.length)
      );
    }
    if (passCharacters.length == charLength) {
      break;
    }
    if (upperPrompt) {
      passCharacters = passCharacters.concat(
        uppercase.charAt(Math.random() * uppercase.length)
      );
    }
    if (passCharacters.length == charLength) {
      break;
    }
    if (numbersPrompt) {
      passCharacters = passCharacters.concat(
        numbers.charAt(Math.random() * numbers.length)
      );
    }
    if (passCharacters.length == charLength) {
      break;
    }
    if (specialPrompt) {
      passCharacters = passCharacters.concat(
        special.charAt(Math.random() * special.length)
      );
    }
    if (passCharacters.length == charLength) {
      break;
    }
  }

  return passCharacters;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  var password = generatePassword();
  //This have been edited because it was giving me undefined vallue in the password box if you click cancel 
  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
