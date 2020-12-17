// create variables to use for reference in html
$("#currentDay").text(moment().format("dddd,MMMM Do"))
// upon page open, date/time are shown at top
// TODO: use third party library to fetch date/time data
// TODO: print day/time to screen
$(".saveBtn").on("click", function(){
    var time = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();
    localStorage.setItem(time, input);
})
// previously saved tasks generate from local storage (or any empty array if nothing exists).
// TODO: function to generate info from local storage at page load

// as time moves forward, hour rows change from green (future), current (red) & past (grey).
// TODO: create conditionals that add/remove class names to rows 
function hourChange(){
    var currentHour = moment().hours()
    $(".time-block").each(function(){
        var compareHour = parseInt($(this).attr("id").split("-")[1]);
        if(compareHour < currentHour){
            $(this).addClass("past")
        }else if(compareHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });
};
 hourChange();
var interval = setInterval(hourChange, 15000);
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-9 .description").val(localStorage.getItem("hour-10")); // cotinue for each time field
// when I click into a text area, I can record my tasks 
// TODO: create click event so user input field for text is generated when click happens

// when I click the save button, tasks are saved to local storage
// TODO: create click event that saves text to local storage
