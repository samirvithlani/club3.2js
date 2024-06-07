const generateExam = () => {
    console.log("exam generating");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: "Exam generated",
        exam: {
          id: 1,
          name: "Math",
          marks: 100,
          ques: 2,
        },
      });
    }, 2500);
  });
};

const generateQuestions = (examData)=>{
    // exam: {
    //     id: 1,
    //     name: "Math",
    //     marks: 100,
    //     ques: 2,
    //   },

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message: "Questions generated",
                examName: examData.name,
                examId: examData.id,
                questions:[
                    {
                        id: 1,
                        ques: "What is 2+2",
                        ans: "4"
                    },
                    {
                        id: 2,
                        ques: "What is 2+3",
                        ans: "5"
                    }
                ]
            })
        },1000)
    })
}


const startExam = ()=>{


    console.log("exam started");    
    generateExam().then((data)=>{
        console.log("data....",data)
        console.log("questions generating");
        generateQuestions(data.exam).then((questionPaper)=>{
            console.log("questionPaper....",questionPaper)
        })
    })



}

startExam()