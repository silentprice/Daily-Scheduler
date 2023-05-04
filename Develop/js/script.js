// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dayjs = dayjs();
$(document).ready(function () {
  var currentTime = dayjs.format("dddd, MMMM DD, YYYY");
  $("#currentDay").text(currentTime);
  var currentHour = dayjs.hour();
  var saveNote = $(".saveBtn")

  // make a loop for each time block updating with the current time and changing the color of the time blocks depending on current time 
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
// save the text writen so when the page is reloaded it stay in local storage
  saveNote.on("click", function() {
    var id = $(this).attr("id")
    var task = $(this).siblings(".description").val()
    localStorage.setItem(id, task)
    showTask()
  })

  // calling function when page first loads to get all items in local storage
  showTask()
});

function showTask() {
  for (var i = 9; i < 18; i++) {
    var foundTask = localStorage.getItem(i)
    $("#" + i).text(foundTask)
  }
 
};
