import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import figmaLogo from "./assets/images/figma.svg";
import reactLogo from "./assets/images/react.svg";
import cppLogo from "./assets/images/cpp.svg";
import cLogo from "./assets/images/c.svg";
import csharpLogo from "./assets/images/csharp.svg";
import angularLogo from "./assets/images/angular.svg";
import djangoLogo from "./assets/images/django.svg";
import jenkinsLogo from "./assets/images/jenkins.svg";
import jiraLogo from "./assets/images/jira.svg";
import gitLogo from "./assets/images/git.svg";
import javaLogo from "./assets/images/java.svg";
import nestjsLogo from "./assets/images/nestjs.svg";
import nodeJSLogo from "./assets/images/nodejs.svg";
import sonarLogo from "./assets/images/sonar.svg";
import phpLogo from "./assets/images/php.svg";
import pythonLogo from "./assets/images/python.svg";
import quarkusLogo from "./assets/images/quarkus.svg";
import umlLogo from "./assets/images/uml.svg";
import sqlLogo from "./assets/images/sql.svg";
import typescriptLogo from "./assets/images/typescript.svg";
import arduinoLogo from "./assets/images/arduino.svg";
import htmlLogo from "./assets/images/html.svg";
import cssLogo from "./assets/images/css.svg";
import jsLogo from "./assets/images/javascript.svg";

import cesiLogo from "./assets/images/cesiLogo.png";
import toeicLogo from "./assets/images/toeic.png";
import ccnaLogo from "./assets/images/ccna.png";
import RTELogo from "./assets/images/RTELogo.png";
import LunatechLogo from "./assets/images/LunatechLogo.png";
import universiteNantesLogo from "./assets/images/universiteNantesLogo.png";
import DGALogo from "./assets/images/DGALogo.png";
import tangramLogo from "./assets/images/tangram.png";
import pathfindingLogo from "./assets/images/pathfinding.png";
import bobailLogo from "./assets/images/bobail.png";
import automateCellulaireLogo from "./assets/images/automate-cellulaire.png";
import didactikRobotLogo from "./assets/images/didactikRobot.png";
import todoAppLogo from "./assets/images/todo-app.png";
import graphLogo from "./assets/images/graph.png";
import tempsReelLogo from "./assets/images/temps-reel.png";
import abaloneLogo from "./assets/images/abalone.png";
import spaceRunLogo from "./assets/images/space-run.png";
import idleLogo from "./assets/images/idle.png";
import foolDriverLogo from "./assets/images/fool-driver.png";
import interpolationLagrangeLogo from "./assets/images/interpolation-lagrange.png";
import easysaveLogo from "./assets/images/easysave.png";
import VRPLogo from "./assets/images/VRP.png";
import shopAppLogo from "./assets/images/shopApp.png";
import signalLogo from "./assets/images/signal.png";
import ciscoLogo from "./assets/images/cisco.png";
import arduinoWeatherStationLogo from "./assets/images/arduino.png";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1600
};

const greeting = {
  username: "Alexandre",
  title: "greeting.title",
  subTitle: "greeting.subTitle",
  // subTitle: emoji(
  //   "I am a passionate developer since high school 🚀 Almost graduated from CESI Graduate School of Engineering 👨‍🎓 I have an experience of building Web applications with many backend & frontend frameworks."
  // ),
  resumeLink: "greeting.resumeLink",
};

const socialMediaLinks = {
  github: "https://github.com/4lexDel",
  linkedin: "https://www.linkedin.com/in/alexandre-delorme-39b6671b9/",
  mail: "alexandre.delorme@viacesi.fr",
};

const skillsContent = {
  title: "skillsContent.title",
  subTitle: "skillsContent.subTitle",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // )
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],
  skillsSections: [
    {
      identifier: "backendSection",
      title: "skillsContent.backendSection",
      data: [
        {name: "SQL", image: sqlLogo},
        {name: "Django", image: djangoLogo},
        {name: "NodeJS", image: nodeJSLogo},
        {name: "Quarkus", image: quarkusLogo},
        {name: "Php", image: phpLogo},
        {name: "Nestjs", image: nestjsLogo}
      ]
    },
    {
      identifier: "frontendSection",
      title: "skillsContent.frontendSection",
      data: [
        {name: "HTML", image: htmlLogo},
        {name: "CSS", image: cssLogo},
        {name: "Javascript", image: jsLogo},
        {name: "Typescript", image: typescriptLogo},
        {name: "Angular", image: angularLogo},
        {name: "React", image: reactLogo}
      ]
    },
    {
      identifier: "devOpsConceptionSection",
      title: "skillsContent.devOpsConceptionSection",
      data: [
        {name: "Jenkins", image: jenkinsLogo},
        {name: "Git", image: gitLogo},
        {name: "Sonar", image: sonarLogo},
        {name: "UML", image: umlLogo},
        {name: "Figma", image: figmaLogo},
        {name: "Jira", image: jiraLogo}
      ]
    },
    {
      identifier: "othersSection",
      title: "skillsContent.othersSection",
      data: [
        {name: "Python", image: pythonLogo},
        {name: "C", image: cLogo},
        {name: "C++", image: cppLogo},
        {name: "C#", image: csharpLogo},
        {name: "Java", image: javaLogo},
        {name: "Arduino", image: arduinoLogo}
      ]
    }
  ],
};

const educationInfo = {
  title: "educationInfo.title",
  schools: [
    {
      identifier: "cesi",
      name: "educationInfo.cesi.name",
      logo: cesiLogo,
      subHeader: "educationInfo.cesi.subHeader",
      duration: "educationInfo.cesi.duration",
      desc: "educationInfo.cesi.desc"
    },
    {
      identifier: "toeic",
      name: "educationInfo.toeic.name",
      logo: toeicLogo,
      subHeader: "educationInfo.toeic.subHeader",
      duration: "educationInfo.toeic.duration",
      desc: "educationInfo.toeic.desc",
      link: {
        name: "educationInfo.toeic.link.name",
        url: "https://www.etsglobal.org/fr/en/digital-score-report/3FA6DD81420F61FD4A78FB82538ED3C6828ADED4389116D63C5DDF936F3E230ASndLSlNoNktoRW5DbGpVUUhlZnhWdkJtZzBwWk1NWHNZM3pFdnBsclIzTEUxSFpr"
      }
    },
    {
      identifier: "ccna",
      name: "educationInfo.ccna.name",
      logo: ccnaLogo,
      subHeader: "educationInfo.ccna.subHeader",
      duration: "educationInfo.ccna.duration",
      desc: "educationInfo.ccna.desc"
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
};

const workExperiences = {
  title: "workExperiences.title",
  experience: [
    {
      identifier: "rte",
      role: "workExperiences.rte.role",
      company: "workExperiences.rte.company",
      companylogo: RTELogo,
      date: "workExperiences.rte.date",
      desc: "workExperiences.rte.desc"
    },
    {
      identifier: "lunatech",
      role: "workExperiences.lunatech.role",
      company: "workExperiences.lunatech.company",
      companylogo: LunatechLogo,
      date: "workExperiences.lunatech.date",
      desc: "workExperiences.lunatech.desc"
    },
    {
      identifier: "ls2n",
      role: "workExperiences.ls2n.role",
      company: "workExperiences.ls2n.company",
      companylogo: universiteNantesLogo,
      date: "workExperiences.ls2n.date",
      desc: "workExperiences.ls2n.desc",
    },
    {
      identifier: "dga",
      role: "workExperiences.dga.role",
      company: "workExperiences.dga.company",
      companylogo: DGALogo,
      date: "workExperiences.dga.date",
      desc: "DeveworkExperiences.dga.desc"
    }
  ]
};

const webProjects = {
  title: "webProjects.title",
  identifier: "webProjects",
  projects: [
    {
      identifier: "webProjects.tangram",
      image: tangramLogo,
      name: "webProjects.tangram.name",
      desc:
        "webProjects.tangram.desc",
      footerLink: [
        {
          name: "sourceCode",
          url: "https://github.com/4lexDel/tangram-solver.git/"
        },
        {
          name: "visitWebsite",
          url: "https://4lexdel.github.io/tangram-solver/"
        }
      ]
    },
    {
      identifier: "webProjects.pathfinding",
      image: pathfindingLogo,
      name: "webProjects.pathfinding.name",
      desc:
        "webProjects.pathfinding.desc",
      footerLink: [
        {
          name: "sourceCode",
          url: "https://github.com/4lexDel/pathFinding-version-serveur.git/"
        },
        {
          name: "visitWebsite",
          url: "https://4lexdel.github.io/pathFinding-version-serveur/"
        }
      ]
    },
    {
      identifier: "webProjects.bobail",
      image: bobailLogo,
      name: "webProjects.bobail.name",
      desc:
        "webProjects.bobail.desc",
      footerLink: [
        {
          name: "sourceCode",
          url: "https://github.com/4lexDel/bobail-online.git/"
        },
        {
          name: "visitWebsite",
          url: "https://4lexdel.github.io/BobailMinMax/"
        }
      ]
    },
    {
      identifier: "webProjects.cellularAutomaton",
      image: automateCellulaireLogo,
      name: "webProjects.cellularAutomaton.name",
      desc:
        "webProjects.cellularAutomaton.desc",
      footerLink: [
        {
          name: "sourceCode",
          url: "https://github.com/4lexDel/advanced-game-of-life.git/"
        },
        {
          name: "visitWebsite",
          url: "https://4lexdel.github.io/GameLibs/"
        }
      ]
    },
    {
      identifier: "webProjects.didactikRobot",
      image: didactikRobotLogo,
      name: "webProjects.didactikRobot.name",
      desc:
        "webProjects.didactikRobot.desc",
      footerLink: [
        {
          name: "sourceCode",
          url: "https://github.com/4lexDel/Didactik-robot.git"
        }
      ]
    },
    {
      identifier: "webProjects.angularApp",
      image: todoAppLogo,
      name: "webProjects.angularApp.name",
      desc:
        "webProjects.angularApp.desc",
      footerLink: [
        {
          name: "sourceCode",
          url: "https://github.com/4lexDel/todo-app/"
        }
      ]
    },
    {
      identifier: "webProjects.graphGenerator",
      image: graphLogo,
      name: "webProjects.graphGenerator.name",
      desc:
        "webProjects.graphGenerator.desc",
      footerLink: [
        {
          name: "sourceCode",
          url: "https://github.com/4lexDel/Graphe/"
        },
        {
          name: "visitWebsite",
          url: "https://4lexdel.github.io/Graphe/"
        }
      ]
    },
    {
      identifier: "webProjects.kingsGame",
      image: tempsReelLogo,
      name: "webProjects.kingsGame.name",
      desc: "webProjects.kingsGame.desc",
      footerLink: [
        {
          name: "sourceCode",
          url: "https://github.com/4lexDel/kingGame.git/"
        }
      ]
    },
    {
      identifier: "webProjects.abalone",
      image: abaloneLogo,
      name: "webProjects.abalone.name",
      desc:
        "webProjects.abalone.desc",
      footerLink: [
        {
          name: "sourceCode",
          url: "https://github.com/4lexDel/abalone.git/"
        },
        {
          name: "visitWebsite",
          url: "https://4lexdel.github.io/abalone/"
        }
      ]
    }    
  ]
};

const javaProjects = {
  title: "javaProjects.title",
  identifier: "javaProjects",
  projects: [
    {
      identifier: "javaProjects.spaceRun",
      image: spaceRunLogo,
      name: "javaProjects.spaceRun.name",
      desc:
        "javaProjects.spaceRun.desc"
    },
    {
      identifier: "javaProjects.idleGame",
      image: idleLogo,
      name: "javaProjects.idleGame.name",
      desc:
        "javaProjects.idleGame.desc"
    },
    {
      identifier: "javaProjects.cityGenerator",
      image: foolDriverLogo,
      name: "javaProjects.cityGenerator.name",
      desc:
        "javaProjects.cityGenerator.desc"
    },
    {
      identifier: "javaProjects.lagrangeInterpolation",
      image: interpolationLagrangeLogo,
      name: "javaProjects.lagrangeInterpolation.name",
      desc:
        "javaProjects.lagrangeInterpolation.desc"
    }
  ]
};

const schoolProjects = {
  title: "schoolProjects.title",
  identifier: "schoolProjects",
  projects: [
    {
      identifier: "schoolProjects.easySave",
      image: easysaveLogo,
      name: "schoolProjects.easySave.name",
      desc:
        "schoolProjects.easySave.desc"
    },
    {
      identifier: "schoolProjects.projectAdvancedAlgorithms",
      image: VRPLogo,
      name: "schoolProjects.projectAdvancedAlgorithms.name",
      desc:
        "schoolProjects.projectAdvancedAlgorithms.desc"
    },
    {
      identifier: "schoolProjects.salesManagement",
      image: shopAppLogo,
      name: "schoolProjects.salesManagement.name",
      desc:
        "schoolProjects.salesManagement.desc"
    },
    {
      identifier: "schoolProjects.signalProcessing",
      image: signalLogo,
      name: "schoolProjects.signalProcessing.name",
      desc:
        "schoolProjects.signalProcessing.desc"
    },
    {
      identifier: "schoolProjects.networksAndSystems",
      image: ciscoLogo,
      name: "schoolProjects.networksAndSystems.name",
      desc:
        "schoolProjects.networksAndSystems.desc"
    },
    {
      identifier: "schoolProjects.weatherStation",
      image: arduinoWeatherStationLogo,
      name: "schoolProjects.weatherStation.name",
      desc:
        "schoolProjects.weatherStation.desc"
    }
  ]
};

const projectSections = [webProjects, javaProjects, schoolProjects];

const contactInfo = {
  title: "contactInfo.title",//emoji("Contact Me ☎️"),
  subtitle: "contactInfo.subtitle",
  number: "",//+33-0606060606
  email_address: "alexandre.delorme@viacesi.fr"
};

const isHireable = true;

export {
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsContent,
  educationInfo,
  techStack,
  workExperiences,
  projectSections,
  contactInfo,
  isHireable,
};
