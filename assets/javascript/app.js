 
var timeleft = 120;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Times Up";
    check();
  }
}, 1000);

function check(){
    var q1 = document.TriviaGame.line.value;
    var q2 = document.TriviaGame.port.value;
    var q3 = document.TriviaGame.material.value;
    var q4 = document.TriviaGame.captain.value;
    var q5 = document.TriviaGame.hero.value;
    var correct = 0;
    var incorrect = 0;


    console.log(q1, q2, q3, q4, q5);

    if (q1 == "White Star Line") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (q2 == "Southampton") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (q3 == "Mild Steel")  {
        correct++;
    }
    else {
        incorrect++;
    }
    if (q4 == "Edward John Smith") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (q5 == "John Harper") {
        correct++;
    }
    else {
        incorrect++;
    }

    document.getElementById("beforeSubmit").innerHTML = "";
    document.getElementById("afterSubmit").style.visibility = "visible";

    if (correct > incorrect) {
        document.getElementById("winLoss").innerHTML = "You Win!!!!";
    }
    else {
        document.getElementById("winLoss").innerHTML = "They Said This Ship Wouldn't Sink! You Failed!";
    }

    document.getElementById("wins").innerHTML = "You got " + correct
+" correct!";
    document.getElementById("losses").innerHTML = "You got " + incorrect +" incorrect!";

}

function reset() {
    location.reload();
}