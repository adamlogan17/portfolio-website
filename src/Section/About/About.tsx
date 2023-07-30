import { Paper } from "@mui/material";
import CurrentTechSkills from '../../assets/images/currentTechSkills.png';
import './About.css';
import '../../layout.css';
import DownloadList from "../../components/DownloadList/DownloadList";

import Vantiq from '../../assets/images/vantiqSquareLogo.jpeg';
import Microsoft from '../../assets/images/microsoftLogo.png';
import PwC from '../../assets/images/pwcLogo.png';
import DofEd from '../../assets/images/dofeLogo.svg';
import QUB from '../../assets/images/qubLogo.jpg';
import Alteryx from '../../assets/images/alteryxLogo.png';

import CivicaAward from '../../assets/downloads/Qualifications/Civica-Award.pdf';
import AI900 from '../../assets/downloads/Qualifications/Microsoft-AI-Fundamentals-Certificate.pdf';
import AZ900 from '../../assets/downloads/Qualifications/Microsoft-Azure-Fundamentals-Certificate.pdf';
import SC900 from '../../assets/downloads/Qualifications/Microsoft-Security-Fundamentals-Certificate.pdf';
import AlteryxCert from '../../assets/downloads/Qualifications/Alterx-Designer-Core-Certification.pdf';
import DofEdCert from '../../assets/downloads/Qualifications/DofEd.pdf';
import UBELT from '../../assets/downloads/Qualifications/GCSE/CCEA/UBELT/UBELT.pdf';
import VantiqCert from '../../assets/downloads/Qualifications/VANTIQ-Developer-Level-1.pdf';

const microsoftAvatar:any = {
  src:Microsoft,
  alt:"Microsoft Logo",
  background:'white',
  imgStyle: {
    width:'75%',
    height:'75%',
  }
};

const qualifications:any[] = [
  {
    name:'Civica Award',
    about:'Awarded by achieving highest in the year in the module CSC2058 Systems Development',
    download:CivicaAward,
    avatar: {
      src:QUB,
      alt:"Queen's University Belfast Logo"
    }
  },
  {
    name:'Microsoft AI Fundamentals (AI-900)',
    download:AI900,
    avatar: microsoftAvatar
  },
  {
    name:'Microsoft Security Fundamentals (SC-900)',
    download:SC900,
    avatar: microsoftAvatar
  },
  {
    name:'Microsoft Azure Fundamentals (AZ-900)',
    download:AZ900,
    avatar: microsoftAvatar
  },
  {
    name:'Vantiq Developer (Level 1)',
    download:VantiqCert,
    avatar: {
      src:Vantiq,
      alt:"Vantiq Logo"
    }
  },
  {
    name:'Alteryx Designer Core',
    download:AlteryxCert,
    avatar: {
      src:Alteryx,
      background:'white',
      alt:"Alteryx Logo"
    }
  },
  {
    name:'PwC Digital Acumen Badge',
    download:'https://www.credly.com/badges/93896f07-7099-4864-9797-c01c6b92bb9c/public_url',
    avatar: {
      src:PwC,
      alt:"PwC Logo"
    }
  },
  {
    name:'Understanding Business, Language and Tourism (Level 2)',
    download:UBELT,
    avatar: {
      src:PwC,
      alt:"CCEA Logo"
    }
  },
  {
    name:'Bronze Duke of Edinburgh Award',
    download:DofEdCert,
    avatar: {
      src:DofEd,
      alt:"Duke Of Edinburgh Award Logo",
      background:'white',
      imgStyle: { objectFit:'contain' }
    }
  }
]

export default function About() {
  
  return (
    <Paper className='row' sx={{
      borderRadius: '100px',
      padding: '10px'
    }}>
      <h3>
        About Me
      </h3>

      <h1>
        A little bit about me
      </h1>

      <p>
        I am currently studying Software
        Engineering with Digital Technology (PwC)
        at Queens University Belfast.
      </p>

      <p>
        I enjoy educating people on the impact of
        technology and how to use certain
        technologies as demonstrated within my
        role assisting in junior IT classes.
      </p>

      <p>
        I am also an active member in the Queen's
        University Computing Society by attending
        talks hosted by the society and by
        participating within the 2020 Hack the
        COVID Hackathon. Within this event I,
        along with a team, presented our solution
        to a coronavirus specific problem to a
        panel of judges. I also participated in 
        the 2021 Pediatrics Hackathon, in which 
        I developed a mock app to assist in the 
        flow of information from a responding 
        paramedic to a specialist.
      </p>

      <h1>
        Technical Skills
      </h1>

      <figure >
          <img className="tech-skills" src={CurrentTechSkills} alt="Tech Skills Logos"/>
      </figure>

      <h1>Qualifications</h1>
      
      <div className="tech-skills">
        <DownloadList items={qualifications}/>
      </div>

    </Paper>
  );
}