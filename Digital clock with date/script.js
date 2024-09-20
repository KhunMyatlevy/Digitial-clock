function updateClockAndDate() {
    // Get the current date and time
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero if needed
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // Get the current time in HH:MM:SS format
    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Get the current date (e.g., Monday, September 18, 2024)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString(undefined, options);

    // Display the time and date in the respective elements
    document.getElementById('time').innerText = currentTime;
    document.getElementById('date').innerText = currentDate;
}

// Update the clock every second
setInterval(updateClockAndDate, 1000);

// Initial call to display the time and date immediately
updateClockAndDate();

