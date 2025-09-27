    const correctAnswer = "Amsterdam";
    const buttons = document.querySelectorAll('.answerButton');
    const feedback = document.getElementById('feedback');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.textContent === correctAnswer) {
                feedback.textContent = "Correct!";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Fout, probeer het opnieuw.";
                feedback.style.color = "red";
            }
        });
    });