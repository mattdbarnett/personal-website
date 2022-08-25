
var modal = document.getElementById("modal");

var heading;
var content;

function containerClick(skill) {
  modal.style.display = "block";

  switch (skill) {
    case "flutter":
      heading = "Flutter";
      content =
        "I learnt Flutter throughout my final year at University. It was the framework my \
                    team and I used during our <a class='link' href='https://github.com/mattdbarnett/shipping-inspection-app'> \
                    final year university group project for Idwal Vessel Inspections.</a> Since then, I've used it in numerous \
                    personal projects, such as my <a class='link' href='https://github.com/mattdbarnett/activito-app'> \
                    personal activity logger</a>. Not only is it my go-to choice for mobile development, it is my favourite \
                    framework to develop software within.";
      break;
    case "dart":
      heading = "Dart";
      content =
        "I learnt Dart throughout my final year at University and it is currently my \
                    favourite language. I've used it for both professional \
                    (<a class='link' href='https://github.com/mattdbarnett/shipping-inspection-app'>Idwal</a>) \
                    and personal (<a class='link' href='https://github.com/mattdbarnett/activito-app'>Activito</a>) projects.";
      break;
    case "dotnet":
      heading = ".NET";
      content =
        "I learnt the legacy .NET Framework during my A-Levels studies in computer science. \
                    Since then, I have used .NET 6.0 to create a Windows desktop application for predicting and \
                    calculating statistics for prospective UK university graduates called \
                    <a class='link' href='https://github.com/mattdbarnett/unicalc'>UniCalc</a>.";
      break;
    case "csharp":
      heading = "C#";
      content =
        "C# was one of the first languages I learnt in my free time during Secondary School. \
                    I most commonly use it for developing applications within the .NET framework \
                    (<a class='link' href='https://github.com/mattdbarnett/unicalc'>UniCalc</a>), though \
                    I also use it to develop games, AI and simulations using Godot Mono \
                    (<a class='link' href='https://github.com/mattdbarnett/robot-ai-simulation'>Robot.AI</a>).";
      break;
    case "vb":
      heading = "Visual Basic";
      content =
        "Visual Basic was one of the primary languages I was taught during Secondary School and College. \
                    I utilised it for my Year 13 College project, where I created a basic text-based version of the popular game 'Sims'.";
      break;
    case "python":
      heading = "Python";
      content =
        "I learnt Python throughout Secondary School, College and the first year of my undergraduate degree at Cardiff University. \
                    Using Python, I have created complex command-line applications and webapps. During the first year of my undergraduate degree, \
                    using Python I created a command-line chess simulator that visualised the board with ASCII characters and a web-application for \
                    for <a class='link' href='https://github.com/mattdbarnett/tap-finder-webapp'>finding and being directed towards the closest free taps</a>.";
      break;
    case "godotengine":
      heading = "Godot Engine";
      content =
        "I've used Godot, and it's integrated language GDScript, for both personal and academic projects. During my \
                    undergraduate degree, I created a <a class='link' href='https://github.com/mattdbarnett/infinite-colour-runner-game'> \
                    fully procedurally generated video-game</a> using Godot as my final year individual project. I then used Godot Mono \
                    to create a <a class='link' href='https://github.com/mattdbarnett/robot-ai-simulation'>simulation where AI \
                    compete to survive and reproduce</a>. Godot is my framework of choice for game development.";
      break;
    case "java":
      heading = "Java";
      content =
        "Learning Java was a focal point during the first and second year of my undergraduate degree. \
                    I learnt how to create tests (JUnit), simulations, command-line applications and webapps (with ThymeLeaf). \
                    I then applied these skills to my Second Year Group Project where I developed a web-application using Spring Boot for \
                    <a class='link' href='https://github.com/mattdbarnett/cu-staff-reflection-webapp'>Cardiff University staff to reflect on their work</a> \
                    and my Second Year Individual Project when I developed a \
                    <a class='link' href='https://github.com/mattdbarnett/shopping-list-app'>native Android application for saving shopping lists</a>.";
      break;
    case "javascript":
      heading = "JavaScript";
      content =
        "I learnt basic JavaScript in my spare-time throughout the first year of my undergraduate degree at Cardiff University. \
                    I then used it during my Second Year Group Project for the front-end of our \
                    <a class='link' href='https://github.com/mattdbarnett/cu-staff-reflection-webapp'>reflective web-application for Cardiff University \
                    staff</a>. I've most recently used it while <a class='link' href='https://github.com/mattdbarnett/learning-react-native'>learning \
                    React Native</a> and when <a class='link' href='https://github.com/mattdbarnett/personal-website'>creating this website</a>.";
      break;
    case "spring":
      heading = "Spring";
      content = 
        "I learnt Spring and Spring Boot during the second year of my undergraduate degree at Cardiff University. \
                    I used it during my Second Year Group Project for the front end of our \
                    <a class='link' href='https://github.com/mattdbarnett/cu-staff-reflection-webapp'>reflective \
                    web-application for Cardiff University staff</a>.";
      break;
    case "php":
        heading = "PHP";
        content = 
          "I have basic experience in PHP from various personal projects. However, I am currently learning how to \
                    use the language in a professional context through my position at Merisis Technology Ltd by \
                    developing features for web-applications using the Zend Framework.  ";
        break;
    case "zendframework":
        heading = "Zend Framework 3";
        content = 
          "I'm learning Zend Framework at my current position at Merisis Technology Ltd to produce enterprise \
                    PHP web-applications.";
        break; 
    case "html":
      heading = "HTML";
      content = 
        "I learnt HTML during Secondary School and have continued using it since as it is an essential element of \
                    most web development tech stacks. I have used it in many web-based projects \
                    in to construct the layout of webpages.";
      break;
    case "css":
      heading = "CSS";
      content = 
        "I learnt CSS during Secondary School and have continued using it since as it is an essential element of \
                    most web development tech stacks. I have used it in many web-based projects \
                    in to construct the styling of web-elements.";
      break;
    case "mysql":
      heading = "MySQL";
      content = 
        "I learnt MySQL during the first and second year of my undergraduate degree at Cardiff University. \
                    I then used it throughout multiple university assignments, including when I needed to create \
                    a database system for the \
                    <a class='link' href='https://github.com/mattdbarnett/cu-staff-reflection-webapp'>reflective \
                    web-application for Cardiff University staff</a> during second year.";
      break;
    case "git":
      heading = "Git";
      content = 
        "Since learning Git during the first year of my undergraduate degree at Cardiff University, I've utilised \
                    it as my primary form of versional control. This is evidenced best on \
                    <a class='link' href='https://github.com/mattdbarnett'> my personal GitHub profile</a> where \
                    you can view a collection of my projects that I have used Git with."
      break;
    case "github":
      heading = "GitHub";
      content = 
        "I have been using GitHub to store my personal projects for a few years now. As a result, I have a solid \
                    grasp on the tools the website provides. This is evidenced best by \
                    <a class='link' href='https://github.com/mattdbarnett'> my personal GitHub profile</a>."
      break;
    case "gitlab":
      heading = "GitLab";
      content = 
        "I learnt GitLab throughout my tenure at Cardiff University as it was the online version control tool \
                    provided and supported by the university. As a result, I have a solid grasp on operating \
                    on and managing projects when using it."
      break;
    case "androidstudio":
      heading = "Android Studio";
      content =
        "I learnt Android Studio during the first and second year of my undergraduate degree at Cardiff \
                    University. It is my IDE of choice for developing native Android applications and I \
                    have experience using it to develop Flutter projects."
      break;
    case "intellijidea":
      heading = "IntelliJ IDEA";
      content =
        "I learnt IntelliJ IDEA during the second year of my undergraduate degree at Cardiff University. \
                    It is my IDE of choice for developing Java-based software."
      break;
    case "atom":
      heading = "Atom";
      content =
        "I learnt Atom during the first year of my undergraduate degree at Cardiff University. I have \
                    experience using it to develop Python-based software."
      break;
    case "vscode":
      heading = "Visual Studio Code";
      content =
        "I learnt Visual Studio Code during the third year of my undergraduate degree at Cardiff University. \
                    It is currently my favourite IDE and it is my preference when developing Flutter applications, \
                    Godot applications and websites."
      break;
    case "visualstudio":
      heading = "Visual Studio";
      content =
        "I learnt Visual Studio while studying Computer Science at A-Level at Shelley College. It is my IDE \
                    of choice for developing .NET applications, both in C# and Visual Basic."
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
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
