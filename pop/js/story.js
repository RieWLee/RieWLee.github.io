window.onbeforeunload = function() {
    var charaName = document.getItem("namey");
    // ...

    localStorage.setItem("namey", name.value);
    // ...
}
window.onload = function() {

    var charaName = localStorage.getItem("namey");
    if (name !== null) document.getElementById("name");

    // ...
		$(".farstory h2").each(function() {
		   	var text = $(this).html();
		   $(this).html(text.replace("userf1rstname", charaName));
		});
}
