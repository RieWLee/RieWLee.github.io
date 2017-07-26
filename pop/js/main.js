//
// window.onload = function() {
//
//         // If sessionStorage is storing default values (ex. name), exit the function and do not restore data
//         if (sessionStorage.getElementById("name") == "name") {
//             return;
//         }
//         // If values are not blank, restore them to the fields
//         var name = sessionStorage.getElementById("name");
//         if (name !== null) $("#name").val(name);
//     }
//
//     // Before refreshing the page, save the form data to sessionStorage
//     window.onbeforeunload = function() {
//         sessionStorage.getElementById("name", $('#name').val(name));
//     }
//
//
// window.onload = function() {
//     var name = localStorage.getItem(name);
//     if (name !== null) $('#name').val(name);
// }
//
// $(".farstory h2").each(function() {
// 		var charaName = sessionStorage.getElementById("name");
//    	var text = $(this).html();
//    $(this).html(text.replace("userf1rstname", charaName));
// });
//
//
window.localStorage.clear(); //try this to clear all local storage

$("#storytime").on("submit",function(e){
	e.preventDefault();
	if (document.getElementById("story1").checked) {
	location.href = "story1.html";
} else if (document.getElementById("story2").checked) {
	location.href = "story2.html";
} else (document.getElementById("story3").checked)
	location.href = "story3.html";
});

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
$(document).on("click", "#submit", function(e) {
  alert(JSON.parse(localStorage.getItem('namey')));
});

//
//
//
//   // $("span, p").each(function() {
//   //     var nameReplace = $(charaName).text();
//   //     nameReplace = text.replace("userfirstname");
//   //     $(this).text(text);
//   // });
