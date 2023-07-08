
const questions = [
    {
        'que': "which one the markup language ?",
        'a': "HTML",
        'b': "Javascript",
        'c': "css",
        'd': "bootstrap",
        'correct': "a"
    },
    {
        'que': "what year was javascript launched ?",
        'a': "1995",
        'b': "1996",
        'c': "1994",
        'd': "none of the above",
        'correct': "a"
    },
    {
        'que': "what does css stands for",
        'a': "none of these options",
        'b': "cascading style sheets",
        'c': "hyper text markup language",
        'd': "jason object notaion'",
        'correct': 'b'
    }
]


const question = document.querySelector(".questions");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");


const submit = document.querySelector("#submit");

const Loadquestions = () => {

    question.innerText = questions[0].que;
}

Loadquestions();