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
// TODO: Rewrite code so it is not repetitive.
// HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
$(function () {
  $("#09")
    .children()
    .eq(2)
    .on("click", function () {
      var scheduledEvent09 = $("#09").children().eq(1).val();
      localStorage.setItem("scheduledEvent09", scheduledEvent09);
      console.log(scheduledEvent09);
    });
  $("#10")
    .children()
    .eq(2)
    .on("click", function () {
      var scheduledEvent10 = $("#10").children().eq(1).val();
      localStorage.setItem("scheduledEvent10", scheduledEvent10);
      console.log(scheduledEvent10);
    });
  $("#11")
    .children()
    .eq(2)
    .on("click", function () {
      var scheduledEvent11 = $("#11").children().eq(1).val();
      localStorage.setItem("scheduledEvent11", scheduledEvent11);
      console.log(scheduledEvent11);
    });
  $("#12")
    .children()
    .eq(2)
    .on("click", function () {
      var scheduledEvent12 = $("#12").children().eq(1).val();
      localStorage.setItem("scheduledEvent12", scheduledEvent12);
      console.log(scheduledEvent12);
    });
  $("#13")
    .children()
    .eq(2)
    .on("click", function () {
      var scheduledEvent13 = $("#13").children().eq(1).val();
      localStorage.setItem("scheduledEvent13", scheduledEvent13);
      console.log(scheduledEvent13);
    });
  $("#14")
    .children()
    .eq(2)
    .on("click", function () {
      var scheduledEvent14 = $("#14").children().eq(1).val();
      localStorage.setItem("scheduledEvent14", scheduledEvent14);
      console.log(scheduledEvent14);
    });
  $("#15")
    .children()
    .eq(2)
    .on("click", function () {
      var scheduledEvent15 = $("#15").children().eq(1).val();
      localStorage.setItem("scheduledEvent15", scheduledEvent15);
      console.log(scheduledEvent15);
    });
  $("#16")
    .children()
    .eq(2)
    .on("click", function () {
      var scheduledEvent16 = $("#16").children().eq(1).val();
      localStorage.setItem("scheduledEvent16", scheduledEvent16);
      console.log(scheduledEvent16);
    });
});

// Sets the value of each textarea element to the corresponding localStorage value.
// TODO: Rewrite code so it is not repetitive.
$(function () {
  var scheduledEvent09 = localStorage.getItem("scheduledEvent09");
  $("#09").children().eq(1).append(scheduledEvent09);
  var scheduledEvent10 = localStorage.getItem("scheduledEvent10");
  $("#10").children().eq(1).append(scheduledEvent10);
  var scheduledEvent11 = localStorage.getItem("scheduledEvent11");
  $("#11").children().eq(1).append(scheduledEvent11);
  var scheduledEvent12 = localStorage.getItem("scheduledEvent12");
  $("#12").children().eq(1).append(scheduledEvent12);
  var scheduledEvent13 = localStorage.getItem("scheduledEvent13");
  $("#13").children().eq(1).append(scheduledEvent13);
  var scheduledEvent14 = localStorage.getItem("scheduledEvent14");
  $("#14").children().eq(1).append(scheduledEvent14);
  var scheduledEvent15 = localStorage.getItem("scheduledEvent15");
  $("#15").children().eq(1).append(scheduledEvent15);
  var scheduledEvent16 = localStorage.getItem("scheduledEvent16");
  $("#16").children().eq(1).append(scheduledEvent16);
});
