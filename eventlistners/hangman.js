var data = [{question:"it is mobile compnay and fruit name",answer:"apple"},{question:"color and fruit",answer:"orange"}]
var question = data[Math.floor(Math.random() * data.length)].question



const startButton = document.getElementById('start');
const  questionEL = document.getElementById('question');
startButton.addEventListener('click', () => {

    questionEL.innerHTML = question
    
})

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    var answer = document.getElementById('answer').value
    console.log(answer)
    //match answer...
    //question...
    //console.log(question)
    //match...
    var ques = data.find((q)=>q.question==question)
    if(ques.answer===answer){
        alert('You are right')
    }
    else{
        alert('You are wrong')
    }
})


