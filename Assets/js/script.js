var saveBtn = $(".saveBtn");

var currently = moment().format('dddd MMMM Do YYYY', 'h:mm:ss');


saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});

function useTimePlanner() {

    var currTime = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < currTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        });
};

var First = first-hour.val(localStorage.getItem("first-hour"));
var Second = second-hour.val(localStorage.getItem("second-hour"));
var Third = third-hour.val(localStorage.getItem("third-hour"));
var Fourth = fourth-hour.val(localStorage.getItem("fourth-hour"));
var Fifth = fifth-hour.val(localStorage.getItem("fifth-hour"));
var Sixth = sixth-hour.val(localStorage.getItem("sixth-hour"));
var Seventh = seventh-hour.val(localStorage.getItem("seventh-hour"));
var Eighth = eighth-hour.val(localStorage.getItem("eighth-hour"));
var Ninth = ninth-hour.val(localStorage.getItem("ninth-hour"));

useTimePlanner();
