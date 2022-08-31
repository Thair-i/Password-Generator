
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword(){

  var userInput = window.prompt("How long do you want your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("password length must be between 8 and 128 characters")
    return
  }
  var userWantsNumber = window.confirm("would like to include numbers in your password? ")
  var userWantsSymbols = window.confirm("would like to include symbols in your password ")
  var userWantsLowercase = window.confirm("would like to include lowercase in your password ")
  var userWantsUppercase = window.confirm("would like to include uppercase in your password ")

  var numberList = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionSelecte = []

  for (var i = 0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }
  
  if (userWantsNumber === true) {
    optionSelecte.push(numberList)
  }
  if (userWantsSymbols === true){
    optionSelecte.push(symbolList)
  }
  if(userWantsLowercase === true){
    optionSelecte.push(lowercaseList)
  }
  if (userWantsUppercase === true){
    optionSelecte.push(uppercaseList)
  }
  if (optionSelecte.length === 0) {
    optionSelecte.push(lowercaseList)

  }

  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionSelecte)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }
  return generatePassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");
  

  

  passwordText.value = password;

}
console.log(generatePassword)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);