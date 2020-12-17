// Display current day/time to screen
$("#currentDay").text(moment().format("MMMM Do YYYY, h:MM:ss a"))

// when I click the save button, tasks are saved to local storage
$(".saveBtn").on("click", function(){
    var time = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();
    localStorage.setItem(time, input);
})

// as time moves forward, hour rows change from green (future), current (red) & past (grey).

function hourChange(){
    var currentHour = moment().hours()
    $(".time-block").each(function(){
        var compareHour = parseInt($(this).attr("id").split("-")[1]);
        // console.log(this);
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

 var interval = setInterval(hourChange, 5000);

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17")); 