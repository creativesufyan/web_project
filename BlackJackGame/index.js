
let player = {
    name:"Sufyan",
    chips: 200
}
let cards = []
let sum = 0;
let hasBlackJack = true
let isAlive = false 
let message = ""

let messageEl = document.getElementById("message-el") 
let cardEl = document.getElementById("card-el") 
let sumEl = document.querySelector("#sum-el") 
let playersEl = document.getElementById("player-el")
playersEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 ;

    if(randomNumber > 10 ){
        return 10
    } else if( randomNumber === 1){
        return 11 ;
    } else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent =  "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum : " + sum;
    if(sum <= 30){
        message = "Do you want to draw a new card ? "
    }
    else if(sum === 30){
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === true){
        let card = getRandomCard()
        sum +=card
        cards.push(card)
        renderGame()
    }
}
