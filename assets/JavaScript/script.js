//TO DO before user input

// display date using moment into #currentDay element
var currentDate = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
$("#currentDay").text(currentDate);

// declare variable currentHr as comparison standard
var currentHr = moment().format("HH");
// checking argument
// console.log(currentHr);
// declare variable startHr at 9am from startOf day
var startHr = moment().startOf("day").add(9, "hour");
// checking argument
// console.log(startHr)

//set empty array to store values upon user input
var inputArray = [];

// set and display each hour block 0900 - 1700
// startHr.add(0, "hour") should return 0900
var hr09 = startHr.add(0, "hour");
hr09 = hr09.format("HH:mm");
// checking argument
// console.log(hr09)
$(".hour09").text(hr09);
// 1000
var hr10 = startHr.add(1, "hour");
// formate to hour only
hr10 = hr10.format("HH:mm");
// checking argument
// console.log(hr10)
$(".hour10").text(hr10);
// 1100
var hr11 = startHr.add(1, "hour");
hr11 = hr11.format("HH:mm")
$(".hour11").text(hr11);
// 1200
var hr12 = startHr.add(1, "hour");
hr12 = hr12.format("HH:mm")
$(".hour12").text(hr12);
//1300
var hr13 = startHr.add(1, "hour");
hr13 = hr13.format("HH:mm")
$(".hour13").text(hr13);
//1400
var hr14 = startHr.add(1, "hour");
hr14 = hr14.format("HH:mm")
$(".hour14").text(hr14);
//1500
var hr15 = startHr.add(1, "hour");
hr15 = hr15.format("HH:mm")
$(".hour15").text(hr15);
//1600
var hr16 = startHr.add(1, "hour");
hr16 = hr16.format("HH:mm")
$(".hour16").text(hr16);
//1700
var hr17 = startHr.add(1, "hour");
hr17 = hr17.format("HH:mm")
$(".hour17").text(hr17);

// compare each hour block to comparison standard for past/present/future using if/else if/else
function timeCompare() {
    // jquery iterate for each textarea element
    $(".form-control").each(function() {
        var userHour = $(this).attr("id").split("_");
        var userHr = parseInt(userHour[1]);
            if (userHr < currentHr) {
                $(this).addClass("past");
            } else if (userHr == currentHr) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            };
    });
    // get data from local storage 
    var oldInput = JSON.parse(localStorage.getItem("userInput"));
        // conditional statement for defining stored as displayed
        if (oldInput !== "") {
        userInput = oldInput;
        };
    };
// call function
timeCompare();


// use jquery event listener/event delegation for save button to save to local storage
//function for storing data on event listener button click
$("btn").on("click", storeInput());
function storeInput() {
    // declare variable for user input of textarea
    var textEl = $("<textarea>");
    textEl.text(inputValue);

    // conditional statement if value of forms not empty
    if(userValue !== "") {
        // execute localStorage.setItem for each value
        // iterate for loop for length of userInput as value of .form-control element
        for (var i = 0; i < inputArray.length; i++) {
            var userValue = $(".form-control").val();
            //push value into array
            inputArray.push(userValue);

            //.setItem
            localStorage.setItem("userInput", JSON.stringify(userInput));

        }
    } else return;
}