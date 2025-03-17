let questions = [];
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', async function () {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('Category');

    hideScore();
    showLoadingScreen();

    if (category) {
        await fetchQuizData(category);
    } else {
        document.getElementById('quiz-container').innerHTML = '<p>No category specified in the URL.</p>';
    }

    hideLoadingScreen();
});

async function fetchQuizData(category) {
    // add your api key from https://quizapi.io/
    var apikey = "";

    const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apikey}&category=${category}`;
    console.log(`Fetching quiz data from: ${apiUrl}`);

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        questions = data.filter(q => Object.values(q.answers).some(answer => answer !== null)); // Skip questions with empty options

        if (questions.length === 0) {
            document.getElementById('quiz-container').innerHTML = '<p>No quiz data available for the specified category. Please check your query and try again.</p>';
            hideLoadingScreen();
            return;
        }

        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('total-questions').innerText = questions.length; // Update total questions
        hideLoadingScreen(); // Ensure loading screen is hidden after data is fetched
        loadQuestion();
    } catch (error) {
        console.error('Error fetching quiz data:', error);
        document.getElementById('quiz-container').innerHTML = '<p>Failed to fetch quiz data. Please try again later.</p>';
        hideLoadingScreen(); // Hide loading screen even on failure
    }
}

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${getAnswersHtml(questionData.answers, questionData.multiple_correct_answers)}
    `;
    document.getElementById('current-question').innerText = currentQuestionIndex + 1; // Update current question number
    document.getElementById('progress-container').classList.remove('hidden'); // Show progress

    if (currentQuestionIndex === questions.length - 1) {
        showScore();
    }
}

function getAnswersHtml(answers, multiple) {
    let answersHtml = '';
    const inputType = multiple === 'true' ? 'checkbox' : 'radio';
    Object.keys(answers).forEach((key, index) => {
        if (answers[key]) {
            answersHtml += `
                <div class="form-check">
                    <input class="form-check-input" type="${inputType}" name="answer" id="answer_${index}" value="${key}">
                    <label class="form-check-label" for="answer_${index}">
                        ${answers[key]}
                    </label>
                </div>
            `;
        }
    });
    return answersHtml;
}

function handleAction() {
    submitAnswer();
}

function submitAnswer() {
    const questionData = questions[currentQuestionIndex];
    const correctAnswers = questionData.correct_answers;
    const userAnswers = document.querySelectorAll('input[name="answer"]:checked');
    let userCorrect = true;

    userAnswers.forEach(answer => {
        if (correctAnswers[`${answer.value}_correct`] !== 'true') {
            userCorrect = false;
        }
    });

    if (userCorrect && userAnswers.length === Object.values(correctAnswers).filter(val => val === 'true').length) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }
}

function showScore() {
    document.getElementById('quiz-container').style.display = "none"; // Hide quiz container
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.style.display = "block";
    document.getElementById('score').innerText = `${score} / ${questions.length}`;
    document.getElementById('action-button').style.display = "none"; // Hide action button
    document.getElementById('progress-container').style.display = "none"; // Hide progress tracker
}

function hideScore() {
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.style.display = "none";
}

function redirectToCategory() {
    window.location.href = '/Home/Categories';
}
function showLoadingScreen() {
    document.getElementById('loading-screen').style.display = "block";
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('action-button').style.display = "none";
    document.getElementById('progress-container').style.display = "none";
}

function hideLoadingScreen() {
    document.getElementById('loading-screen').style.display = "none";
    document.getElementById('quiz-container').style.display = "block";
    document.getElementById('action-button').style.display = "block";
    document.getElementById('progress-container').style.display = "block";
}