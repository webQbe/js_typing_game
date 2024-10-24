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

    // Call countdown every second
    setInterval(countdown, 1000);

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

        // Game over
        isPlaying = false;

    }

    // Display time
    timeDisplay.innerHTML = time;
}