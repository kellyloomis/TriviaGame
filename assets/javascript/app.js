var audio = new Audio("assets/images/templebell.mp3");

setTimeout(function() {
  thirtySeconds();
}, 1000 * 30);

setTimeout(timeUp, 1000 * 15);

function timeUp() {

  $("#timer").append("<h2>Time's Up!</h2>");

  audio.play();
};

var triviaData = [
{
	question: "Kai is the Red Ninja"
	answer: "true"
	fullAnswer: "Ninja-Go!"
},
{
	question: "Jay is the Black Ninja"
	answer: "false"
	fullAnswer: "Jay is the Blue Ninja"
},
{
	question: "Zane, the White Ninja, is a robot"
	answer: "true"
	fullAnswer: "Ninja-Go!"
},
{
	question: "Lord Garmadon is Lloyd's (the Green Ninja) father"
	answer: "true"
	fullAnswer: "Ninja-Go!"
},
{
	question: "Nya is Cole's sister"
	answer: "false"
	fullAnswer: "Cole is Nya's boyfriend"
},
]

function displayQuestions() {

	$("#q1" "#q2" "#q3" "#q4" "#q5").click(function(){
		$("input:text").val(index[triviaData]);
	});
};
