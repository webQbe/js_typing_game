// Listen for Page Load
window.addEventListener('load', init);

// Globals
let time = 5;
let score = 0;
let isPlaying; // Is game going on?


// Define DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


// Word Array
const words = [
    "apple", "banana", "cherry", "dragonfruit", "elderberry",
    "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "papaya", "quince",
    "raspberry", "strawberry", "tangerine", "ugli", "violet",
    "watermelon", "xigua", "yam", "zucchini", "apricot",
    "blueberry", "coconut", "date", "elderflower", "fig"
];

// Initialize Game
function init(){

    // Load word from array
    showWord(words);

    // Match input text
    wordInput.addEventListener('input', startMatch);

    // Call countdown() every second
    setInterval(countdown, 1000);

    // Call checkStatus() every 50ms
    setInterval(checkStatus, 50);

}

// Start matching 
function startMatch(){

    // Check if matchWords() returns true or false
    if(matchWords()){

        isPlaying = true;
        time = 6; // Reset time (1 above init time)
        showWord(words); // Show new word
        wordInput.value = ''; // Clear text input
        score++; // Increment score by 1

    }
    
    // If score is -1, display 0
    if(score === -1){

        scoreDisplay.innerHTML = 0;


    } else {

        scoreDisplay.innerHTML = score;

    }

    

}

// Match user input with current word
function matchWords(){

    // Check if currentWord value to wordInput text
    if(wordInput.value === currentWord.innerHTML){

        message.innerHTML = 'Correct!!!';
        return true;

    } else {

        message.innerHTML = '';
        return false;

    }

}



// Pick & show random word
function showWord(words){

    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);

    // Output random word
    currentWord.innerHTML = words[randIndex];

}

// Countdown timer
function countdown(){

    // Check time limit
    if(time > 0){

        // Count down
        time--;

    } else if(time === 0){

        // Game is over
        isPlaying = false;

    }

    // Display time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus(){

    // Check if game is over & no time left
    if(!isPlaying && time === 0){

        message.innerHTML = 'Game Over!!!';
        
        // Reset score with -1
        // Count down stops when game is over
        // Do not add point for first word after game is over
        score = -1;

    }

}
