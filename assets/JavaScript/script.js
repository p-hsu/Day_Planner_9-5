//REMEMBER TO USE JQUERY
// display date using moment into #currentDay element
var currentDate = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
$("#currentDay").text(currentDate);

// declare variable referenceHr as comparison standard
var referenceHr = moment()
// declare variable startHr at 9am from startOf day
var startHr = moment().startOf("day").add(9, "hour");
// checking statment
// console.log(startHr)

// set and display each hour block 0900 - 1700
// startHr.add(0, "hour") should return 0900
var hr09 = startHr.add(0, "hour");
hr09 = hr09.format("HH:mm");
$(".hour09").text(hr09);

// 1000
var hr10 = startHr.add(1, "hour");
// formate to hour only
hr10 = hr10.format("HH:mm");
// checking statement
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

// compare each hour block to comparison standard for past/present/future


// use jquery event listener for save button to save to local storage