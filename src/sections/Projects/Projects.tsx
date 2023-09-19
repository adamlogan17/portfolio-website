import { Link } from '@mui/material';
import '../../layout.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import AzureLogo from '../../assets/images/azureNoNameLogo.png';
import PythonLogo from '../../assets/images/pythonLogo2.png';
import JavaLogo from '../../assets/images/javaLogo2.png';
import WebTech from '../../assets/images/webTech.png';
import CPlusPlusLogo from '../../assets/images/c++Logo.png';
import ReactLogo from '../../assets/images/react.svg';

const pythonLogoDetails:Image = {
  src:PythonLogo,
  alt:"Python logo"
}

const javaLogoDetails:Image = {
  src:JavaLogo,
  alt:"Java logo"
}

const CPlusPlusDetails:Image = {
  src:CPlusPlusLogo,
  alt:"C++ logo",
  width:"260px"
}

const ReactLogoDetails:Image = {
  src:ReactLogo,
  alt:"React logo"
}

const projects:ProjectCard[] = [
  {
    title:'Final Year Project',
    text: 'This is my final year project in which many technologies, such as react, nodejs, python, docker and powershell is used. Currently this only shows the submission for my first semester.',
    projectUrl:'https://github.com/adamlogan17/final-year-project',
    img: ReactLogoDetails
  },
  {
    title:'Systems Development Coursework',
    text: 'This is my coursework submission for my Year 2 Systems Development module, in which I received the Civica award.',
    projectUrl:'https://github.com/adamlogan17/systems-development-cw',
    img: javaLogoDetails
  },
  {
    title:'Data Structures and Algorithms Practicals',
    text: 'This is the practical assignments completed for my Year 2 Data Structures and Algorithms module.',
    projectUrl:'https://github.com/adamlogan17/data-structures-and-algorithms',
    img: CPlusPlusDetails
  },
  {
    title:'Azure IoT Generators',
    text: 'These are the test harnesses which I created during my second summer placement at PwC, using Python, and why there where created can be found in the experience section.',
    projectUrl:'https://github.com/adamlogan17/azure-iot-generators',
    img: {
      src:AzureLogo,
      alt:"Azure Logo"
    }
  },
  {
    title:'Web Technology Coursework',
    text: 'This is the escape room game which I submitted for my Web Tech coursework.',
    projectUrl:'https://github.com/adamlogan17/web-tech-coursework',
    img: {
      src:WebTech,
      alt:"HTML, CSS and JavaScript logos"
    }
  },
  {
    title:'A-Level Coursework',
    text: 'This is the hotel booking system which I submitted for my Computer Science A-Level coursework.',
    projectUrl:'https://github.com/adamlogan17/A-level-coursework-2020',
    img: pythonLogoDetails
  }
]

export default function Projects() {
  return (
    <>
      <div className="row">
        <h3>
            Projects
        </h3>

        <p>Please read 'README.txt' for all the projects</p>
        <p>You can also view all these project, projects I am currently working, and more on my <Link target="_blank" href="https://github.com/adamlogan17">GitHub</Link> profile!</p>
      </div>

      <div className="row" >
        {projects.map((project:ProjectCard, key:number) => 
          <ProjectCard key={key} title={project.title} text={project.text} img={project.img} projectUrl={project.projectUrl} />
        )}
      </div>
    </>
  );
}