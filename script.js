// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var lower;
  if (confirm("Would You Like Your Password to Include Lower Case Letters?"))
    function getRandomLowerCase(){
      return String.fromCharCode(Math.floor(Math.random()*26)+97);

  }

  var upper;
  if (confirm("Would You Like Your Password to Include Upper Case Letters?")) {
    
  }

  var numbers;
  if (confirm("Would You Like Your Password to Include Numbers?")) {

  }

  var characters;      
  if (confirm("Would You Like Your Password to Include Special Characters?")) {

  }
  
  var length = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
}

    
  
  

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);