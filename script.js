// =================================================================
// Part 1: Event Handling & Interactive Features
// =================================================================

// 1. Interactive Feature: Light/Dark Mode Toggle
// This feature changes the website's theme by toggling a CSS class on the body.

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    // Toggles the 'dark-mode' class on the <body> element.
    document.body.classList.toggle('dark-mode');
});


// 2. Interactive Feature: Countdown Timer
// This feature starts a simple countdown from a specific number when a button is clicked.

const timerDisplay = document.getElementById('timer-display');
const startTimerBtn = document.getElementById('start-timer');
let countdownInterval;
let timeLeft = 10;

// Function to start the countdown.
function startCountdown() {
    // Clear any existing interval to prevent multiple timers from running.
    clearInterval(countdownInterval);
    
    // Reset the time and display.
    timeLeft = 10;
    timerDisplay.textContent = timeLeft;
    
    // Set up a new interval that runs every second (1000ms).
    countdownInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
}

// Add a click event listener to the "Start Countdown" button.
startTimerBtn.addEventListener('click', startCountdown);


// =================================================================
// Part 2: Custom Form Validation
// =================================================================

// This section handles the form submission and performs custom validation
// to ensure the email is in a valid format and the password meets requirements.

const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formMessage = document.getElementById('form-message');

// A function to validate the email format using a simple regex.
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// A function to validate the password requirements.
function validatePassword(password) {
    // Password must be at least 8 characters long.
    return password.length >= 8;
}

// Add an event listener for the form's submit event.
contactForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior (page reload).
    event.preventDefault();

    // Reset error messages and form message before validation.
    emailError.textContent = '';
    passwordError.textContent = '';
    formMessage.textContent = '';
    formMessage.className = 'form-message'; // Reset class for styling.

    let formIsValid = true;

    // Validate the email input.
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        formIsValid = false;
    }

    // Validate the password input.
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        formIsValid = false;
    }

    // If the form is valid, show a success message.
    if (formIsValid) {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.classList.add('success');
        
        // You could also send the form data to a server here.
        console.log("Form data:", {
            email: emailInput.value,
            password: passwordInput.value
        });
        
        // Optionally, clear the form fields.
        contactForm.reset();
    } else {
        formMessage.textContent = "Please correct the errors above.";
    }
});
