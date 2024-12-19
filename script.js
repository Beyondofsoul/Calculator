const input = document.getElementById('display');
const buttons = document.getElementById('buttons');

function updateDisplay(e) {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    if (button.classList.contains('digits')) {
      input.value += button.textContent;
    } else if (button.classList.contains('mathButtons')) {
      input.value += button.textContent;
    } else if (button.classList.contains('clear')) {
      display.value = '';
    } else if (button.classList.contains('equals')) {
      const result = Math.floor(eval(input.value));
      if (!isFinite(result)) {
        input.value = 'Деление на ноль';
      } else {
        input.value = result;
      }
    } else if (button.classList.contains('deleteLast')) {
      input.value = input.value.slice(0, -1);
    } else if (button.classList.contains('decimal')) {
      if (!input.value.includes('.')) {
        input.value += '.';
      }
    }
  }
}

input.addEventListener('keydown', (e) => {
  if (/[\d+\-*/.=]/.test(e.key)) {
    input.value += e.key;
  } else if (e.key === 'Enter') {
    input.value = eval(input.value);
  } else if (e.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  }
});

buttons.addEventListener('click', updateDisplay);
