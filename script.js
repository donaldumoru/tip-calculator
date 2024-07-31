'use strict';

const calcTip = document.querySelector('.calculate-tip');
const displayTip = document.querySelector('.display-tip');
const displayTotal = document.querySelector('.display-total');
const errorMessage = document.querySelector('.error-message');
const rangeSlider = document.querySelector('.range-slider');
const sliderValue = document.querySelector('.slider-value');

// Initialize bill amount and tip rate
let billAmount;
let tipRate;

// Set slider value to default range value
sliderValue.textContent = `Tip Percentage: ${rangeSlider.value}%`;

// Function to adjust the slider value
rangeSlider.oninput = function () {
  sliderValue.textContent = `Tip Percentage: ${rangeSlider.value}%`;
  clearDisplay();
  return rangeSlider.value;
};

// Function to clear display fields
function clearDisplay() {
  displayTip.textContent = '';
  displayTotal.textContent = '';
}

// Function for the tip calculation logic
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

// Event listener to execute tip calculation function based on user input
calcTip.addEventListener('click', function () {
  billAmount = Number(document.querySelector('.bill-amount').value);
  tipRate = rangeSlider.value;

  tipCalculator();
});
