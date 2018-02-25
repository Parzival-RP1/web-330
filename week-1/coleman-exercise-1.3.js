var header = require('../header.js');
console.log(header.display("Daniel", "Coleman", "Exercise 1.3"));
console.log("\n");

/* ============================================ 
; Title: Exercise 1.3
; Author: Richard Krasso 
; Date: 25 Februrary 2018
; Modified By: Daniel Coleman
; Description: Class Refresher -  The most common way to define classes are through functions and object literals.
;=========================================== */

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

function Cellphone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    // Get Price function
    this.getPrice = function() {
        return this.price;
    }

    // Get model function
    this.getModel = function() {
        return this.model;
    }

    // Get Details function
    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
}

var cellPhone = new Cellphone("Samsung", "Note 8", "Black", "499.99");
console.log(cellPhone.getDetails());

// end program