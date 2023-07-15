// Set the timer duration in seconds
const durationInSeconds = 45 * 24 * 60 * 60; // 45 days in seconds

// Get the timer HTML element
const timerElement = document.getElementById('timer');

// Function to start the timer
function startTimer() {
  // Get the current time in milliseconds
  let currentTime = Date.now();

  // Calculate the target time by adding the duration to the current time
  const targetTime = currentTime + durationInSeconds * 1000;

  // Update the timer every second
  const timerInterval = setInterval(() => {
    // Get the current time in milliseconds
    currentTime = Date.now();

    // Calculate the remaining time in seconds
    const remainingTime = Math.round((targetTime - currentTime) / 1000);

    // Check if the timer has reached 0
    if (remainingTime <= 0) {
      // Clear the timer interval
      clearInterval(timerInterval);

      // Perform any action when the timer ends
      timerElement.textContent = 'Time is up!';
    } else {
      // Update the timer element with the remaining time
      timerElement.textContent = formatTime(remainingTime);
    }
  }, 1000);
}

// Function to format the time as DD:HH:MM:SS
function formatTime(time) {
  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  // Add leading zeros if necessary
  const formattedDays = String(days).padStart(2, '0');
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Call the startTimer function to start the timer
startTimer();
