// === Exercice 1 – Télécommande de lampe ===
const lightBtn = document.querySelector("#ex1 .switch-btn");
const lightBulb = document.querySelector("#ex1 .light-bulb");

lightBtn.addEventListener("click", () => {
  lightBulb.classList.toggle("on");
});

// === Exercice 2 – Afficheur de mot mystère ===
const mysteryInput = document.querySelector("#ex2 input");
const mysteryBtn = document.querySelector("#ex2 button");
const mysteryResult = document.querySelector("#ex2 .result");

mysteryBtn.addEventListener("click", () => {
  mysteryResult.textContent = mysteryInput.value;
});

// === Exercice 3 – Simulateur d'humeur ===
const moodButtons = document.querySelectorAll("#ex3 .mood-btn");
const moodDisplay = document.querySelector("#ex3 .result");

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    moodDisplay.textContent = `Tu es ${button.textContent} aujourd'hui !`;
  });
});

// === Exercice 4 – Contrôle de volume ===
const volumeSlider = document.querySelector("#ex4 input[type='range']");
const volumeDisplay = document.querySelector("#ex4 .volume-display");

volumeSlider.addEventListener("input", () => {
  volumeDisplay.textContent = `Volume : ${volumeSlider.value}%`;
});

// === Exercice 5 – Nom d'utilisateur en direct ===
const usernameInput = document.querySelector("#ex5 input");
const welcomeMessage = document.querySelector("#ex5 .welcome-message");

usernameInput.addEventListener("input", () => {
  const name = usernameInput.value.trim() || "visiteur";
  welcomeMessage.textContent = `Bienvenue, ${name} !`;
});
