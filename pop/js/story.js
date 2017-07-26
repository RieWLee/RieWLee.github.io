window.onbeforeunload = function() {
    var charaName = document.getItem("namey");
    // ...

    localStorage.setItem("namey", name.value);
    // ...
}
window.onload = function() {

    var charaName = localStorage.getItem("namey");
    if (name !== null) document.getElementById("name");
		charaName.toString();
    // ...
		$(".farstory h2").each(function() {
		   	var text = $(this).html();
		   $(this).html(text.replace("userf1rstname",charaName));
		});
}
app.filter('clearText', function() {
			 return function(text) {
				 return  text ? charaName(text).replace(/"<[^>]+>/gm, '') : '';
			}
		 });
