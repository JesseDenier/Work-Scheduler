// Adds the current day to the top of the webpage.
$(function () {
  $("#currentDay").append(dayjs().format("dddd, M/D/YY"));
});

// Sets currentTime to the hour number, 01 through 24.
var currentTime = dayjs().format("HH");

// Arranges all time-blocks into an array.
var timeBlockArray = $(".time-block");

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

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// Adds a click event to the save button which saves textarea to local storage.

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

//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
//

$(function () {
  $("#16").children().eq(2).val();
});
