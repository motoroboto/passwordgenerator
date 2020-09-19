// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerString = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
var lowers = lowerString.split(" ");
var upperString = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
var uppers = upperString.split(" ");
var numberString = '1 2 3 4 5 6 7 8 9 0';
var numbers = numberString.split(" ");
var characterString = '! @ # $ % ^ & * ( )';
var characters = characterString.split(" ");
var passChars = '';

function generatePassword () {
  var lowerConfirm = confirm("Would You Like Your Password to Include Lower Case Letters?");
  var upperConfirm = confirm("Would You Like Your Password to Include Upper Case Letters?");
  var numberConfirm = confirm("Would You Like Your Password to Include Numbers?");
  var characterConfirm = confirm("Would You Like Your Password to Include Special Characters?");
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !characterConfirm) {
    alert("Please Choose At Least One Kind of Character For Your Password");
    generatePassword ()
}
  var length = Number(prompt("How many characters would you like your password to be?", "8-128"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

if (lowerConfirm) { passChars=passChars.concat(lowers); }
if (upperConfirm) { passChars=passChars.concat(uppers); }
if (numberConfirm) { passChars=passChars.concat(numbers); }
if (characterConfirm) { passChars=passChars.concat(characters); }
var passCharacters = passChars.split(",")

var password="";
for(var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * passCharacters.length);
    password += passCharacters[random];
}
console.log(password);
}
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);