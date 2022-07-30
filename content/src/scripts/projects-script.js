var modal = document.getElementById("modal");

var heading;
var content;

function containerClick(project) {
  modal.style.display = "block";

  switch (project) {
    case "upwn":
      heading = "Upwn";
      content =
        ". \
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
        ". \
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
        ". \
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
        ". \
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
        ". \
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
