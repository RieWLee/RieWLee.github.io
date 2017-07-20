var charaName = document.getElementById("name");

console.log (charaName)

$(".farstory h2").each(function() {
   var text = $(this).html();
   $(this).html(text.replace("userf1rstname", '+charaName+'));
});

var gender = document.getElementById("gender").value;

$("#storytime").on("submit",function(e){
	e.preventDefault();
	if (document.getElementById("f-option").checked) {
	window.open("story1.html");
	} if (document.getElementById("m-option").checked) {
	window.open("story2.html");
} else (document.getElementById("x-option").checked)
	window.open("story3.html");
});




  // $("span, p").each(function() {
  //     var nameReplace = $(charaName).text();
  //     nameReplace = text.replace("userfirstname");
  //     $(this).text(text);
  // });
