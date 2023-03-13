// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

  let displayTime = document.querySelector("#currentDay");
  let currentTime =  dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
  displayTime.textContent = currentTime;
  



$(".saveBtn").on("click", function () {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");

  localStorage.setItem(time,text);
});



$(function () {
     currentTime =  dayjs().hour();

      const workDayTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
     for (let i = 0; i < workDayTime.length; i++) {
        let workDay = workDayTime[i];
      if (workDay < currentTime) {
             console.log("hour-" + currentTime);
             $("#hour-" + workDay).addClass("past");
          
       } else if (workDay > currentTime) {
         $("#hour-" + workDay).addClass("future");
        } else {
         $("#hour-" + workDay).addClass("present");
        }
     }
 
 });

 function displayText() {
  $(".time-block").each(function () {
    var workDay = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(workDay));

  });
 }
 displayText();

});






  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

