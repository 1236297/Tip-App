
let numOfPeopleInput = document.getElementById("NumOfP"); // Represents the input field for the number of people
let totalValueElement = document.getElementById("value"); // Represents the element displaying the total amount per person
let tipValueElement = document.getElementById("valuet"); // Represents the element displaying the tip amount per person
let billInput = document.getElementById("billIn"); // Represents the input field for the bill amount
let fifteenPercentButton = document.getElementById("button15"); // Represents the button for 15% tip calculation

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

fifteenPercentButton.addEventListener("click", function () {
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