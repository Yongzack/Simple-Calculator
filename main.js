// Get the display element from the DOM
let display = document.getElementById('display');
 
// Function to append a number to the display
function appendNumber(num) {
    display.value += num;
}
 
// Function to append an operator to the display if the display is not empty
function appendOperator(operator) {
    if (display.value !== '') {
        display.value += operator;
    }
}
 
// Function to clear the display
function clearDisplay() {
    display.value = '';
}
 
// Function to delete the last character from the display
function deleteChar() {
    display.value = display.value.slice(0, -1);
}
 
// Function to evaluate the expression in the display
function calculate() {
    try {
        // Use eval to calculate the result of the expression
        display.value = eval(display.value);
    } catch (error) {
        // Handle errors by displaying 'Error' and clearing after 1 second
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}
 
// Initialize display when the page loads
document.addEventListener('DOMContentLoaded', () => {
    display = document.getElementById('display');
});