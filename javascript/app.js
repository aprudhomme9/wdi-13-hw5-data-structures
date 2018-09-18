console.log("up and running");
// 1.
// Create an object lightSwitch with a property isOn = true or false
	// const lightSwitch = {
		// isOn: true
	// }
// Create an object user with a property for email, which could be set to a prompt in the window where the user must enter their email address
	// const user = {
	// 	name: "Andy",
	// 	email: "aprudhomme9@gmail.com" or window.prompt("enter your email", "your email here")
	// }
// Maybe create an array spaceShip with a list of all of its parts or an object that has the parts as properties or methods with corresponding values
	// const spaceShip = ["hull", "laser blasters", "tractor beam", "warp drive"]
	// or const spaceShip = {
	// 	hull: "open",
	// 	laser blasters: "on",
	// 	tractorBeam () {
	// 		console.log("tractor beeeaaamm")
	// 	},
	// 	warpDrive () {
	// 		console.log("full speed ahead!")
	// 	}
	// }
// An array, students, that lists all student names in the class
// const students = ["Andy", "Chris R", "Chris L", "Charlotte", "Greg", "Ashley", "Fil", "Josh", "John"]
// An array of objects with each student and corresponding location property
// const students = [{name: "Andy", location: "Chicago"}, {name: "Chris R", locatin: "Chicago"}]
// An array of objects, each of which contains a location property and then a favorite shows property that contains an array of shows
// const students = [{
// 	name: "Andy",
// 	location: "Chicago",
// 	favorite shows: ["The Office", "Parks and Rec", "Breaking Bad"]
// }]
// 2.
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

rainbowColors[4];
// => "blue"

const andy = {
	favoriteFood: "fajitas",
	hobby: "petting all of the dogs",
	town: "Chicago",
	favoriteDataType: "Objects"
}

andy.hobby;
// => "petting all of the dogs"

// 3.
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
// => "omg my mouth is burning"
console.log(crazyObject.larry.quotes[0]);
// => "Pretty pretty prettayyyy good"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// => "Swearing at Larry and Jeff"
console.log(crazyObject.larry.nicknames[1]);
// => "Chicken Teriyaki Boyyyyyyy"
console.log(crazyObject.larry.characters[1]);
// => {name: "funkhauser", occupation: "manager"}

// 4.

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null);
// => "Joseph Gordon Levitt"

// 5.
const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

const filmTitles = [];
for(i = 0; i < bondFilms.length; i++) {
	filmTitles.push(bondFilms[i].title);
}

console.log(filmTitles);

// 6.
