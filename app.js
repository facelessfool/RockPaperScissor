var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  if (letter == "s") return "Scissor";
}

function win(uChoice, cChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML =
    convertToWord(uChoice) +
    smallUserWord +
    " beats " +
    convertToWord(cChoice) +
    smallCompWord +
    ". You win!";

  document.getElementById(uChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(uChoice).classList.remove("green-glow");
  }, 400);
}

function lose(uChoice, cChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();

  result_p.innerHTML =
    convertToWord(cChoice) +
    smallCompWord +
    " beats " +
    convertToWord(uChoice) +
    smallUserWord +
    ". You Lose!";

  document.getElementById(uChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(uChoice).classList.remove("red-glow");
  }, 400);
}

function draw(choice) {
  result_p.innerHTML = "You both picked " + convertToWord(choice) + ". DRAW!";
  document.getElementById(choice).classList.add("gray-glow");
  setTimeout(function () {
    document.getElementById(choice).classList.remove("gray-glow");
  }, 400);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);

      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice);
      break;
  }
}

// Add event listener

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissor_div.addEventListener("click", function () {
    game("s");
  });
}

main();
