const quizData = [
    {
        question: "Find out whether there is any grammatical error in it",
        a: "We discussed about the problem so thoroughly",
        b: "on the eve of the examination",
        c: "that I found it very easy to work it out",
        d: "No Error",
        correct: "a",
    },
    {
        question: "Antonym of ''ENORMOUS'' ",
        a: "Soft",
        b: "Average",
        c: "Tiny",
        d: "Weak",
        correct: "c",
    },
    {
        question: "Find the correctly spelt words.",
        a: "Efficient",
        b: "Treamemt",
        c: "Briiliant",
        d: "Baterment",
        correct: "a",
    },
    {
        question: "The study of ancient societies",
        a: "Anthropology",
        b: "Archaeology",
        c: "History",
        d: "Biology",
        correct: "b",
    },
    {
        question: "I remember my sister taking me to the museum.",
        a: "I remember I was taken to the museum by my sister.", 
        b: "I remember being taken to the museum by my sister.",
        c: "I remember myself being taken to the museum by my sister.",
        d: "I remember taken to the museum by my sister.",
        correct: "b",
    },
    {
        question: "1. left	2. the	3. house 4. he	5. suddenly	 Form the sentence ",
        a: "12345",
        b: "13254",
        c: "45123",
        d: "54321",
        correct: "c",
    },
    {
        question: "Darjeeling grows tea.",
        a: "Tea is being grown in Darjeeling.",
        b: "Tea is grown in Darjeeling.",
        c: "Let the tea be grown in Darjeeling.",
        d: "Tea grows in Darjeeling.",
        correct: "b",
    },
    {
        question: "DIVA:OPERA:: ",
        a: "producer:theatre",
        b: "director:drama",
        c: "conductor:bus",
        d: "thespian:play",
        correct: "d",
    },
    {
        question: "Synonym of BRIEF",
        a: "Limited",
        b: "Little",
        c: "Small",
        d: "Short",
        correct: "d",
    },
    {
        question: "Fate smiles ...... those who untiringly grapple with stark realities of life.",
        a: "with",
        b: "over",
        c: "on",
        d: "round",
        correct: "c",
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

// nextBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     
//         currentQuiz++
//         
//     
// })
