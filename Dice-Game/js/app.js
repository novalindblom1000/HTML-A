
document.body.style.textAlign = "center"; // Align text to center
document.body.style.marginTop = "100px";


// VARIABLES
let button0 = document.getElementById("button0");

// TEXT
let playerRollText = document.getElementById("playerRollText");
let aiRolltext = document.getElementById("aiRolltext");
let results = document.getElementById("results");
let playerScoreText = document.getElementById("playerScoretext"); // Player score display
let aiScoreText = document.getElementById("aiScoretext"); // AI score display

// DATA
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0; // Player score variable
let aiScore = 0; // AI score variable




tryLoadGame();
updateAiScore();
updatePlayerScore();

// PROCESSES
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixForAI();
  showAIROLLResults();
  compareRolls();
  saveGame();
  updateAiScore();
  updatePlayerScore();


});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function getRandomNumberOneToSixForAI() {
  aiRoll = Math.floor(Math.random() * 6) + 1;
}

function compareRolls() {
  if (playerRoll > aiRoll) {
    playerScore++; // Increment player score when player wins
    updatePlayerScore(); // Update player score display
    showText("Winner");
  } else if (playerRoll < aiRoll) {
    aiScore++; // Increment AI score when AI wins
    updateAiScore(); // Update AI score display
    showText("Loser");
  } else {
    showText("Draw");
  }
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}

function showAIROLLResults() {
  aiRolltext.innerHTML = aiRoll;
}

function showText(result) {
  results.textContent = result;
}

function updatePlayerScore() {
  playerScoreText.innerHTML = playerScore; // Update player score in the HTML
}

function updateAiScore() {
  aiScoreText.innerHTML = aiScore; // Update AI score in the HTML
}

function saveGame () {
  document.cookie="playerScore=" + playerScore + ";expires=Thu, 29 Dec 2024 12:00:00 UTC";

  document.cookie="aiScore=" + aiScore + ";expires=Thu, 29 Dec 2024 12:00:00 UTC";
}

function tryLoadGame() {
  playerScore = getCookie("playerScore");
  aiScore = getCookie("aiScore");
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
