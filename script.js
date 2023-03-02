


// Array mit den Wörtern, aus denen ein zufälliges Wort ausgewählt wird
const words = ['Ronaldo', 'Messi', 'Benzema', 'Maradona', 'Neuer', 'Beckham', 'Buffon', 'Kroos', 'Lewandowski', 'Neymar','Reuss', 'Pogba' ];

// Maximale Anzahl von Versuchen
const maxGuesses = 6;

// Die möglichen Preise, die man beim Drehen des Rades gewinnen kann
const spinResults = [100, 200, 300, 400, 500, 'Bankrott', 'Verlierer'];

let wordToGuess; // Das Wort, das geraten werden muss
let remainingGuesses; // Anzahl der verbleibenden Versuche
let guessedLetters = []; // Liste der geratenen Buchstaben
let totalPrize = 0; // Gesamtpreis, der gewonnen wurde

const startButton = document.getElementById('start-button');
const gameDiv = document.getElementById('game');
const wordDiv = document.getElementById('word');
const guessesDiv = document.getElementById('guesses');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const spinButton = document.getElementById('spin-button');
const spinResultDiv = document.getElementById('spin-result');
const totalPrizeDiv = document.getElementById('total-prize');

// Handler für den Start-Button
startButton.addEventListener('click', startGame);

// Handler für das Guess-Button
guessButton.addEventListener('click', makeGuess);

// Handler für das Spin-Button
spinButton.addEventListener('click', spinWheel);

// Handler für das Input-Feld
guessInput.addEventListener('input', updateGuessButtonState);

// Startet ein neues Spiel
function startGame() {
  // Wähle ein zufälliges Wort aus dem Array aus
  wordToGuess = words[Math.floor(Math.random() * words.length)].toUpperCase();
  remainingGuesses = maxGuesses;
  guessedLetters = [];
  totalPrize = 0;

  // Setze die UI-Elemente zurück
  wordDiv.textContent = getHiddenWord();
  guessesDiv.textContent = '';
  spinResultDiv.textContent = '';
  totalPrizeDiv.textContent = 'Gesamtgewinn: 0';

  // Zeige das Spiel-Div an und das Start-Button ausblenden
  gameDiv.style.display = 'block';
  startButton.style.display = 'none';

  // Setze den Fokus auf das Input-Feld
  guessInput.focus();
}

// Gibt das Wort zurück, wobei nicht geratene Buchstaben als Unterstriche dargestellt werden
function getHiddenWord() {
  let hiddenWord = '';
  for (let i = 0; i < wordToGuess.length; i++) {
    if (guessedLetters.includes(wordToGuess[i])) {
      hiddenWord += wordToGuess[i];
    } else {
      hiddenWord += '_';
    }
    hiddenWord += ' ';
  }
  return hiddenWord.trim();
}

// Aktualisiert das UI
function updateUI() {
  wordDiv.textContent = getHiddenWord();
  guessesDiv.textContent = `Bereits geratene Buchstaben: ${guessedLetters.join(', ')}`;
  totalPrizeDiv.textContent = `Gesamtgewinn: ${totalPrize}`;
}

// Überprüft, ob der geratene Buchstabe im Wort enthalten ist
function makeGuess() {
    const guess = guessInput.value.toUpperCase();

    // Überprüfe, ob der Buchstabe bereits geraten wurde
    if (guessedLetters.includes(guess)) {
      alert('Du hast diesen Buchstaben bereits geraten!');
      guessInput.value = '';
      return;
    }
    
  
    // Füge den Buchstaben zur Liste der geratenen Buchstaben hinzu
    guessedLetters.push(guess);
  
    // Wenn der geratene Buchstabe im Wort enthalten ist, aktualisiere das UI
    if (wordToGuess.includes(guess)) {
      updateUI();
      // Überprüfe, ob das Wort vollständig geraten wurde
      if (!getHiddenWord().includes('_')) {
        endGame(true);
      }
    } else {
      // Der geratene Buchstabe ist nicht im Wort enthalten
      remainingGuesses--;
      updateUI();
      // Überprüfe, ob keine Versuche mehr übrig sind
      if (remainingGuesses === 0) {
        endGame(false);
      }
    }
  
    // Setze den Input zurück und setze den Fokus auf das Input-Feld
    guessInput.value = '';
    guessInput.focus();
  }
  
  // Beendet das Spiel
  function endGame(won) {
    // Zeige das Ergebnis an
    if (won) {
      alert(`Herzlichen Glückwunsch, du hast das Wort "${wordToGuess}" erraten!`);
    } else {
      alert(`Leider hast du das Wort "${wordToGuess}" nicht erraten.`);
    }
  
    // Blende das Spiel-Div aus und zeige den Start-Button wieder an
    gameDiv.style.display = 'none';
    startButton.style.display = 'block';
  }
  
  // Überprüft, ob der Guess-Button aktiviert oder deaktiviert werden soll
  function updateGuessButtonState() {
    guessButton.disabled = guessInput.value === '';
  }
  
  // Dreht das Rad und gibt das Ergebnis zurück
  function spinWheel() {
    // Wähle ein zufälliges Ergebnis aus dem Array aus
    const spinResult = spinResults[Math.floor(Math.random() * spinResults.length)];
    // Aktualisiere das UI
    spinResultDiv.textContent = `Dreh-Ergebnis: ${spinResult}`;
    if (spinResult === 'Bankrott') {
      totalPrize = 0;
    } else if (spinResult === 'Verlierer') {
      totalPrize -= 100;
    } else {
      totalPrize += spinResult;
    }
    totalPrizeDiv.textContent = `Gesamtgewinn: ${totalPrize}`;
  }

  
  