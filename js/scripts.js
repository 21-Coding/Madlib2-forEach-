$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var madlibs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    madlibs.forEach(function(madlib) {
      var userInput = $("input#" + madlib).val();
      $("." + madlib).text(userInput);
      console.log(madlib);

    });
    $("#story").show();


    event.preventDefault();
  });
});
