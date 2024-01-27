// Sets currentTime to the hour number, 01 through 24.
var currentTime = dayjs().format("HH");

// Arranges all time-blocks into an array.
var timeBlockArray = $(".time-block");

// Adds the current day to the top of the webpage.
$(function () {
  $("#currentDay").append(dayjs().format("dddd, M/D/YY"));
});

// Applies the past, present, or future class to each time-block.
$(function () {
  // Iterates over each time-block in the array.
  for (var i = 0; i < timeBlockArray.length; i++) {
    // If the time-blocks ID is less than the currentTime applies the past class.
    if (currentTime > timeBlockArray[i].id) {
      timeBlockArray.eq(i).addClass("past");
    }
    // If the time-blocks ID is equal to the currentTime applies the present class.
    if (currentTime === timeBlockArray[i].id) {
      timeBlockArray.eq(i).addClass("present");
    }
    // If the time-blocks ID is higher than the currentTime applies the future class.
    if (currentTime < timeBlockArray[i].id) {
      timeBlockArray.eq(i).addClass("future");
    }
  }
});

// Adds a click event to the each save button which saves the corresponding textarea to local storage.
$(function () {
  // Adds the following function to every save button.
  $(".saveBtn").on("click", function () {
    // Sets scheduledEvent to the clicked save buttons sister description value.
    var scheduledEvent = $(this).parent().children().eq(1).val();
    // Saves scheduledEvent as a local storage item with the name "scheduledEvent + the id of the save buttons parent element.
    localStorage.setItem(
      "scheduledEvent" + $(this).parent().attr("id"),
      scheduledEvent
    );
  });
});

// Sets the value of each textarea element to the corresponding localStorage value.
$(function () {
  // Iterates over each time-block in the array.
  for (var i = 0; i < timeBlockArray.length; i++) {
    // Sets scheduledEvent equal to the value saved in local storage.
    var scheduledEvent = localStorage.getItem(
      "scheduledEvent" + timeBlockArray[i].id
    );
    // Appends scheduled event to each time block.
    $("#" + timeBlockArray[i].id)
      .children()
      .eq(1)
      .append(scheduledEvent);
  }
});
