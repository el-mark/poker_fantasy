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
let shuffleDeck = emptyArray.map((element, index) => index + 1 )

function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);
