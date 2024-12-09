const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const popup = document.getElementById('popup');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

 window.onload = () => {
    popup.style.display = 'flex';
    document.getElementById('accept').addEventListener('click', () => {
        popup.style.display = 'none';
    });
    document.getElementById('decline').addEventListener('click', () => {
        popup.style.display = 'none';
    });
};

function startCountdown() {
    const countdownElement = document.getElementById("countdown");

    // Set the target date for New Year's (January 1 of next year)
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);

    // Update the countdown every second
    const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = newYearDate - currentTime;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Display the countdown
        countdownElement.textContent = `${days} Dage, ${hours} Timer, ${minutes} Minutter, ${seconds} Sekunder`;

        // Stop the countdown when New Year's is reached
        if (timeDiff < 0) {
            clearInterval(interval);
            countdownElement.textContent = "Godt nytår!";
        }
    }, 1000);
}

// Start the countdown
startCountdown();

document.querySelector('.normal').addEventListener('click', function() {
    const button = this;
    button.textContent = 'Tilføjet til kurv';
    button.disabled = true;

    button.style.backgroundColor = '#28a745';
    button.style.color = 'white';

    setTimeout(function() {
        button.textContent = 'Læg i kurv';
        button.disabled = false;
        button.style.backgroundColor = '';
        button.style.color = '';
    }, 2000);
});