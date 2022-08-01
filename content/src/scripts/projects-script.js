
var modal = document.getElementById("modal");

var heading;
var content;

function containerClick(project) {
  modal.style.display = "block";

  switch (project) {
    case "upwn":
      heading = "Upwn";
      content =
        "Upwn is a basic, procedurally generated side-scrolling game for Windows with a variety of customisation options and goals. \
                   I developed it independently for the 3rd year of my undergraduate degree at Cardiff University. \
                   For this project I utilised Godot due to my prior experience with the game engine and it's native language, GDScript. \
                    " +
        "<br><br> \
                    <center> \
                      <div class='skills-container' onclick='window.open(\"https://github.com/mattdbarnett/infinite-colour-runner-game\")' \
                      style='background-color:#181717'> \
                        <img class='skills-icon' src='src/media/svgs/github.svg'> \
                      </div> \
                    </center> \
                    ";
      break;
    case "idwal":
      heading = "Idwal";
      content =
      "The Idwal app is a mobile application that allows vessel surveyors working in cojunction with Idwal Shipping to effectively survey \
                    ships, with the assistance of AR technologies, and communicate Idwal staff seamlessly. \
                    I developed this project with a team of fellow students during the 3rd year of my undergraduate degree at Cardiff University. \
                    We opted to use Flutter to develop this application due to all team members being competent in the framework.\
                    " +
        "<br><br> \
                      <center> \
                        <div class='skills-container' onclick='window.open(\"https://github.com/mattdbarnett/shipping-inspection-app\")' \
                        style='background-color:#181717'> \
                          <img class='skills-icon' src='src/media/svgs/github.svg'> \
                        </div> \
                      </center> \
                      ";
      break;
    case "unicalc":
      heading = "UniCalc";
      content =
        "UniCalc is a desktop application for Windows that allows students to easily calculate their current university grade. \
                      I developed it independently in my free time to better learn the .NET framework. \
                      " +
        "<br><br> \
                      <center> \
                        <div class='skills-container' onclick='window.open(\"https://github.com/mattdbarnett/unicalc\")' \
                        style='background-color:#181717'> \
                          <img class='skills-icon' src='src/media/svgs/github.svg'> \
                        </div> \
                      </center> \
                      ";
      break;
    case "robot.ai":
      heading = "Robot.AI";
      content =
        "Robot.AI is a desktop application that simulates multiple robots that compete to eat and reproduce. \
                        I developed it independently in my free time as I was personally interested in the concept of creating AI \
                        and I wanted to develop a Godot application using the mono variant of the engine in C# rather than using \
                        the engine's native language to broaden my experience.\
                        " +
        "<br><br> \
                        <center> \
                          <div class='skills-container' onclick='window.open(\"https://github.com/mattdbarnett/robot-ai-simulation\")' \
                          style='background-color:#181717'> \
                            <img class='skills-icon' src='src/media/svgs/github.svg'> \
                          </div> \
                        </center> \
                        ";
      break;
    case "activito":
      heading = "Activito";
      content =
        "Activito is a mobile application that allows users to log their daily activity quickly and easily. \
                          I developed it independently in my free time to both improve my skills in developing using Flutter \
                          and for my own personal usage. \
                          " +
        "<br><br> \
                          <center> \
                            <div class='skills-container' onclick='window.open(\"https://github.com/mattdbarnett/activito-app\")' \
                            style='background-color:#181717'> \
                              <img class='skills-icon' src='src/media/svgs/github.svg'> \
                            </div> \
                          </center> \
                          ";
      break;
    default:
      heading = "ERROR! EMPTY H";
      content = "ERROR! EMPTY C";
  }

  document.getElementById("modal-h").innerHTML = heading;
  document.getElementById("modal-p").innerHTML = content;
}

var span = document.getElementsByClassName("modal-close")[0];

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
