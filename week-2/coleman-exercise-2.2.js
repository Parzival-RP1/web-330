var header = require('../header.js');
console.log(header.display("Daniel", "Coleman", "Exercise 2.2"));
console.log("\n");

/* ============================================ 
; Title: Exercise 2.2
; Author: Richard Krasso 
; Date: 25 Februrary 2018
; Modified By: Daniel Coleman
; Description: Prototypes
;=========================================== */

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

SAMPLE CODE -- 
var publication = {

getType: function () {

console.log("The publication type is '" + this.type + "'");

}

};


var book = Object.create(publication, {

"type": {

"value": "Book",

enumerable: true

},

"title": {

"value": "Learning JavaScript Design Patterns."

}

});

book.getType();

console.log("The title is '" + book.title + "'");

*/

// start program

var person = {
    getAge: function() {
        return this.age;
    }
}

var daniel = Object.create(person, {
    "age": {
        "value": "31"
    },
    "fullname": {
        "value": "daniel coleman"
    }
});

daniel.getAge();

console.log("The person's full name is: '%s'",
    daniel.fullname);
console.log("The person's age is '%s' ",
    daniel.age);


// end program