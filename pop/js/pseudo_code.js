//create pseudocode for children-book-maker
//have div class="books" as a scrollable section--before and after said section, the header and footer should fade onto the screen.
//User inputs their name
//User also inputs whether they are a boy, girl, or other (via radio input)
//if user chooses boy--take them to story option 1.
//if user chooses girl--take them to story option 2.
//take them to story option 3 otherwise.
//when one hits the submit button, the computer inputs the user's name in the next page, which shows a children's story. The main character will have the user's name.
//in the next page, the user scrolls down to read the entire story.
//animations that tell the story should start as soon as user starts scrolling.
//All names in the story should scale bigger when you scroll down, to draw attention to what you've added to the story.
//Some things will animate/move across page as you scroll downwards. Such as russling leaves, rotating flowers, and the paragraph/story will shrink down as nears the top of the browser.
//I'd like to find a way to make the story into a pdf file that's downloadable, but I know that's pushing it unless I were to implement flash? I dunno...
//At the end of the page, 'the end' fades to visibility, and becomes clickable--(you click it to get back to the home/index page.)

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

  $("p").each(function() {
      var nameReplace = $(charaName).text();
      nameReplace = text.replace("userfirstname");
      $(this).text(text);
  });
