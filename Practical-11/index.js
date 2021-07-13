const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        a: "<script>",
        b: "<javascript>",
        c: "<js>",
        d: "<scripting>",
        answer: "ans1"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<script href='xxx.js'>",
        b: "<script name='xxx.js'>",
        c: "<script src='xxx.js'>",
        d: "<script file='xxx.js'>",
        answer: "ans3"
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World');",
        b: "alertBox('Hello World');",
        c: "msg('Hello World');",
        d: "alert('Hello World');",
        answer: "ans4"
    },
    {
        question: "Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        answer: "ans2"
    }
    ,
    {
        question: " Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        answer: "ans4"
    }
    ,
    {
        question: " HTML stands for -",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        answer: "ans3"
    }
    ,
    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        answer: "ans3"
    }
    ,
    {
        question: " The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        answer: "ans4"
    }
    ,
    {
        question: "CSS stands for -",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        answer: "ans3"
    }
    ,
    {
        question: "The property in CSS used to change the background color of an element is -",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "All of the above",
        answer: "ans3"
    }
]

const ques = document.querySelector(".question")
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const answers = document.querySelectorAll('.radio');

const nextBtn = document.querySelector('.btn_right');
const prevBtn = document.querySelector('.btn_left');
const submitBtn = document.querySelector('.btn_submit');
const rsult = document.querySelector('.score');
const resultDiv = document.querySelector('.resultDiv');
const mainDiv = document.querySelector('.mainDiv');
const startDiv = document.querySelector('.startDiv');
const startBtn = document.querySelector('.startBtn');


let randNum = 0
let questionCount = 0;
let currentAns = ""

let score = 0
const loadQuestion = () => {
    // randNum=Math.floor(Math.random()*questions.length);
    console.log(questions[questionCount])
    // console.log(questions[questionCount])
    const questionList = questions[questionCount]

    console.log(questionList)
    ques.textContent = questionList.question
    option1.textContent = questionList.a
    option2.textContent = questionList.b
    option3.textContent = questionList.c
    option4.textContent = questionList.d
    currentAns = questionList.answer
}


loadQuestion()

const getAnswer = () => {
    let answer;
    answers.forEach((currenElement) => {
        if (currenElement.checked) {
            answer = currenElement.id
        }
    })
    return answer
}
const deSelectAll = () => {
    answers.forEach((currenElement) => {
        if (currenElement.checked) {
            currenElement.checked = false

        }
    })
}
startBtn.addEventListener("click", () => {
    startDiv.style.display = "none"
    mainDiv.style.display = "flex"
})
nextBtn.addEventListener('click', () => {
    // console.log("clicked")
    const checkedAnswer = getAnswer()

    prevBtn.classList.add("btn_show")

    if (checkedAnswer === currentAns) {
        score++
    }

    questionCount++
    deSelectAll()

    if (questionCount < questions.length) {
        loadQuestion()

    }
    if (questionCount == questions.length - 1) {
        nextBtn.style.display = "none"
        prevBtn.classList.remove("btn_show")
        submitBtn.style.display = "block"
    }
})

prevBtn.addEventListener("click", () => {
    console.log(questionCount)
    if (questionCount > 0) {
        questionCount--
        if (questionCount > -1) {
            loadQuestion()
        }
    }

})


submitBtn.addEventListener("click", () => {
    mainDiv.style.display = "none"
    rsult.textContent = `Your Score is ${score}`
    resultDiv.classList.add("show")
})

