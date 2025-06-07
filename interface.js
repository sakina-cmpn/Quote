const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Do not watch the clock. Do what it does. Keep going.",
  "Keep your face always toward the sunshine—and shadows will fall behind you."
];

let currentIndex = -1;
const quoteText = document.getElementById('quote');
const nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quotes.length; // Loop
  quoteText.textContent = quotes[currentIndex];

  nextBtn.style.display = 'none';
  setTimeout(() => {
    nextBtn.style.display = 'inline-block';
  }, 3000);
});

const saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', () => {
  const currentQuote = quotes[currentIndex];
  let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];

  // Avoid duplicates
  if (!savedQuotes.includes(currentQuote)) {
    savedQuotes.push(currentQuote);
    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
    alert("Quote saved!");
  } else {
    alert("Quote already saved.");
  }
});


  /*const quoteBox = document.getElementById("box");
const nextButton = document.getElementById("next");

async function fetchQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    quoteBox.innerText = `"${data.content}" — ${data.author}`;
  } catch (error) {
    quoteBox.innerText = "Failed to fetch quote. Try again.";
  }
}

nextButton.addEventListener("click", fetchQuote);

// Load first quote on page load
window.onload = fetchQuote;*/