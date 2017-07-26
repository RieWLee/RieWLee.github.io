window.localStorage.clear(); //try this to clear all local storage

$(function(){
    $("#storytime").submit(function(e) {
        e.preventDefault();
        window.location = $(this).find('input[type="radio"]:checked').val();
    });
});
// $("#storytime").on("submit",function(e){
// 	e.preventDefault();
// 	if (document.getElementById("story1").checked) {
// 	window.location = "story1.html";
// } else if (document.getElementById("story2").checked) {
// 	window.location = "story2.html";
// } else (document.getElementById("story3").checked)
// 	window.location = "story3.html";
// });

$(document).on("click", "#submit", function(e) {
  var stuff = ($("#name").val());
  // Load name
  var names = JSON.parse(localStorage.getItem('namey'));
  if (names) {
  	// If the item exists in local storage push the new names to the array and and save
    names.push(stuff);
    localStorage.setItem('namey', JSON.stringify(names));
  } else {
  	// If the item doesn't exist in local storage set the item to a new array containing new email address
    localStorage.setItem('namey', JSON.stringify([stuff]));
  }

});
// $(document).on("click", "#submit", function(e) {
//   alert(JSON.parse(localStorage.getItem('namey')));
// });
