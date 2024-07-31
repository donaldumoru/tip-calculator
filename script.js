'use strict';

const getTip = document.querySelector('.calculate-tip');
const displayTip = document.querySelector('.display-tip');
const displayTotal = document.querySelector('.display-total');
const errorMessage = document.querySelector('.error-message');
const rangeSlider = document.querySelector('.range-slider');
const sliderValue = document.querySelector('.slider-value');

// Initialize variables
let billAmount;
let tipRate;
let tipAmount;
let totalAmount;

// Set slider value to default range value
sliderValue.textContent = `Tip Percentage: ${rangeSlider.value}%`;

// Function to adjust the slider value
rangeSlider.oninput = function () {
  sliderValue.textContent = `Tip Percentage: ${rangeSlider.value}%`;

  // Clear text display if any while sliding
  clearDisplay();
  errorMessage.textContent = '';
  return rangeSlider.value;
};

function calcTip() {
  let tipAmount = billAmount * (tipRate / 100);
  tipAmount = Math.round(tipAmount * 10) / 10;
  displayTip.textContent = `Tip: $${tipAmount}`;
  return tipAmount;
}

function calcTotalAmount() {
  totalAmount = billAmount + tipAmount;
  displayTotal.textContent = `Total Amount to pay: $${totalAmount}`;
}

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
    calcTip();
    calcTotalAmount();
    sliderValue.textContent = `Tip Percentage: ${rangeSlider.value}%`;
  }
}

// Event listener to execute tip calculation function based on user input
getTip.addEventListener('click', function () {
  billAmount = Number(document.querySelector('.bill-amount').value);
  tipRate = rangeSlider.value;

  tipCalculator();
});
