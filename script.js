'use strict';

const calcTip = document.querySelector('.calculate-tip');
const displayTip = document.querySelector('.display-tip');
const displayTotal = document.querySelector('.display-total');
const errorMessage = document.querySelector('.error-message');
const rangeSlider = document.querySelector('.range-slider');
const sliderValue = document.querySelector('.slider-value');

let billAmount;
let tipRate;

sliderValue.textContent = `Tip Percentage: ${rangeSlider.value}%`;

rangeSlider.oninput = function () {
  sliderValue.textContent = `Tip Percentage: ${rangeSlider.value}%`;
  clearDisplay();
  return rangeSlider.value;
};

function clearDisplay() {
  displayTip.textContent = '';
  displayTotal.textContent = '';
}

function tipCalculator() {
  if (billAmount === 0) {
    clearDisplay();
    sliderValue.textContent = '';
    errorMessage.textContent = `If the bill is $0, the tip is priceless! But let's try again 😁`;
  } else if (!billAmount) {
    clearDisplay();
    errorMessage.textContent =
      'Please enter a valid number for the bill amount';
  } else if (billAmount < 0) {
    clearDisplay();
    errorMessage.textContent = 'Negative numbers not allowed';
  } else {
    errorMessage.textContent = '';
    let tipAmount = billAmount * (tipRate / 100);
    tipAmount = Math.round(tipAmount * 10) / 10;
    displayTip.textContent = `Tip: $${tipAmount}`;
    let totalAmount = billAmount + tipAmount;
    displayTotal.textContent = `Total Amount to pay: $${totalAmount}`;
    sliderValue.textContent = `Tip Percentage: ${rangeSlider.value}%`;
  }
}

calcTip.addEventListener('click', function () {
  billAmount = Number(document.querySelector('.bill-amount').value);
  tipRate = rangeSlider.value;

  tipCalculator();
});

// const calculateTip = function (bill, tipRate) {
//   let tipAmount = bill * (tipRate / 100);

//   tipAmount = Math.round(tipAmount * 10) / 10;
//   console.log(`Tip Amount: ${tipAmount}`);

//   let totalAmount = bill + tipAmount;
//   return totalAmount;
// };

// console.log(calculateTip(11, 50));
