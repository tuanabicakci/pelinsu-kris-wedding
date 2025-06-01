const targetDate = new Date("September 6, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("timer").innerText = "It's September 6, 2025!";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("timer").innerText =
        `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
}

updateCountdown(); // Initial call
const interval = setInterval(updateCountdown, 1000); // Update every second