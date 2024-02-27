const speakButton = document.getElementById('speak-button');
const correctButton = document.getElementById('correct-button');
const wordCountButton = document.getElementById('word-count-button');
const textInput = document.getElementById('text-input');
const clock = document.getElementById('clock');
const wordCountDisplay = document.getElementById('word-count');
const clearAllButton = document.getElementById('clear-all-button');
const signInButton = document.getElementById('sign-in-button');
const signUpButton = document.getElementById('sign-up-button');

// Function to update the digital clock
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

speakButton.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (text !== '') {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
});

correctButton.addEventListener('click', () => {
  const text = textInput.value;
  const correctedText = correctGrammar(text);
  textInput.value = correctedText;
});

wordCountButton.addEventListener('click', () => {
  const text = textInput.value.trim();
  const words = text.split(/\s+/).filter(word => word !== '').length;
  wordCountDisplay.textContent = `Word Count: ${words}`;
});

clearAllButton.addEventListener('click', () => {
  textInput.value = ''; // Clear the textarea
  wordCountDisplay.textContent = ''; // Clear the word count display
});

signInButton.addEventListener('click', () => {
  // Add your sign-in logic here
  console.log('Sign in clicked');
});

signUpButton.addEventListener('click', () => {
  // Add your sign-up logic here
  console.log('Sign up clicked');
});

function correctGrammar(text) {
  // Capitalize the first letter of the text
  let correctedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  // Remove special characters
  correctedText = correctedText.replace(/[^a-zA-Z.\s]/g, '');

  // Ensure the text ends with a full stop
  if (!correctedText.endsWith('.')) {
    correctedText += '.';
  }

  return correctedText;
}