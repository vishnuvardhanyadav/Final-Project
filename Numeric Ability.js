const quizData = [
    {
        question: "1397 x 1397 = ?",
        a: "1951609",
        b: "1981709",
        c: "18362619",
        d: "2031719",
        correct: "a",
    },
    {
        question: " Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case ?",
        a: "4",
        b: "7",
        c: "9",
        d: "13",
        correct: "a",
    },
    {
        question: "In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?",
        a: "6.25",
        b: "6.5",
        c: "6.75",
        d: "7",
        correct: "a",
    },
    {
        question: "The average weight of 8 person's increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?",
        a: "80kg",
        b: "95kg",
        c: "94kg",
        d: "85kg",
        correct: "d",
    },
    {
        question: "Find the ratio in which rice at Rs. 7.20 a kg be mixed with rice at Rs. 5.70 a kg to produce a mixture worth Rs. 6.30 a kg.",
        a: "1:2", 
        b: "2:3",
        c: "3:4",
        d: "4:5",
        correct: "b",
    },
    {
        question: "A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.",
        a: "2hr",
        b: "3hr",
        c: "4hr",
        d: "5hr",
        correct: "c",
    },
    {
        question: "The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is Re. 1. The sum (in Rs.) is:",
        a: "620",
        b: "625",
        c: "630",
        d: "635",
        correct: "b",
    },
    {
        question: "If 2994 ÷ 14.5 = 172, then 29.94 ÷ 1.45 = ?",
        a: "0.172",
        b: "1.72",
        c: "17.2",
        d: "172",
        correct: "c",
    },
    {
        question: "From a point P on a level ground, the angle of elevation of the top tower is 30°. If the tower is 100 m high, the distance of point P from the foot of the tower is:",
        a: "145m",
        b: "173m",
        c: "134m",
        d: "185m",
        correct: "b",
    },
    {
        question: "If log10 5 + log10 (5x + 1) = log10 (x + 5) + 1, then x is equal to:",
        a: "1",
        b: "3",
        c: "10",
        d: "5",
        correct: "b",
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
