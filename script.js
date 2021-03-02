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
