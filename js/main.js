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

    console.log('Game started!');

}