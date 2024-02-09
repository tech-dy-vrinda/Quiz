const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Mars", "Earth", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "George Orwell"],
        answer: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Yuan", "Euro", "Dollar"],
        answer: "Yen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the tallest mammal?",
        options: ["Giraffe", "Elephant", "Hippopotamus", "Rhinoceros"],
        answer: "Giraffe"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        answer: "Au"
    },
    {
        question: "In which year did World War I begin?",
        options: ["1914", "1918", "1939", "1945"],
        answer: "1914"
    },
    {
        question: "Who is known as the father of modern physics?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "William Shakespeare", "Charles Dickens"],
        answer: "F. Scott Fitzgerald"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Si", "Fe"],
        answer: "Ag"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
        answer: "Alexander Fleming"
    },
    {
        question: "What is the highest mountain in the world?",
        options: ["Mount Everest", "K2", "Mount Kilimanjaro", "Mount McKinley"],
        answer: "Mount Everest"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        options: ["O2", "H2O", "CO2", "O"],
        answer: "O2"
    },
    {
        question: "Who was the first person to step on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
        answer: "Neil Armstrong"
    },
    {
        question: "What is the national animal of India?",
        options: ["Bengal Tiger", "Lion", "Elephant", "Panda"],
        answer: "Bengal Tiger"
    }
];

const questionContainer = document.getElementById('question-container');
const submitButton = document.getElementById('submit-button');
const feedback = document.getElementById('feedback');

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options.map(option => `
                <li>
                    <input type="radio" name="option" value="${option}">
                    <label>${option}</label>
                </li>
            `).join('')}
        </ul>
    `;
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect!";
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.innerHTML = `
        <h2>Quiz Complete</h2>
        <p>Your score: ${score}/${questions.length}</p>
    `;
    submitButton.style.display = 'none';
}

displayQuestion();

submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        checkAnswer(selectedOption.value);
    } else {
        alert('Please select an option');
    }
});
