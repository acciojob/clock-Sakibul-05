//your JS code here. If required.
function updateTimer() {
      var timerElement = document.getElementById("timer");
      var currentDate = new Date();
      timerElement.textContent = currentDate.toLocaleString();
    }

    setInterval(updateTimer, 1000); // Update the timer every second