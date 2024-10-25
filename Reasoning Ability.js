const quizData = [
    {
        question: "Look at this series: 7, 10, 8, 11, 9, 12, .... What number should come next?",
        a: "7",
        b: "10",
        c: "12",
        d: "13",
        correct: "b",
    },
    {
        question: "SCD, TEF, UGH, ____, WKL",
        a: "CMN",
        b: "UJI",
        c: "VIJ",
        d: "IJT",
        correct: "c",
    },
    {
        question: "Marathon is to race as hibernation is to",
        a: "Winter",
        b: "Bear",
        c: "Dream",
        d: "Sleep",
        correct: "d",
    },
    {
        question: "A, P, R, X, S and Z are sitting in a row. S and Z are in the centre. A and P are at the ends. R is sitting to the left of A. Who is to the right of P ?",
        a: "A",
        b: "X",
        c: "S",
        d: "Z",
        correct: "b",
    },
    {
        question: "If A + B means A is the mother of B; A - B means A is the brother B; A % B means A is the father of B and A x B means A is the sister of B, which of the following shows that P is the maternal uncle of Q?",
        a: "Q - N + M x P", 
        b: "P + S x N - Q",
        c: "P - M + N x Q",
        d: "Q - S % P",
        correct: "c",
    },
    {
        question: "Pointing to a photograph of a boy Suresh said, '' He is the son of the only son of my mother.'' How is Suresh related to that boy?",
        a: "Brother",
        b: "Uncle",
        c: "Cousin",
        d: "Father",
        correct: "d",
    },
    {
        question: "A number of friends decided to go on a picnic and planned to spend Rs. 96 on eatables. Four of them, however, did not turn up. As a consequence, the remaining ones had to contribute Rs. 4 each extra. The number of those who attended the picnic was",
        a: "8",
        b: "12",
        c: "16",
        d: "24",
        correct: "a",
    },
    {
        question: "Choose the word which is different from the rest.",
        a: "Kiwi",
        b: "Eagle",
        c: "Emu",
        d: "Ostrich",
        correct: "b",
    },
    {
        question: "One morning Udai and Vishal were talking to each other face to face at a crossing. If Vishal's shadow was exactly to the left of Udai, which direction was Udai facing?",
        a: "East",
        b: "West",
        c: "North",
        d: "South",
        correct: "b",
    },
    {
        question: "What is found necessarily in milk?",
        a: "Cream",
        b: "Curd",
        c: "Water",
        d: "Whiteness",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})


