const quizAnswers = document.querySelectorAll("ouranswers");
console.log(quizAnswers);
let marks = 0;
quizAnswers.forEach(function(jibu){
console.log("jibu");
jibu.addEventListener("change",function(event){
    alert(event.target.value);
});
});