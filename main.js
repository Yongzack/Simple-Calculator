let display = document.getElementById('display');
 
 function appendNumber(num) {
     display.value += num;
 }
 
 function appendOperator(operator) {
     if (display.value !== '') {
         display.value += operator;
     }
 }
 
 function clearDisplay() {
     display.value = '';
 }
 
 function deleteChar() {
     display.value = display.value.slice(0, -1);
 }
 
 function calculate() {
     try {
         display.value = eval(display.value);
     } catch (error) {
         display.value = 'Error';
         setTimeout(clearDisplay, 1000);
     }
 }
 
 // Initialize display when the page loads
 document.addEventListener('DOMContentLoaded', () => {
     display = document.getElementById('display');
 });