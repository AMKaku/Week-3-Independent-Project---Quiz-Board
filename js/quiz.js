$(document).ready(function () { 
    const quizAnswers = document.querySelectorAll(".ouranswers");
    const submitAnswer = document.querySelector("#submit_ans");
    const finalAnswer = document.querySelector('#finalscore');
    let marks = 0;
    let total = 0;
    quizAnswers.forEach(function (jibu) {
        if (parseInt(jibu.value) > 0) { total += parseInt(jibu.value); }
        else { total = total; }
        // jibu.addEventListener("change", function (event) {
        //     // marks += parseInt(event.target.value);

        //     //alert("Selected");
        // });
    });
    submitAnswer.addEventListener("click", function (event) {
        quizAnswers.forEach(function (jibu) {
            if (jibu.checked) {
                marks += parseInt(jibu.value);
            }
        })
        let score = (marks / total) * 100;
         alert("your score is " + score + "%");
        
        let level = "";
        if (percentage > 80){
            level += "Excellentl";
        }
        else if(percentage >= 50 && percentage >= 80 ){
            level += "Good";
        }
        else{
            level += "\not passed, Please retake test.";
        }
        $("#finalscore").text("You have scored:" + percentage +"%"+level);
    });
});

