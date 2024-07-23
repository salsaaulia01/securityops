document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');


    const targetDate = new Date('July 26, 2024 23:59:59').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Countdown Ended!";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();  // initial call to display the countdown immediately
});
