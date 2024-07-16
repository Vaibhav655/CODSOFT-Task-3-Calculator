let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      let result = evaluateExpression(string);
      document.querySelector('input').value = result;
    } else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

function evaluateExpression(expression) {
  try {
    return Function('return ' + expression)();
  } catch (error) {
    return 'Error';
  }
}
