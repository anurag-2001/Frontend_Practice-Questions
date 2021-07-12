const cards = document.querySelectorAll(".memory-card")

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard=false
function flipCard() {

    if(lockBoard) return;
    if(this==firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true
        //first cards
        firstCard = this;
        return
    } 
        //second card
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch()
}

function checkForMatch() {
    let isMatch = firstCard.dataset.frame === secondCard.dataset.frame
    //It is for matching the card
    isMatch?disableCard():unFlickCards()
    
}

function disableCard() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    hideCard()

}

function hideCard() {
    setTimeout(() => {
        firstCard.classList.add('hide-card');
        secondCard.classList.add('hide-card');
    }, 1500);
}

function unFlickCards(){
    lockBoard=true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard()
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard,lockBoard]=[false,false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card=>{
         let randomPos=Math.floor(Math.random()*12);
         card.style.order=randomPos;
    })
})();
cards.forEach((card) => {
    // console.log("cards")
    card.addEventListener('click', flipCard)
})