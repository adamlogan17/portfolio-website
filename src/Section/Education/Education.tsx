import DisplayValueKeyPairs from '../../components/DisplayValueKeyPairs/DisplayValueKeyPairs';
import ShowInstitution from '../../components/ShowInstitution/ShowInstitution';
import '../../layout.css';

import qubLogo from '../../assets/images/qubLogo.jpg';
import belfastHighLogo from '../../assets/images/bhsLogo2.png';

const qubLevel1 = {
  title: "Level 1",
  rows: [ 
    {
      key:"Fundamentals of Maths for Computing",
      value:"91"
    },
    {
      key:"Programming",
      value:"88"
    },
    {
      key:"Software Design Principles",
      value:"88"
    },
    {
      key:"Databases",
      value:"85"
    },
    {
      key:"Architecture and Networks",
      value:"83"
    },
    {
      key:"Web Technologies	",
      value:"77"
    }
  ]
}

const qubLevel2 = {
  title: "Level 2",
  rows: [ 
    {
      key:"Professional and Transferable Skills",
      value:"86",
    },
    {
      key:"Data Structures and Algorithms",
      value:"82",
    },
    {
      key:"Software Engineering and Systems Development",
      value:"84",
    },
    {
      key:"Cyber Security",
      value:"84",
    },
    {
      key:"Service Oriented Programming",
      value:"94",
    }
  ]
}

const qubLevel3 = {
  title: "Level 3",
  rows: [ 
    {
      key:"Malware Analysis",
      value:"84",
    },
    {
      key:"Secure Software Development",
      value:"73",
    },
    {
      key:"Software Development Practices",
      value:"71",
    }
  ]
}

const aLevels = {
  title: "A-Levels",
  rows: [ 
    {
      key:"Computer Science	",
      value:"A*",
    },
    {
      key:"Chemistry",
      value:"A",
    },
    {
      key:"Mathematics",
      value:"A",
    }
  ]
}

const gcses = {
  title: "GCSEs",
  rows: [ 
    {
      key:"Computer Science",
      value:"A*",
    },
    {
      key:"Electronics",
      value:"A*",
    },
    {
      key:"Chemistry",
      value:"A*",
    },
    {
      key:"Mathematics",
      value:"A*",
    },
    {
      key:"Physics",
      value:"A*",
    },
    {
      key:"Biology",
      value:"A",
    },
    {
      key:"English Language",
      value:"A",
    },
    {
      key:"English Literature",
      value:"A",
    },
    {
      key:"Motor Vehicle and Road User Studies",
      value:"A",
    },
    {
      key:"Religious Studies",
      value:"A*",
    }
  ]
}

const educationDetails:Institution[] = [
  {
    title: "Queen's University Belfast",
    logo: {
      src:qubLogo,
      alt:"QUB Logo"
    },
    dateRange: "Sept 2020 - Current",
    role: [
      {
        roleName:"BEng Software Engineering",
        description: 
          <>
            At queen's I have learnt about many principles and concepts 
            within the of world software development. Throughout all the 
            modules one key area which was highlighted was security. This 
            was stressed within my databases, software design principles 
            and in my systems development modules. Another concept which 
            has been stressed throughout university is the importance of 
            documentation and the design phase. To this end within almost 
            every module I learnt about the nuances of the Unified 
            Modelling Language (UML).
            <br/>
            <br/>
            <DisplayValueKeyPairs rows={qubLevel1.rows} title={qubLevel1.title} />
            <br/>
            <DisplayValueKeyPairs rows={qubLevel2.rows} title={qubLevel2.title} />
            <br/>
            <DisplayValueKeyPairs rows={qubLevel3.rows} title={qubLevel3.title} />
          </>
      }
    ]
  },
  {
    title: "Belfast High School",
    logo: {
      src:belfastHighLogo,
      alt:"Belfast High School Logo"
    },
    dateRange: "Sept 2013 - Jul 2020",
    role: [
      {
        roleName:"A-Level and GCSE",
        description: 
          <>
            During my time at Belfast High School I built a range of skills and abilities 
            through of my experiences. I was a Computing prefect and in this role I went to junior school 
            computing classes and assisted these students in their practical work. I also 
            created the rota for this programme, for the assistant prefects, alongside the senior 
            prefect. This helped me to develop my leadership and organisational skills. 
            <br/>
            <br/>
            <DisplayValueKeyPairs rows={aLevels.rows} title={aLevels.title} />
            <br/>
            <DisplayValueKeyPairs rows={gcses.rows} title={gcses.title} />
          </>
      }
    ]
  }
]

/**
 * TODO Maybe change the grades to an accordion
 */
export default function Education() {
  return (
    <>
      <div className="row">
        <h3>
            Education
        </h3>
      </div>

      {educationDetails.map((experience:any, key:number) => <ShowInstitution key={key} logo={experience.logo} title={experience.title} dateRange={experience.dateRange} role={experience.role} />)}
    </>
  );
}