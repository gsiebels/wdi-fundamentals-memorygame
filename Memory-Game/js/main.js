//Memory Game
//Game target get same card after first pick


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];


cardsInPlay.push(cardOne);


console.log("User flipped a queen");

var cardTwo = cards[2];

console.log("User flipped a king")

cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry!, try again");
	}

}





