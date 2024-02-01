import DisplayValueKeyPairs from '../../components/DisplayValueKeyPairs/DisplayValueKeyPairs';
import ShowInstitution from '../../components/ShowInstitution/ShowInstitution';
import '../../layout.css';

import qubLogo from '../../assets/images/qubLogo.jpg';
import belfastHighLogo from '../../assets/images/bhsLogo2.png';
import { Typography } from '@mui/material';

const qubLevel1:KeyValuePair = {
  title: "Level 1",
  data: [ 
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
      value:"83"
    },
    {
      key:"Architecture and Networks",
      value:"85"
    },
    {
      key:"Web Technologies	",
      value:"77"
    }
  ]
}

const qubLevel2:KeyValuePair = {
  title: "Level 2",
  data: [ 
    {
      key:"Professional and Transferrable Skills",
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
      key:"Cyber Security Fundamentals",
      value:"84",
    },
    {
      key:"Service-Oriented Programming",
      value:"93",
    }
  ]
}

const qubLevel3:KeyValuePair = {
  title: "Level 3",
  data: [ 
    {
      key:"Malware Analysis",
      value:"84",
    },
    {
      key:"Secure Software Development",
      value:"73",
    },
    {
      key:"Software Development Practice",
      value:"71",
    },
    {
      key:"Advanced Computer Architecture",
      value:"86",
    },
    {
      key:"Software Engineering Enterprise Project",
      value:"77",
    },
    {
      key:"Team-based Software Innovation",
      value:"73",
    }
  ]
}

const aLevels:KeyValuePair = {
  title: "A-Levels",
  data: [ 
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

const gcses:KeyValuePair = {
  title: "GCSEs",
  data: [ 
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
    description: {
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
          </>
    },
    role: [
      {
        roleName:qubLevel1.title === undefined ? "" : qubLevel1.title,
        description:
          <>
            <DisplayValueKeyPairs data={qubLevel1.data} />
          </>
      },
      {
        roleName:qubLevel2.title === undefined ? "" : qubLevel2.title,
        description:
          <>
            <DisplayValueKeyPairs data={qubLevel2.data} />
          </>
      },
      {
        roleName:qubLevel3.title === undefined ? "" : qubLevel3.title,
        description:
          <>
            <DisplayValueKeyPairs data={qubLevel3.data} />
          </>
      },
    ]
  },
  {
    title: "Belfast High School",
    logo: {
      src:belfastHighLogo,
      alt:"Belfast High School Logo"
    },
    dateRange: "Sept 2013 - Jul 2020",
    description: {
      roleName:"A-Level and GCSE",
      description: 
        <>
          During my time at Belfast High School I built a range of skills and abilities 
          through of my experiences. I was a Computing prefect and in this role I went to junior school 
          computing classes and assisted these students in their practical work. I also 
          created the rota for this programme, for the assistant prefects, alongside the senior 
          prefect. This helped me to develop my leadership and organisational skills.
        </>
    },
    role: [
      {
        roleName:aLevels.title === undefined ? "" : aLevels.title,
        description:
          <>
            <DisplayValueKeyPairs data={aLevels.data} />
          </>
      },
      {
        roleName:gcses.title === undefined ? "" : gcses.title,
        description:
          <>
            <DisplayValueKeyPairs data={gcses.data} />
          </>
      }
    ]
  }
]

export default function Education() {
  return (
    <>
      <div className="row">
        <Typography variant="h2">
            Education
        </Typography>
      </div>

      {educationDetails.map((experience:any, key:number) => 
        <ShowInstitution 
          key={key} 
          logo={experience.logo} 
          title={experience.title} 
          dateRange={experience.dateRange} 
          role={experience.role} 
          description={experience.description}
        />)}
    </>
  );
}