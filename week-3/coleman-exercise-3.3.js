var header = require('../header.js');
console.log(header.display("Daniel", "Coleman", "Exercise 3.3"));
console.log("\n");

/* ============================================ 
; Title: Exercise 3.3
; Author: Richard Krasso 
; Date: 6 March 2018
; Modified By: Daniel Coleman
; Description: The Singleton Pattern
============================================= */

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {
    var instance;

    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    //Checks to see if the instance is currently active / if it ISNT, it will create a new instance, or return the orginal
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);
}

//call the single test function

databaseSingletonTest();

// end program