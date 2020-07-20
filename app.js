//Instructions: 
// Using the UFO dataset provided in the form of an array
// of JavaScript objects, write code that appends a table 
//to your web page and then adds new rows of data for 
//each UFO sighting
//Make sure you have a column for
// `date/time`, `city`, `state`, `country`, `shape`, 
//and `comment` at the very least.

// from data.js
var tableData = data;

/// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Step 1 Loop 
data.forEach(function(UFO) {
    console.log(UFO);
    });
data.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");
    });