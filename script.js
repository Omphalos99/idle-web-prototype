document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('sl-button[variant="primary"][pill]');
    const counterDisplay = document.getElementById('counter');
    let counter = 0;

    // Function to increment the counter
    const incrementCounter = () => {
        counter += 1;
        counterDisplay.textContent = counter;
    };

    // Add click event listener to the button
    button.addEventListener('click', () => {
        incrementCounter();
    });
});