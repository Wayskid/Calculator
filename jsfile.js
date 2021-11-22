`use strict`;

let inputDisplay = document.querySelector(".screen");

let oneValue = document.querySelector(".btnOne").textContent;
let btnOne = document.querySelector(".btnOne");

let btnTwo = document.querySelector(".btnTwo");
let twoValue = document.querySelector(".btnTwo").textContent;

let btnThree = document.querySelector(".btnThree");
let threeValue = document.querySelector(".btnThree").textContent;

let btnFour = document.querySelector(".btnFour");
let fourValue = document.querySelector(".btnFour").textContent;

let btnFive = document.querySelector(".btnFive");
let fiveValue = document.querySelector(".btnFive").textContent;

let btnSix = document.querySelector(".btnSix");
let sixValue = document.querySelector(".btnSix").textContent;

let btnSeven = document.querySelector(".btnSeven");
let sevenValue = document.querySelector(".btnSeven").textContent;

let btnEight = document.querySelector(".btnEight");
let eightValue = document.querySelector(".btnEight").textContent;

let btnNine = document.querySelector(".btnNine");
let nineValue = document.querySelector(".btnNine").textContent;

let btnZero = document.querySelector(".btnZero");
let zeroValue = document.querySelector(".btnZero").textContent;

let btnPlus = document.querySelector(".btnPlus");
let plusValue = document.querySelector(".btnPlus").textContent;

let btnMinus = document.querySelector(".btnMinus");
let minusValue = document.querySelector(".btnMinus").textContent;

let btnMultiply = document.querySelector(".btnMultiply");
let multiplyValue = document.querySelector(".btnMultiply").textContent;

let btnDivide = document.querySelector(".btnDivide");
let divideValue = document.querySelector(".btnDivide").textContent;

let btnClearAll = document.querySelector(".btnClearAll");
let clearAllValue = document.querySelector(".btnClearAll").textContent;

let btnEquals = document.querySelector(".btnEquals");
let equalsValue = document.querySelector(".btnEquals").textContent;

let btnBspace = document.querySelector(".btnBspace");

// ONE
function inputOne() {
  inputDisplay.value += oneValue;
}
const clickOne = btnOne.addEventListener("click", inputOne);

// TWO
function inputTwo() {
  inputDisplay.value += twoValue;
}
const clickTwo = btnTwo.addEventListener("click", inputTwo);

// THREE
function inputThree() {
  inputDisplay.value += threeValue;
}
const clickThree = btnThree.addEventListener("click", inputThree);

// FOUR
function inputFour() {
  inputDisplay.value += fourValue;
}
const clickFour = btnFour.addEventListener("click", inputFour);

// FIVE
function inputFive() {
  inputDisplay.value += fiveValue;
}
const clickFive = btnFive.addEventListener("click", inputFive);

// SIX
function inputSix() {
  inputDisplay.value += sixValue;
}
const clickSix = btnSix.addEventListener("click", inputSix);

// SEVEN
function inputSeven() {
  inputDisplay.value += sevenValue;
}
const clickSeven = btnSeven.addEventListener("click", inputSeven);

// EIGHT
function inputEight() {
  inputDisplay.value += eightValue;
}
const clickEight = btnEight.addEventListener("click", inputEight);

// NINE
function inputNine() {
  inputDisplay.value += nineValue;
}
const clickNine = btnNine.addEventListener("click", inputNine);

// ZERO
function inputZero() {
  inputDisplay.value += zeroValue;
}
const clickZero = btnZero.addEventListener("click", inputZero);

// PLUS
function inputPlus() {
  inputDisplay.value += plusValue;
}
const clickPlus = btnPlus.addEventListener("click", inputPlus);

// MINUS
function inputMinus() {
  inputDisplay.value += minusValue;
}
const clickMinus = btnMinus.addEventListener("click", inputMinus);

// MULTIPLY
function inputMultiply() {
  inputDisplay.value += multiplyValue;
}
const clickMultiply = btnMultiply.addEventListener("click", inputMultiply);

// DIVIDE
function inputDivide() {
  inputDisplay.value += divideValue;
}
const clickDivide = btnDivide.addEventListener("click", inputDivide);

// CLEAR ALL
function inputClearAll() {
  inputDisplay.value = "";
}
const clickClearAll = btnClearAll.addEventListener("click", inputClearAll);

// BACKSPACE
function inputBspace() {
  inputDisplay.value.length - 1;
}
const clickBspace = btnBspace.addEventListener("click", inputBspace);

// CLICK EQUALS BTN
let ans;

const clickEquals = btnEquals.addEventListener("click", function () {
  if (inputDisplay.value.includes(!NaN && "+") || inputDisplay.value.includes(!NaN && "-") || inputDisplay.value.includes(!NaN && "/") || inputDisplay.value.includes(!NaN && "*")){
    console.log(inputDisplay.value);
    const ans = eval(inputDisplay.value);
    console.log(ans);
    inputDisplay.value = ans;
  } else {
      const errorMes = (inputDisplay.value = `Please insert an Equation`);
      setTimeout(inputClearAll, 500);
  }
});
