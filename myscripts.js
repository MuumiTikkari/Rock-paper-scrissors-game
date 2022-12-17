const arr = ["Rock", "Paper", "Scissors"] //Choices for computer to pick
let playerSelection; //Runs function for getting players choice
let computerSelection; // Runs function for getting computers choice

function getComputersChoice(){
    let randomElement = arr[Math.floor(Math.random() * arr.length)] //Takes random index from arr
    return randomElement;
}

function playRound(playerSelection, computerSelection){                 //This fuction uses playerselection and computerselection to get result for each round
    if(playerSelection == "Rock" && computerSelection == "Scissors"){   // It also updates score element in DOM after each round
        playerScore.innerText = parseInt(playerScore.innerText, 10) + 1
        return ("You Win! " + playerSelection + " beats " + computerSelection + "!")
    }else if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore.innerText = parseInt(playerScore.innerText, 10) + 1
        return ("You Win! " + playerSelection + " beats " + computerSelection + "!")
    }else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore.innerText = parseInt(playerScore.innerText, 10) + 1
        return ("You Win! " + playerSelection + " beats " + computerSelection + "!")
    }
    
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        computerScore.innerText = parseInt(computerScore.innerText, 10) + 1
        return ("You Lose! " + computerSelection + " beats " + playerSelection + "!")
    }else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        computerScore.innerText = parseInt(computerScore.innerText, 10) + 1
        return ("You Lose! " + computerSelection + " beats " + playerSelection + "!")
    }else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        computerScore.innerText = parseInt(computerScore.innerText, 10) + 1
        return ("You Lose! " + computerSelection + " beats " + playerSelection + "!")
    }
    else if (playerSelection == computerSelection){
        return ("It's a tie!")
    }
}

let rock = document.querySelector('#rock') //Making js variables from html buttons
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

let playerScore = document.querySelector('#playerScore') //Making score variables for player and computer
let computerScore = document.querySelector('#computerScore')

let roundWinner = document.querySelector("#roundWinner") // Making variable for result of round


rock.addEventListener("click", () => {              // Making click listener for rock button
    let result = playRound("Rock", getComputersChoice())// Running playround function to get computers choice and result of the game
    roundWinner.innerHTML = (result)                //show result on roundwinner div in DOM
    if(parseInt(playerScore.innerText, 10) === 5) { //Checks if winning condition is true
        disableButtons()                            //Disables button after reaching winning condition
        alert("Player wins! Congratulations!")
    } else if (parseInt(computerScore.innerText, 10) === 5){
        disableButtons()
        alert("Computer wins! Better luck for next time")
    }
})

paper.addEventListener("click", () => {
    let result = playRound("Paper", getComputersChoice())
    roundWinner.innerHTML = (result)
    if(parseInt(playerScore.innerText, 10) === 5) {
        disableButtons()
        alert("Player wins! Congratulations!")       
    } else if (parseInt(computerScore.innerText, 10) === 5){
        disableButtons()
        alert("Computer wins! Better luck for next time")        
    }
})

scissors.addEventListener("click", () => {
    let result = playRound("Scissors", getComputersChoice())
    roundWinner.innerHTML = (result)
    if(parseInt(playerScore.innerText, 10) === 5) {
        disableButtons()
        alert("Player wins! Congratulations!")
    } else if (parseInt(computerScore.innerText, 10) === 5){
        disableButtons()
        alert("Computer wins! Better luck for next time")        
    }
})

const buttons = document.querySelectorAll(".button")

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}
