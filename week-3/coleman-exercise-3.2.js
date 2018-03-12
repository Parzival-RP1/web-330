var header = require('../header.js');
console.log(header.display("Daniel", "Coleman", "Exercise 3.2"));
console.log("\n");

/* ============================================ 
; Title: Exercise 3.2
; Author: Richard Krasso 
; Date: 6 March 2018
; Modified By: Daniel Coleman
; Description: The Factory Pattern
============================================= */


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

// Add default acctions if nothing is provided
function Oracle(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "o-s3cret";
    this.server = properties.server || "localhost:5454";
    this.version = properties.version || "10g";
}

function Informix(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "in-s3cret";
    this.server = properties.server || "localhost:3030";

}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    }
    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "<username>",
    password: "<password>",
    server: "<server>",
    version: "<version>"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "<username>",
    password: "<password>",
    server: "<server>"
});

// output results using console log function to pass in objects
console.log(oracle);
console.log(informix);


// end program