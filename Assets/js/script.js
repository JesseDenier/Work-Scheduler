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
  $(".saveBtn").on("click", function () {
    var scheduledEvent = $(this).parent().children().eq(1).val();
    console.log(scheduledEvent);
    console.log($(this).parent().attr("id"));
    localStorage.setItem(
      "scheduledEvent" + $(this).parent().attr("id"),
      scheduledEvent
    );
  });
});

// Sets the value of each textarea element to the corresponding localStorage value.
$(function () {
  for (var i = 0; i < timeBlockArray.length; i++) {
    var scheduledEvent = localStorage.getItem(
      "scheduledEvent" + timeBlockArray[i].id
    );
    $("#" + timeBlockArray[i].id)
      .children()
      .eq(1)
      .append(scheduledEvent);
  }
});
