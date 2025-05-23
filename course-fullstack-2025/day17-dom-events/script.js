const button = document.getElementById("clickMe");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

button.addEventListener("click", () => {
  const name = nameInput.value;
  greeting.innerText = `Hello, ${name || "stranger"}!`;
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
  nameInput.value = "";
  greeting.innerText = "";
});

nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim();
  greeting.innerText = name ? `Hello, ${name}!` : '';
});
