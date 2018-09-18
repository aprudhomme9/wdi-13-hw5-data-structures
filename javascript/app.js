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
