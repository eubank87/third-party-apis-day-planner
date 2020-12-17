// Display current day/time to screen
$("#currentDay").text(moment().format("MMMM Do YYYY, h:MM:ss a"))

// when I click the save button, tasks are saved to local storage
$(".saveBtn").on("click", function(){
    var time = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();
    localStorage.setItem(time, input);
})

// as time moves forward, hour rows change from green (future), current (red) & past (grey).
var interval = setInterval(hourChange, 15000);

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

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5")); 