//source values for modes
const abc = ["a","b","c","d","e","f","g","h","i","j","k", "l", "m","n","o", "p","q","r","s","t","u","v","w","x","y","z"];
const oneTwoThree = ['1', '2', '3', '4', '5', '6', '7','8', '9', '0'];
const nameArr = ['E', 'L', 'L', 'I', 'E'];
let countingArr = [...Array(100).keys()];

//set active mode as abc as default
let activeMode = abc;

// array counter
let counter = 0;

//get Elements from DOM
let pageArea = document.getElementById("body");
let abcBtn = document.getElementById("abcBtn");
let oneTwoThreeBtn = document.getElementById("123Btn");
let countBtn = document.getElementById("countBtn");
let nameBtn = document.getElementById("nameBtn");
let letter = document.getElementById("letter");
let hiddenText = document.getElementById("focuser");
//set h1 to value of activeMode
letter.innerHTML = activeMode[counter].toUpperCase();

hiddenText.click();
pageArea.focus();

abcBtn.addEventListener("click", function() {
  abcBtn.classList.add("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  countBtn.classList.remove("button-pressed");
  activeMode = abc;
  counter = 0;
  letter.innerHTML = activeMode[counter].toUpperCase();
})

oneTwoThreeBtn.addEventListener("click", function() {
  oneTwoThreeBtn.classList.add("button-pressed");
  abcBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  countBtn.classList.remove("button-pressed");
  activeMode = oneTwoThree;
  counter = 0;
  letter.innerHTML = activeMode[counter].toUpperCase();
})

nameBtn.addEventListener("click", function() {
  nameBtn.classList.add("button-pressed");
  abcBtn.classList.remove("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  countBtn.classList.remove("button-pressed");
  activeMode = nameArr;
  counter = 0;
  letter.innerHTML = activeMode[counter].toUpperCase();
})

countBtn.addEventListener("click", function() {
  countBtn.classList.add("button-pressed");
  abcBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  activeMode = countingArr;
  counter = 0;
  letter.innerHTML = String(activeMode[counter]).toUpperCase();
})

pageArea.addEventListener("keydown", function (event) {
  if (letter.innerHTML.toLowerCase().split("").some(char => char === event.key)) {
    console.log(typeof event.key);
    letter.innerHTML = letter.innerHTML.toLowerCase().replace(event.key, "");
    console.log(letter.innerHTML);
    if (counter >= activeMode.length) {
      counter = 0;
    }

    if (letter.innerHTML === "") {
      letter.classList.add("animate__animated" ,"animate__backInDown");
      counter += 1;
      letter.innerHTML = String(activeMode[counter]).toUpperCase();
      letter.addEventListener('animationend', () => {
        letter.classList.remove("animate__animated" ,"animate__backInDown");
      });
  }
    
    
    
    
  }
}, true);