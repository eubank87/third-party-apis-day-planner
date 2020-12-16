// create variables to use for reference in html
var currentDay = $("#currentDay");
var textArea = $(".textarea");
var saveBtn = (".saveBtn");

// upon page open, date/time are shown at top
// TODO: use third party library to fetch date/time data
// TODO: print day/time to screen

// previously saved tasks generate from local storage (or any empty array if nothing exists).
// TODO: function to generate info from local storage at page load

// as time moves forward, hour rows change from green (future), current (red) & past (grey).
// TODO: create conditionals that add/remove class names to rows 

// when I click into a text area, I can record my tasks 
// TODO: create user input field for text

// when I click the save button, tasks are saved to local storage
// TODO: create click event that saves text to local storage