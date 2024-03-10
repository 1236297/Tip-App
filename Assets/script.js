let NOP = document.getElementById('NumOfP');
let Valueable = document.getElementById('value');
let Valuea = document.getElementById('valuet');
let billIn = document.getElementById('billIn');
let button15 = document.getElementById('button15');
// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.getElementById('myButton');
//     button.value = "5%";
//     button.classList.add('button-value');
// });

NOP.addEventListener('input', function () {
    if (billIn.value > 0) {
        Valueable.textContent = `$${(billIn.value / NOP.value).toFixed(2)}`;
    }
    // Update the display element with the current value of the input field
    else if (billIn.value <= 0) {
        Valueable.textContent = "$0.00";
    }

})
button15.addEventListener('click', function () {
    

    let fifteen = 0.15;
    let divid =billIn.value / NOP.value


    Valuea.textContent = `$${(divid * fifteen).toFixed(2)}`;

})