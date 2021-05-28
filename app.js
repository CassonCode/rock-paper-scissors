
// Array of options from which the computer can choose to use
let computerChoicesArray = ["Rock", "Paper", "Scissors"];

// Function to calculate a random integer that exists within a given interval (from 'min' to 'max')
function calcRandomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Function to return a random element from 'computerChoicesArray'
  function computerPlay() {
      return computerChoicesArray[calcRandomIntFromInterval(0, 2)];
  }

  