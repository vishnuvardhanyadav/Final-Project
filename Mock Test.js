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
        question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case ?",
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
