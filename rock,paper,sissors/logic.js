let userScore = 0;
let compScore = 0;

function compChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

let winner = (userChoice, compCh) => {

    if (userChoice === compCh) {
        return 0;
    } else if (userChoice === "Rock") {
        if (compCh === "Scissors") {
            return 1;
        } else {
            return 2;
        }
    } else if (userChoice === "Paper") {
        if (compCh === "Rock") {
            return 1;
        } else {
            return 2;
        }
    } else {
        if (compCh === "Paper") {
            return 1;
        } else {
            return 2;
        }
    }
}

let choices = document.querySelectorAll(".choice");
let cont = document.querySelector("#msg");
let userSc = document.querySelector("#player-score");
let compSc = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        let compCh = compChoice();
        let result = winner(userChoice, compCh);
        if (result === 0) {
            cont.innerText = "Its a tie, Play again";
            cont.style.backgroundColor = "blue";
        } else if (result === 1) {
            cont.innerText = `You Win! Your ${userChoice} beats ${compCh}`;
            cont.style.backgroundColor = "green";
            userScore++;
            userSc.innerText = userScore;
        } else {
            cont.innerText = `You Lose! ${compCh} beats your ${userChoice}`;
            cont.style.backgroundColor = "red";
            compScore++;
            compSc.innerText = compScore;
        }
    })
})


// console.log("How can i help you, sir?");
