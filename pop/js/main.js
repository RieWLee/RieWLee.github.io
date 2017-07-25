

window.onload = function() {

        // If sessionStorage is storing default values (ex. name), exit the function and do not restore data
        if (sessionStorage.getItem("name") == "name") {
            return;
        }
        // If values are not blank, restore them to the fields
        var name = sessionStorage.getItem("name");
        if (name !== null) $("#name").val(name);
    }

    // Before refreshing the page, save the form data to sessionStorage
    window.onbeforeunload = function() {
        sessionStorage.setItem("name", $('#name').val(charaName));
    }


window.onload = function() {
    var name = localStorage.getItem(charaName);
    if (name !== null) $('#name').val(name);
}

$(".farstory h2").each(function() {
   var text = $(this).html();
   $(this).html(text.replace("userf1rstname", charaName));
});


$("#storytime").on("submit",function(e){
	e.preventDefault();
	var charaName = document.getElementById("name");


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
