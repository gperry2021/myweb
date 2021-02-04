var scores = [60, 50, 60, 58, 54, 54, 
			  58, 50, 52, 54, 48, 69, 
			  34, 55, 51, 52, 44, 51, 
			  69, 64, 66, 55, 52, 61, 
			  46, 31, 57, 52, 44, 18, 
			  41, 53, 55, 61, 51, 44];

var highScore =0;
var output;
var i = 0;
for (var i = 0; i < scores.length; i++){
	output = "Bubble solution #"+ i + " score: " + scores[i]
	console.log(output);
	document.write("<p>" + output + "<p>")
	if (scores[i] > highScore) {
		highScore = scores[i];
	}
}

var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
 if (scores[i] == highScore) {
 bestSolutions.push(i);
 }
}
var tests = scores.length;

document.write("<p>Bubble tests: " + tests + "</p>");

document.write("<p>Highest  bubble score: " + highScore + "</p>");

document.write("<p>Solutions with highest score:" + bestSolutions + "</p>");