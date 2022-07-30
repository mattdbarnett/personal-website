
$(document).ready(function(){

    var disableSpam = false;
    var transLength = 200;
    var content = "#content";

    $(content).load("about-me.html");
    $(content).css('opacity', '0');
    $(content).animate({opacity: 1, top: '-=10px'}, transLength);

    $("#about-me").click(function(){
      if (disableSpam === false) {
        contentTransition("about-me.html")
      }
    });

    $("#skills").click(function(){
      if (disableSpam === false) {
        contentTransition("skills.html")
      }
    });

    $("#projects").click(function(){
      if (disableSpam === false) {
        contentTransition("projects.html")
      }
    });

    $("#links").click(function(){
      if (disableSpam === false) {
        contentTransition("links.html")
      }
    });

    function contentTransition(page) {
      disableSpam = true
      $(content).animate({opacity: 0, top: '+=10px'}, transLength, function() {
        $(content).load(page);
        $(content).animate({opacity: 1, top: '-=10px'}, transLength, function() {
          disableSpam = false
        });
      });
    }
  });