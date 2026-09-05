let userScore = 0;
let computerScore =0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const resultImg = document.querySelector("#result-img");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

// captializes the choice made by user and computer so that it looks good in the displayed message
const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
};

//generate computer choice
const genCompChoice = () => {
    //rock, paper, scissors --> we store them in an array because there is no way in javascript to take out random string from collection of strings
    const options = ["rock", "paper", "scissors"];
    // to get a random choice from these options we will use Math.random method which generates a random value between 0 and 1
    /* now we have 3 options so, we will generate a number between 0 to 2 so do -> Math.random()*3 --> this will generate random numbers between 0 to 3 and 
     since we want whole numbers we will use Math.floor function whih will remove the decimal points --> Math.floor(Math.random()*3) */
     const randomIdx = Math.floor(Math.random()*3);
     return options[randomIdx];
}

// draw game function 
const drawGame = () => {
    console.log("It was a draw");
    msg.innerText = "It was a draw😎. Play again.";
    msg.style.backgroundColor = "#081b31";
    resultImg.src = "images/draw-game.gif"
}

//show who won the game
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("Hurrah🎉 You won the game!");
        msg.innerText = `Hurrah🎉 You won the game! Your ${capitalize(userChoice)} beats ${capitalize(computerChoice)}`;
        msg.style.backgroundColor = "green"; 
        resultImg.src = "images/won-game.gif";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore; 
        console.log("Oops ☹️ You lost the game");
        msg.innerText = `Oops ☹️ You lost the game. ${capitalize(computerChoice)} beats your ${capitalize(userChoice)}`;
        msg.style.backgroundColor = "crimson";
        resultImg.src = "images/lost-game.gif";
    }

}

// choices the computer can select
const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // generate computer choice -> modular programming -> whatever work we have we are generating small functions for that
    const computerChoice = genCompChoice();
    console.log("computer choice = ", computerChoice);

    if (userChoice === computerChoice) {
        // Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // choices left -> scissors or paper --> not rock because then it would have been a draw
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // choices left -> scissors or rock -> not paper because the it would have been a draw situation
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            // choices left -> rock or paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

// choices the user can select
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
}); 
