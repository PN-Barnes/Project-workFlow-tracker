var dateTimeEl = document.querySelector(".dateTime");

dateTimeEl = moment().format("MMM Do, YYYY", "hh:mm:ss");

function setTime() {
  var timerCount = setInterval(function () {}, 1000);
}
