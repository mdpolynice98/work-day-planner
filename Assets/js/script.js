var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


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

$("#first-hour .description").val(localStorage.getItem("first-hour"));
$("#second-hour .description").val(localStorage.getItem("second-hour"));
$("#third-hour .description").val(localStorage.getItem("third-hour"));
$("#fourth-hour .description").val(localStorage.getItem("fourth-hour"));
$("#fifth-hour .description").val(localStorage.getItem("fifth-hour"));
$("#sixth-hour .description").val(localStorage.getItem("sixth-hour"));
$("#seventh-hour .description").val(localStorage.getItem("seventh-hour"));
$("#eigth-hour .description").val(localStorage.getItem("eighth-hour"));
$("#ninth-hour .description").val(localStorage.getItem("ninth-hour"));

useTimePlanner();
