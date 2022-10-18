const player1_score = 0
const com_score = 0
const vsResult = document.querySelector(".result")
const rock = document.getElementById("r")
const paper = document.getElementById("p")
const scissors = document.getElementById("s")

function getComChoice() {
    const choices = ["r", "p", "s"]
    const randomNum = Math.floor(Math.random()*3)
    return choices[randomNum]
}

function win(player1Choice, computerChoice) {
    console.log("Win")
    vsResult.innerHTML = "Player 1 Win"
}

function lose(player1Choice, computerChoice) {
    console.log("Lose")
    vsResult.innerHTML = "Computer Win"
}

function draw(player1Choice, computerChoice) {
    console.log("Draw")
    vsResult.innerHTML = "Draw"
}
function game(player1Choice) {
    const computerChoice = getComChoice()
    switch(player1Choice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win()
            break
        case "rp":
        case "ps":
        case "sr":
            lose()
            break
        case "rr":
        case "pp":
        case "ss":
            draw()
            break
    }
}

function main() {
    rock.addEventListener('click', function(){
        game("r")
    })

    paper.addEventListener('click', function(){
        game("p")
    })

    scissors.addEventListener('click', function(){
        game("s")
    })
}

main()