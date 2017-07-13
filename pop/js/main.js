//create 2 functions?
$('#final').click(function(){
	$('#final').html('You clicked me!');
	$('#final').css('color', 'pink');
});

//compare the number that user inputs to the number that the computer prefers

function promptMe(){
var inputText = prompt("What is the number?");
};
var inputComputer = 5;

	if (inputText === inputComputer) {
		alert('Great minds think alike!')
	} else if (inputText < inputComputer) {
		alert('Five is clearly the superior number.')
	} else {
		alert("Wow! SHOW OFF!!");
	}
