let homeScore = 0
let guestScore = 0

let homeScoreDisplay = document.getElementById("home-score")
let guestScoreDisplay = document.getElementById("guest-score")

let homeScoreBoard = document.getElementById("home-board")
let guestScoreBoard = document.getElementById("guest-board")

homeScoreDisplay.textContent = homeScore
guestScoreDisplay.textContent = guestScore

function checkWinner(home,guest) {
    let homeWinner = homeScoreBoard.classList.contains("winner");
    let guestWinner = guestScoreBoard.classList.contains("winner");
    
    if (homeWinner == false && guestWinner == false && home > guest) {
        homeScoreBoard.classList.add("winner");
    }
    
    if (homeWinner == false && guestWinner == false && guest > home) {
        guestScoreBoard.classList.add("winner");
    }
    
    if (homeWinner && guest > home) {
        homeScoreBoard.classList.remove("winner");
        guestScoreBoard.classList.add("winner");
    }
    
    if (guestWinner && home > guest) {
        guestScoreBoard.classList.remove("winner");
        homeScoreBoard.classList.add("winner");        
    }
    
    if (guest == home) {
        homeScoreBoard.classList.remove("winner");
        guestScoreBoard.classList.remove("winner");
    }
}

function homePlus(points) {
    homeScore += points
    homeScoreDisplay.textContent = homeScore
    checkWinner(homeScore,guestScore);

}

function guestPlus(points) {
    guestScore += points
    guestScoreDisplay.textContent = guestScore
    checkWinner(homeScore,guestScore);
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreDisplay.textContent = homeScore
    guestScoreDisplay.textContent = guestScore
    homeScoreBoard.classList.remove("winner");
    guestScoreBoard.classList.remove("winner");
}