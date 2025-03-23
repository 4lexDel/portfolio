import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1600
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Alexandre",
  title: "Hello, I'm Alexandre",
  subTitle: emoji(
    "I am a passionate developer since high school 🚀 Almost graduated from CESI Graduate School of Engineering 👨‍🎓 I have an experience of building Web applications with many backend & frontend frameworks."
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/4lexDel",
  linkedin: "https://www.linkedin.com/in/alexandre-delorme-39b6671b9/",
  mail: "alexandre.delorme@viacesi.fr",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "TODO",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    )
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  // https://fontawesome.com/icons?d=gallery
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "CESI Graduate School of Engineering",
      logo: require("./assets/images/cesiLogo.png"),
      subHeader: "School of Engineering in Computer Science",
      duration: "September 2020 - September 2025",
      desc: "Team projects / Apprenticeship / Internships / Experience abroad"
    }
  ]
};

// BE MORE ACCURATE?
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Fullstack developer apprentice",
      company: "RTE",
      companylogo: require("./assets/images/RTELogo.png"),
      date: "September 2022 – October 2025",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Fullstack developer Intern",
      company: "Lunatech",
      companylogo: require("./assets/images/LunatechLogo.png"),
      date: "July 2024 – October 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "LS2N laboratory",
      companylogo: require("./assets/images/universiteNantesLogo.png"),
      date: "May 2024 – July 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Python developer Intern",
      company: "DGA",
      companylogo: require("./assets/images/DGALogo.png"),
      date: "April 2022 – July 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

const personalProjects = {
  title: "My personal projects",
  projects: [
    {
      image: require("./assets/images/bobail.png"),
      projectName: "Bobail",
      projectDesc:
        "Development of a 2-player board game, management of a Room system. Implementation of the MinMax algorithm to create an intermediate-level AI.",
      footerLink: [
        {
          name: "Source code",
          url: "https://github.com/4lexDel/bobail-online.git/"
        },
        {
          name: "Visit website",
          url: "https://4lexdel.github.io/BobailMinMax/"
        }
      ]
    },
    {
      image: require("./assets/images/pathfinding.png"),
      projectName: "Pathfinding",
      projectDesc:
        "Grid map editor with implementation of pathfinding algorithms (JPS and A*). Performance comparison on randomly generated mazes with DFS and Fusion methods.",
      footerLink: [
        {
          name: "Code source",
          url: "https://github.com/4lexDel/pathFinding-version-serveur.git/"
        },
        {
          name: "Visit website",
          url: "https://4lexdel.github.io/pathFinding-version-serveur/"
        }
      ]
    },
    {
      image: require("./assets/images/todo-app.png"),
      projectName: "Angular app",
      projectDesc:
        "Development of a Todo List application with Angular linked to an API created in NodeJS.",
      footerLink: [
        {
          name: "Code source",
          url: "https://github.com/4lexDel/todo-app/"
        }
      ]
    },
    {
      image: require("./assets/images/graph.png"),
      projectName: "Graph generator",
      projectDesc:
        "Mathematical graph manager. Generates cities using Voronoi diagrams.",
      footerLink: [
        {
          name: "Code source",
          url: "https://github.com/4lexDel/Graphe/"
        },
        {
          name: "Visit website",
          url: "https://4lexdel.github.io/Graphe/"
        }
      ]
    },
    {
      image: require("./assets/images/temps-reel.png"),
      projectName: "King's game",
      projectDesc: "Real-time multiplayer game with global chat system.",
      footerLink: [
        {
          name: "Code source",
          url: "https://github.com/4lexDel/kingGame.git/"
        }
      ]
    },
    {
      image: require("./assets/images/automate-cellulaire.png"),
      projectName: "Cellular automaton",
      projectDesc:
        "Development of a map editor to understand the concept of cellular automata (example with the game of life).",
      footerLink: [
        {
          name: "Code source",
          url: "https://github.com/4lexDel/advanced-game-of-life.git/"
        },
        {
          name: "Visit website",
          url: "https://4lexdel.github.io/GameLibs/"
        }
      ]
    },
    {
      image: require("./assets/images/abalone.png"),
      projectName: "Cellular automaton",
      projectDesc:
        "Abalone board game developed on the basis of the Bobail project (presented above).",
      footerLink: [
        {
          name: "Code source",
          url: "https://github.com/4lexDel/abalone.git/"
        },
        {
          name: "Visit website",
          url: "https://4lexdel.github.io/abalone/"
        }
      ]
    },
    {
      image: require("./assets/images/tangram.png"),
      projectName: "Tangram solver",
      projectDesc:
        "Tangram solver on grid space. Define final model and solve it.",
      footerLink: [
        {
          name: "Code source",
          url: "https://github.com/4lexDel/tangram-solver.git/"
        },
        {
          name: "Visit website",
          url: "https://4lexdel.github.io/tangram-solver/"
        }
      ]
    }
  ]
};

const javaProjects = {
  title: "Java projects",
  projects: [
    {
      image: require("./assets/images/space-run.png"),
      projectName: "Space run",
      projectDesc:
        "High school project developed during my IT specialization. Space Invader-type game. Objective: go as far as possible while avoiding asteroids."
    },
    {
      image: require("./assets/images/idle.png"),
      projectName: "Idle game",
      projectDesc:
        "Small Idle-type game, the objective is to accumulate the most resources."
    },
    {
      image: require("./assets/images/fool-driver.png"),
      projectName: "City generator",
      projectDesc:
        "Generation of coherent towns with roads, rails and houses. Vehicle movement system to explore the generated map."
    },
    {
      image: require("./assets/images/interpolation-lagrange.png"),
      projectName: "Lagrange interpolation",
      projectDesc:
        "Implementation of Lagrange interpolator polynomials. The user places the points in the frame of reference and the program determines the function passing through all the points."
    }
  ]
};

const schoolProjects = {
  title: "School projects",
  projects: [
    {
      image: require("./assets/images/easysave.png"),
      projectName: "Easy save",
      projectDesc:
        "Development of a backup software (differential backup system, encryption, remote access...)."
    },
    {
      image: require("./assets/images/VRP.png"),
      projectName: "TSP/VRP",
      projectDesc:
        "Development of heuristics and metaheuristics (genetic algorithm, ant colony, taboo...) to optimize vehicle routes (VRP problem, TSP)."
    },
    {
      image: require("./assets/images/shopApp.png"),
      projectName: "Sales management",
      projectDesc:
        "Development of a sales management software (inventory management, personnel, statistics...)."
    },
    {
      image: require("./assets/images/signal.png"),
      projectName: "Signal processing",
      projectDesc:
        "Sound wave processing in Python (modulation, demodulation, coding, decoding...)."
    },
    {
      image: require("./assets/images/cisco.png"),
      projectName: "Networks and systems",
      projectDesc:
        "Audit of a network infrastructure, design of an architecture respecting customer constraints. Obtained CCNA1 (CISCO certification)."
    },
    {
      image: require("./assets/images/arduino.png"),
      projectName: "Weather station",
      projectDesc:
        "Creation of a weather station with an Arduino board and various sensors (temperature, pressure, humidity, GPS...)."
    }
  ]
};

const projectSections = [personalProjects, javaProjects, schoolProjects];

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi?",
  number: "+33-0000000000",
  email_address: "alexandre.delorme@viacesi.fr"
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  projectSections,
  contactInfo,
  isHireable,
  resumeSection
};
