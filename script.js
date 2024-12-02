let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function guessNumber() {
    const guess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (isNaN(guess)) {
        document.getElementById("message").textContent = "Please enter a valid number.";
        return;
    }

    if (guess === randomNumber) {
        document.getElementById("message").textContent = `Congratulations! You guessed the number (${randomNumber}) in ${attempts} attempts.`;
        disableInput();
    } else if (attempts === maxAttempts) {
        document.getElementById("message").textContent = `Sorry, you've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`
        disableInput();
    } else if (guess < randomNumber) {
        document.getElementById("message").textContent = "Too low. Try again.";
    } else {
        document.getElementById("message").textContent = "Too high. Try again.";
    }

    document.getElementById("guessInput").value = "";
}

function disableInput () {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
}

