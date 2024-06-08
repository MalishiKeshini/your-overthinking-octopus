// script.js

function deleteThoughts() {
    const thoughtInput = document.getElementById('thought-input');
    const thoughtList = document.getElementById('thought-list');
    const thoughts = thoughtInput.value.trim();

    // Check if the textarea is empty
    if (thoughts === '') {
        // Display a friendly prompt message
        const promptMessage = document.createElement('div');
        promptMessage.classList.add('prompt-message');
        promptMessage.textContent = "😊 It looks like you don't have any thoughts to delete!";
        document.body.appendChild(promptMessage);

        // Remove the message after 3 seconds
        setTimeout(() => {
            document.body.removeChild(promptMessage);
        }, 3000);
    } else {
        // Clear the textarea and thought list
        thoughtInput.value = '';
        thoughtList.innerHTML = '';

        // Display a stylish prompt message
        const promptMessage = document.createElement('div');
        promptMessage.classList.add('prompt-message');
        promptMessage.textContent = "🐙 Your head is free now! Feel the weight lifted off your shoulders.";
        document.body.appendChild(promptMessage);

        // Remove the message after 3 seconds
        setTimeout(() => {
            document.body.removeChild(promptMessage);
        }, 3000);
    }
}

function startExercise() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = '';

    // Create circles for inhale and exhale
    const inhaleCircle = document.createElement('div');
    inhaleCircle.classList.add('circle', 'inhale');
    inhaleCircle.textContent = 'Inhale';

    const exhaleCircle = document.createElement('div');
    exhaleCircle.classList.add('circle', 'exhale');
    exhaleCircle.textContent = 'Exhale';

    // Add circles to the countdown element
    countdownElement.appendChild(inhaleCircle);
    countdownElement.appendChild(exhaleCircle);

    // Prompt the user in a transparent box at the center of the screen
    const promptBox = document.createElement('div');
    promptBox.classList.add('prompt-box');
    promptBox.innerHTML = '<p>Follow the circles and take deep breaths. Inhale when the circle expands and exhale when it contracts.</p>';
    document.body.appendChild(promptBox);

    // Create a "Stop Exercise" button
    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Exercise';
    stopButton.classList.add('stop-button');
    stopButton.onclick = stopExercise;
    promptBox.appendChild(stopButton);
}

function stopExercise() {
    const promptBox = document.querySelector('.prompt-box');
    if (promptBox) {
        promptBox.parentNode.removeChild(promptBox);
    }
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = '';
}
