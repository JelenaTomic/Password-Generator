// Assignment code here
// Array of special characters
var specialCharacters = [ '!','#','$','@','%','?','+','\\','/',"'",'^',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters
var numericCharacters = [ '1', '2' , '3' , '4' , '5' , '6' , '7' , '8', '9' , '0' ];

// Array of aflfabet characters lowercase
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// Array of aflfabet characters upercase
var upercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];


var generateBtn = document.querySelector("#generate");



// Write password to the #password input
// adding all nessesery  base condition of a password 
function generatePassword(){
  var passwordLength = prompt("Choose desire length of the password between 8 and 128"); 
  if(passwordLength > 7 && passwordLength <129){
    var hasCharacters = confirm("Do you want password to contain special charcaters?"); 
    // are the specaial characters allowed
    var hasNumbers = confirm("Do you want password to have numbers?");
    // are the numbers allowed
    var hasLowercaseLetters  = confirm("Do you want password to have lowercase letters?");
    // are the lowercase letter/characters allowed
    var hasUppercaseLetters  = confirm("Do you want password to have uppercase letters?");
    // are the uppercase letter/characters allowed
  
  // constructing passwerod based on conditions
  var newMergedArray = [];

  if(hasCharacters) newMergedArray = newMergedArray.concat(specialCharacters);
  // if the user wants special characters
  if(hasNumbers) newMergedArray = newMergedArray.concat(numericCharacters);
  // if the user wants numbers
  if(hasLowercaseLetters) newMergedArray = newMergedArray.concat(lowercaseCharacters);
  // if the user wants lowercase characters/letters
  if(hasUppercaseLetters) newMergedArray = newMergedArray.concat(upercaseCharacters);
  // if the user wants uppercase characters/letters

  var newPasswordArray = [];
  //placeholder for user generated amount of length

  for(var i=0; i< passwordLength; i++){
    var randomIndex = getRandomIndex(newMergedArray.length-1)
    var randomItemObtained = newMergedArray[randomIndex];
    newPasswordArray.push(newMergedArray[randomIndex]);
  }
  // random selction fo all var
  return newPasswordArray.join('');
  
  }
  
  else {alert("Please choose a lenghth between 8 and 128!");
    return '';
  } 
  // if crateria is not fulfilleld 

  
}
// getting random var with data user choose if criteria is meet
function getRandomIndex(max){
  return Math.floor(Math.random() * Math.floor(max)); 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


