var specChar = ["!", "@", "&"];
var upperCase = ["A", "B", "C"];
var lowerCase = ["a", "b", "c"];
var numbers = ["1", "2", "3"];
var possibleChar = [];

function generatePassword() {
  var passwordLength = window.prompt(
    "How many characters would you like in password? Password must be at least 9 characters, no more than 100 characters."
  );
  console.log(passwordLength);

  if (passwordLength >= 9 && passwordLength < 100) {
    var chosenSpecChar = window.confirm("Would you like special characters?");
    var chosenUpperCase = window.confirm("Would you like upper case letters?");
    var chosenLowerCase = window.confirm("Would you like lower case letters?");
    var chosenNumbers = window.confirm("Would you like numbers?");
    if (chosenSpecChar == true) {
      possibleChar = possibleChar.concat(specChar);
    }
    if (chosenUpperCase == true) {
      possibleChar = possibleChar.concat(upperCase);
    }
    if (chosenLowerCase == true) {
      possibleChar = possibleChar.concat(lowerCase);
    }
    if (chosenNumbers == true) {
      possibleChar = possibleChar.concat(numbers);
    }
    console.log(possibleChar)
  } else {
    window.alert("Please select a number between 9-100");
    generatePassword();
  }
}

generatePassword();
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
