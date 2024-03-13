
let numOfPeopleInput = document.getElementById("NumOfP"); // Represents the input field for the number of people
let totalValueElement = document.getElementById("value"); // Represents the element displaying the total amount per person
let tipValueElement = document.getElementById("valuet"); // Represents the element displaying the tip amount per person
let billInput = document.getElementById("billIn"); // Represents the input field for the bill amount
let fifteenPercentButton = document.getElementById("button15"); // Represents the button for 15% tip calculation
let fivePercentButton = document.getElementById("button5"); // Represents the button for 5% tip calculation
let tenPercentButton = document.getElementById("button10"); // Represents the button for 10% tip calculation
let twentyfivePercentButton= document.getElementById("button25"); // Represents the button for 25% tip calculation
let fifthPercentButton = document.getElementById("button50"); // Represents the button for 50% tip calculation
let reset = document.getElementById("reset"); // Represents the button for resting tip calculation
let customv = document.getElementById("custom"); // Represents the button for 10% tip calculation
numOfPeopleInput.addEventListener("input", function () {
  let billAmount = parseFloat(billInput.value); // Convert bill amount to a floating-point number
  let numOfPeople = parseFloat(numOfPeopleInput.value); // Convert number of people to a floating-point number

  console.log("numOfPeople", numOfPeople);

  if (billAmount > 0 && numOfPeople > 0) {
    // Calculate and display the total amount per person when the number of people or bill amount changes
    let totalAmountPerPerson = (billAmount / numOfPeople).toFixed(2);
    totalValueElement.textContent = `$${totalAmountPerPerson}`;

    // Calculate and display the tip amount per person based on the updated total amount per person
    let tipAmountPerPerson = (totalAmountPerPerson * 0.15).toFixed(2);
    tipValueElement.textContent = `$${tipAmountPerPerson}`;
  } else {
    // Display "$0.00" when the bill amount or number of people is less than or equal to 0
    totalValueElement.textContent = "$0.00";
    tipValueElement.textContent = "$0.00";
  }
});


fivePercentButton.addEventListener("click", function get5() {
  let billAmount = parseFloat(billInput.value); // Convert bill amount to a floating-point number
  let numOfPeople = parseFloat(numOfPeopleInput.value); // Convert number of people to a floating-point number

  if (billAmount > 0 && numOfPeople > 0) {
    // Calculate and display the tip amount per person when the 15% button is clicked
    let tipAmountPerPerson = ((billAmount * 0.05) / numOfPeople).toFixed(2);
    tipValueElement.textContent = `$${tipAmountPerPerson}`;
  } else {
    // Display "$0.00" when the bill amount or number of people is less than or equal to 0
    tipValueElement.textContent = "$0.00";
  }
});
tenPercentButton.addEventListener("click", function get10 () {
  let billAmount = parseFloat(billInput.value); // Convert bill amount to a floating-point number
  let numOfPeople = parseFloat(numOfPeopleInput.value); // Convert number of people to a floating-point number

  if (billAmount > 0 && numOfPeople > 0) {
    // Calculate and display the tip amount per person when the 15% button is clicked
    let tipAmountPerPerson = ((billAmount * 0.10) / numOfPeople).toFixed(2);
    tipValueElement.textContent = `$${tipAmountPerPerson}`;
  } else {
    // Display "$0.00" when the bill amount or number of people is less than or equal to 0
    tipValueElement.textContent = "$0.00";
  }
});
twentyfivePercentButton.addEventListener("click", function get25 () {
  let billAmount = parseFloat(billInput.value); // Convert bill amount to a floating-point number
  let numOfPeople = parseFloat(numOfPeopleInput.value); // Convert number of people to a floating-point number

  if (billAmount > 0 && numOfPeople > 0) {
    // Calculate and display the tip amount per person when the 15% button is clicked
    let tipAmountPerPerson = ((billAmount * 0.25) / numOfPeople).toFixed(2);
    tipValueElement.textContent = `$${tipAmountPerPerson}`;
  } else {
    // Display "$0.00" when the bill amount or number of people is less than or equal to 0
    tipValueElement.textContent = "$0.00";
  }
});
fifthPercentButton.addEventListener("click", function get50 () {
  let billAmount = parseFloat(billInput.value); // Convert bill amount to a floating-point number
  let numOfPeople = parseFloat(numOfPeopleInput.value); // Convert number of people to a floating-point number

  if (billAmount > 0 && numOfPeople > 0) {
    // Calculate and display the tip amount per person when the 15% button is clicked
    let tipAmountPerPerson = ((billAmount * 0.50) / numOfPeople).toFixed(2);
    tipValueElement.textContent = `$${tipAmountPerPerson}`;
  } else {
    // Display "$0.00" when the bill amount or number of people is less than or equal to 0
    tipValueElement.textContent = "$0.00";
  }
});
fifteenPercentButton.addEventListener("click", function get15 () {
  let billAmount = parseFloat(billInput.value); // Convert bill amount to a floating-point number
  let numOfPeople = parseFloat(numOfPeopleInput.value); // Convert number of people to a floating-point number

  if (billAmount > 0 && numOfPeople > 0) {
    // Calculate and display the tip amount per person when the 15% button is clicked
    let tipAmountPerPerson = ((billAmount * 0.15) / numOfPeople).toFixed(2);
    tipValueElement.textContent = `$${tipAmountPerPerson}`;
  } else {
    // Display "$0.00" when the bill amount or number of people is less than or equal to 0
    tipValueElement.textContent = "$0.00";
  }
});
reset.addEventListener("click", function getreset () {
  let billAmount = parseFloat(billInput.value); // Convert bill amount to a floating-point number
  let numOfPeople = parseFloat(numOfPeopleInput.value); // Convert number of people to a floating-point number

  if (billAmount > 0 && numOfPeople > 0) {
    // Calculate and display the tip amount per person when the 15% button is clicked

    tipValueElement.textContent =  `$${(0.00).toFixed(2)}`;
    totalValueElement.textContent = `$${(0.00).toFixed(2)}`;
  } 
});
customv.addEventListener("change", function custom() {
  let billAmount = parseFloat(billInput.value); // Convert bill amount to a floating-point number
  let numOfPeople = parseFloat(numOfPeopleInput.value); // Convert number of people to a floating-point number

  if (billAmount > 0 && numOfPeople > 0) {
    // Calculate and display the tip amount per person when the 15% button is clicked
    let tipAmountPerPerson = (((billAmount * (customv.value / 100) )/ numOfPeople).toFixed(2));
    tipValueElement.textContent = `$${tipAmountPerPerson}`;
  } else {
    // Display "$0.00" when the bill amount or number of people is less than or equal to 0
    tipValueElement.textContent = "$0.00";
  }
});