// Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        const offset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


// Countdown

function updateCountdown() {
    // Target date: March 30th, 2025
    const targetDate = new Date('2025-03-30T00:00:00');
    const now = new Date();

    // Calculate the difference in milliseconds
    const diff = targetDate - now;

    if (diff > 0) {
      // Convert the difference to days, hours, minutes, and seconds
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Update the countdown element
      document.getElementById('countdown').textContent =
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining until March 30th, 2025.`;
    } else {
      // If the target date has passed
      document.getElementById('countdown').textContent = "The target date has passed.";
    }
  }

  // Update the countdown immediately and every 1 second
  updateCountdown();
  setInterval(updateCountdown, 1000);