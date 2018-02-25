var header = require('../header.js');
console.log(header.display("Daniel", "Coleman", "Exercise 1.4"));
console.log("\n");

/* ============================================ 
; Title: Exercise 1.4
; Author: Richard Krasso 
; Date: 25 Februrary 2018
; Modified By: Daniel Coleman
; Description: Duck Typing - AKA "Interfaces"
;=========================================== */

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
// create functions"classes" for car(1 par) - truck(2 par) - jeep(3 par)
// create prototypes (.start) for each class that outputs added to racetrack (console.log("Car added to the racetrack!"))
function Car(model) {
    this.model = model;
}
Car.prototype.start = function() {
    console.log("Car added to the racetrack!")
}

function Truck(model, year) {
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!")
}

function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!")
}


// create an empty array
var racetrack = [];

// create  a driveIt function (1 par - vehicle)
function driveIt(vehicle) {
    vehicle.start();
    // push the vehicle to the racetrack array
    racetrack.push(vehicle);
}

// create three (3) vehicle classes and pass them through the driveIt() function
var civic = new Car("Civic");
var tundra = new Truck("Tundra", "2018");
var liberty = new Jeep("Liberty", "2018", "Orange");

console.log("");

driveIt(civic);
driveIt(tundra);
driveIt(liberty);

// Iterate over the racetrack array and output the results
console.log("\n The following vehicles have been added to the racetrack --");
for (var i = 0; i < racetrack.length; i++) {
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}

// end program