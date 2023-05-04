// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dayjs = dayjs();
$(document).ready(function () {
  var currentTime = dayjs.format("dddd, MMMM DD, YYYY");
  $("#currentDay").text(currentTime);
  var currentHour = dayjs.hour();
  var saveNote = $(".saveBtn")

  // make a loop for each time block div
  var timeBlock = $(".description");
  timeBlock.each(function () {
    var timeBlockId = $(this).attr("id");

    if (currentHour > timeBlockId) {
      $(this).addClass("past");
    }
    else if (currentHour === parseInt(timeBlockId)) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

});
 