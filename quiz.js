// Define the main function to check the user's answer
function checkAnswer() {
    // Set the correct answer for the quiz question
    const correctAnswer = "4";
    
    // Find the radio button that the user has selected
    // Uses CSS selector to find checked input with name "quiz"
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if user actually selected an option
    if (selectedRadio) {
        // Get the value of the selected radio button (user's answer)
        const userAnswer = selectedRadio.value;
        
        // Get the feedback element where we'll display the result
        const feedbackElement = document.getElementById('feedback');
        
        // Compare user's answer with correct answer
        if (userAnswer === correctAnswer) {
            // Display success message for correct answer
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            // Display error message for incorrect answer
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle case where no option was selected
        document.getElementById('feedback').textContent = "Please select an answer!";
    }
}

// Add event listener to the submit button
// When button is clicked, the checkAnswer function will be called
// Note: we pass the function reference without () to avoid immediate execution
document.getElementById('submit-answer').addEventListener('click', checkAnswer);