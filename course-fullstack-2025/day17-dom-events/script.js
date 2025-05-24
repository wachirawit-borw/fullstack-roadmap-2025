const panel = document.getElementById('buttonPanel');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

panel.addEventListener('click', (event) => {
  if (!event.target.matches('.action')) return;

  const action = event.target.innerText.toLowerCase();
  const name = nameInput.value.trim() || 'stranger';

  if (action === 'greet') {
    greeting.innerText = `Hello, ${name}!`;
  }

  if (action === 'clear') {
    greeting.innerText = '';
    nameInput.value = '';
  }

  if (action === 'surprise') {
    greeting.innerText = `🎉 Surprise, ${name}! 🎉`;
  }
});
