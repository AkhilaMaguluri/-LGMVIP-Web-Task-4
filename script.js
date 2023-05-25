// Select the elements
const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');



// Add event listener to the parent container to handle button clicks
document.querySelector('.buttons').addEventListener('click', (event) => {
  const button = event.target;

  if (button.tagName === 'BUTTON') {
    const buttonText = button.innerText;

    if (buttonText === 'C') {
      // Clear the display
      display.value = '';
    } else if (buttonText === 'CE') {
      // Clear the last character
      display.value = display.value.slice(0, -1);
    } else if (buttonText === '%') {
      // Evaluate the expression and divide by 100
      display.value = eval(display.value) / 100;
    } else if (buttonText === '=') {
      // Evaluate the expression
      const result = eval(display.value);
      display.value = result;
    } else {
      // Append the button's value to the display
      display.value += buttonText;
    }
  }
});
