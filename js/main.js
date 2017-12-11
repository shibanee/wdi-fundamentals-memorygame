console.log("Up and running!");

var cards = ['Queen','Queen','King','King'];
var cardOne = cards[0];
var cardTwo = cards[1];
var cardsInPlay = [];

var checkForMatch = function(cardOne,cardTwo){
  if(cardsInPlay[0] === cardsInPlay[2]){
    alert("You found a match");
  }else{
    alert("Sorry, try again.")
  }
}

var flipCard = function(cardOne,cardTwo){
  console.log("User flipped " + cards[cardId]);
  flipCard();
}
