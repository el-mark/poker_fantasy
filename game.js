class SmartVehicle {
    constructor(wheels, color) {
        this.wheels = wheels;
        this.color = color;
    }
    start() {
        console.log('Rum rum');
    }
    description() {
        console.log(`I am a ${this.wheels} wheels ${this.color} vehícle`);
    }
}
const autoRojo = new SmartVehicle(4, 'red')
// autoRojo.start()
// autoRojo.description()

var age = 18;

const planetas = 12;
let myAge = 18;

// console.log(Array.from(Array(52)));
const emptyArray = Array.from(Array(52))
let shuffledDeck = emptyArray.map((element, index) => index + 1 )

function shuffle(deck) {
    var currentIndex = deck.length;
    var temporaryValue;
    var randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    }

    return deck;
}

// Used like so
shuffle(shuffledDeck);
console.log(shuffledDeck);
