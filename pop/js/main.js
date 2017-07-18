
var girlStory = document.getElementById("f-option").checked;
var boyStory = document.getElementById("m-option").checked;
var otherStory = document.getElementById("x-option").checked;

$("#submit").on("click", function(){
  if (girlStory = true) {
    window.open(story1.html);
  } else if (boyStory = true){
    window.open(story2.html);
  } else {
    window.open(story3.html);
  }
})


var charaName = document.getElementById("name");

  $("span, p").each(function() {
      var nameReplace = $(charaName).text();
      nameReplace = text.replace("userfirstname");
      $(this).text(text);
  });
