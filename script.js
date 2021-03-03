// connection buttons to functions
document.getElementById('button1').addEventListener('click', check)
document.getElementById('button2').addEventListener('click', check2)
document.getElementById('button3').addEventListener('click', check3)
document.getElementById('button5').addEventListener('click', check4)
document.getElementById('button6').addEventListener('click', check5)
document.getElementById('button4').addEventListener('click', check6)
document.getElementById('button7').addEventListener('click', check7)
document.getElementById('button8').addEventListener('click', check8)
document.getElementById('button9').addEventListener('click', check9)
document.getElementById('button10').addEventListener('click', check10)
document.getElementById('button11').addEventListener('click', check11)

// hiding unclicked options
document.getElementById('divider1').style.display = 'none'
document.getElementById('divider2').style.display = 'none'
document.getElementById('divider3').style.display = 'none'
document.getElementById('divider4').style.display = 'none'
document.getElementById('divider5').style.display = 'none'
document.getElementById('divider6').style.display = 'none'

// user enters name
const person = prompt('Please enter your name', '[NAME]')

// starting message
if (person != null) {
  document.getElementById('text1').innerHTML =
  'Hello there, ' + person + '. How are you doing today?'
}
// Buttons make the divs appear
function check () {
  document.getElementById('divider1').style.display = 'block'
}

function check2 () {
  document.getElementById('divider2').style.display = 'block'
}

function check3 () {
  document.getElementById('divider3').style.display = 'block'
}

function check4 () {
  document.getElementById('divider4').style.display = 'block'
}

function check5 () {
  document.getElementById('divider5').style.display = 'block'
}

function check6 () {
  document.getElementById('divider6').style.display = 'block'
}

function check7 () {
  document.getElementById('divider7').style.display = 'block'
}

function check8 () {
  document.getElementById('divider8').style.display = 'block'
}

function check9 () {
  document.getElementById('divider9').style.display = 'block'
}

function check10 () {
  document.getElementById('divider10').style.display = 'block'
}

function check11 () {
  document.getElementById('divider11').style.display = 'block'
}

// connect "Guess" button to "random" function
document.getElementById('button').addEventListener('click', randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer () {
  // get number typed in by user and covert to an integer
  userGuess = document.getElementById('inputv').value
  userGuess = parseInt(userGuess)

  // generate random number
  randomNumber = Math.random() * 10 + 1
  randomNumber = parseInt(randomNumber)

  // compare the numbers
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'You got it right! Nice work.'
  }
}

// addition function
document.getElementById('button12').addEventListener('click', add)
let number1add = 0
let number2add = 0
let calgary = 0

function add () {
  number1add = document.getElementById('input1').value
  number1add = parseInt(number1add)
  number2add = document.getElementById('input2').value
  number2add = parseInt(number2add)

  calgary = number1add + number2add

  document.getElementById('answeradd').innerHTML = calgary
}

// multiplication function
document.getElementById('button13').addEventListener('click', multiply)
let number1mul = 0
let number2mul = 0
let counter = 0
let halifax = 0

function multiply () {
  number1mul = document.getElementById('input3').value
  number1mul = parseInt(number1mul)
  number2mul = document.getElementById('input4').value
  number2mul = parseInt(number2mul)

  for (counter; counter < number2mul; counter++) {
    halifax = halifax + number1mul
  }
  document.getElementById('answermul').innerHTML = halifax
}

// subtraction function
document.getElementById('button14').addEventListener('click', subtract)
let number1sub = 0
let number2sub = 0
let edmonton = 0

function subtract () {
  number1sub = document.getElementById('input5').value
  number1sub = parseInt(number1sub)
  number2sub = document.getElementById('input6').value
  number2sub = parseInt(number2sub)

  edmonton = number1sub - number2sub

  document.getElementById('answersub').innerHTML = edmonton
}

// division function
document.getElementById('button15').addEventListener('click', divide)
let number1div = 0
let number2div = 0
let toronto = 0

function divide () {
  number1div = document.getElementById('input7').value
  number1div = parseInt(number1div)
  number2div = document.getElementById('input8').value
  number2div = parseInt(number2div)

  toronto = number1div / number2div

  document.getElementById('answerdivide').innerHTML = toronto
}
