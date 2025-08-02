const display = document.getElementById('display');
const historyDiv = document.getElementById('history');

function append(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = '';
}
function backspace() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    const result = eval(display.value.replace('%', '/100'));
    historyDiv.innerHTML += `<div>${display.value} = ${result}</div>`;
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  document.querySelector('.calculator').classList.toggle('light-mode');
  document.querySelector('#display').classList.toggle('light-mode');
}

// Keyboard input support
document.addEventListener('keydown', (event) => {
  if (!isNaN(event.key) || ['+', '-', '*', '/', '.', '%'].includes(event.key)) {
    append(event.key);
  } else if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Backspace') {
    backspace();
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});
