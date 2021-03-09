
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


// set and display each hour block 0900 - 1700
// startHr.add(0, "hour") should return 0900
var hr09 = startHr.add(0, "hour");
hr09 = hr09.format("HH:mm");
// checking argument
// console.log(hr09)
$(".hour09").text(hr09);
// 1000
var hr10 = startHr.add(1, "hour");
// format to hour only
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
};
// call function
timeCompare();

// event listener for each btn to store and get data for each individual timeblock
//0900
// getItem
var load09 = localStorage.getItem("block09");
if (load09 !== "" || load09 !== null) {
        $("#form_09").val(load09);
};

$(".btn09").on("click", function(e) {
    e.preventDefault;
    console.log("Button clicked!");
    // setItem
    var entry09 = $("#form_09").val();
    if (entry09 === "" || entry09 === null){
        alert("Nothing to save!");
        console.log("Nothing to save!");
    } else{
        localStorage.setItem("block09", entry09);
        alert("Entry saved!");
        console.log("Entry saved!");
    }
});
//1000
// getItem
var load10 = localStorage.getItem("block10");
if (load10 !== "" || load10 !== null) {
        $("#form_10").val(load10);
};

$(".btn10").on("click", function(e) {
    e.preventDefault;
    console.log("Button clicked!");
    // setItem
    var entry10 = $("#form_10").val();
    if (entry10 === "" || entry10 === null){
        alert("Nothing to save!");
        console.log("Nothing to save!");
    } else{
        localStorage.setItem("block10", entry10);
        alert("Entry saved!");
        console.log("Entry saved!");
    }
});
//1100
// getItem
var load11 = localStorage.getItem("block11");
if (load11 !== "" || load11 !== null) {
        $("#form_11").val(load11);
};
$(".btn11").on("click", function(e) {
    e.preventDefault;
    console.log("Button clicked!");
    // setItem
    var entry11 = $("#form_11").val();
    if (entry11 === "" || entry11 === null){
        alert("Nothing to save!");
        console.log("Nothing to save!");
    } else{
        localStorage.setItem("block11", entry11);
        alert("Entry saved!");
        console.log("Entry saved!");
    }
});
//1200
// getItem
var load12 = localStorage.getItem("block12");
if (load12 !== "" || load12 !== null) {
        $("#form_12").val(load12);
};
$(".btn12").on("click", function(e) {
    e.preventDefault;
    console.log("Button clicked!");
    // setItem
    var entry12 = $("#form_12").val();
    if (entry12 === "" || entry12 === null){
        alert("Nothing to save!");
        console.log("Nothing to save!");
    } else{
        localStorage.setItem("block12", entry12);
        alert("Entry saved!");
        console.log("Entry saved!");
    }
});
//1300
// getItem
var load13 = localStorage.getItem("block13");
if (load13 !== "" || load13 !== null) {
        $("#form_13").val(load13);
};

$(".btn13").on("click", function(e) {
    e.preventDefault;
    console.log("Button clicked!");
    // setItem
    var entry13 = $("#form_13").val();
    if (entry13 === "" || entry13 === null){
        alert("Nothing to save!");
        console.log("Nothing to save!");
    } else{
        localStorage.setItem("block13", entry13);
        alert("Entry saved!");
        console.log("Entry saved!");
    }
});
//1400
// getItem
var load14 = localStorage.getItem("block14");
if (load14 !== "" || load14 !== null) {
        $("#form_14").val(load14);
};

$(".btn14").on("click", function(e) {
    e.preventDefault;
    console.log("Button clicked!");
    // setItem
    var entry14 = $("#form_14").val();
    if (entry14 === "" || entry14 === null){
        alert("Nothing to save!");
        console.log("Nothing to save!");
    } else{
        localStorage.setItem("block14", entry14);
        alert("Entry saved!");
        console.log("Entry saved!");
    }
});
//1500
// getItem
var load15 = localStorage.getItem("block15");
if (load15 !== "" || load15 !== null) {
        $("#form_15").val(load15);
};

$(".btn15").on("click", function(e) {
    e.preventDefault;
    console.log("Button clicked!");
    // setItem
    var entry15 = $("#form_15").val();
    if (entry15 === "" || entry15 === null){
        alert("Nothing to save!");
        console.log("Nothing to save!");
    } else{
        localStorage.setItem("block15", entry15);
        alert("Entry saved!");
        console.log("Entry saved!");
    }
});
//1600
// getItem
var load16 = localStorage.getItem("block16");
if (load16 !== "" || load16 !== null) {
        $("#form_16").val(load16);
};

$(".btn16").on("click", function(e) {
    e.preventDefault;
    console.log("Button clicked!");
    // setItem
    var entry16 = $("#form_16").val();
    if (entry16 === "" || entry16 === null){
        alert("Nothing to save!");
        console.log("Nothing to save!");
    } else{
        localStorage.setItem("block16", entry16);
        alert("Entry saved!");
        console.log("Entry saved!");
    }
});
//1700
// getItem
var load17 = localStorage.getItem("block17");
if (load17 !== "" || load17 !== null) {
        $("#form_17").val(load17);
};

$(".btn17").on("click", function(e) {
    e.preventDefault;
    console.log("Button clicked!");
    // setItem
    var entry17 = $("#form_17").val();
    if (entry17 === "" || entry17 === null){
        alert("Nothing to save!");
        console.log("Nothing to save!");
    } else{
        localStorage.setItem("block17", entry17);
        alert("Entry saved!");
        console.log("Entry saved!");
    }
});

// clear localStorage with clear button
$(".clrBtn").on("click", function(e) {
    e.preventDefault;
    clearAll()
    function clearAll() {
        $("textarea").each(function(){
            $(this).val("");
        });
    };
    localStorage.clear();
    alert("All saved entries cleared!");
    console.log("Clear stored data!");
})
