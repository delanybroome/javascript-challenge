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

// Step Loop 
data.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");
    });
//Step Object Entries and Filter Data
// DateTime, City, State, Country, Shape, DuriationMinutes, comments

data.forEach(function(UFO) {
    console.log(UFO);
    //table 
    var row =tbody.append("tr");
    //key values + object entries
    Object.entries(UFO).forEach(function([key, value]) {
        console.log(key, value);
    //Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
});
});
// Selecting the Filter Button 
var button = d3.select("#filter-btn");

// Create Event Handles
button.on("click", function() {
    tbody.html("");
    //input element 
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

// Filter Data 
var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
console.log(filteredData);

// Display the filtered dataset
filteredData.forEach((report) => {
    var row = tbody.append('tr');

}



