import ShowInstitution from '../../components/ShowInstitution/ShowInstitution';
import '../../layout.css';

import easonLogo from '../../assets/images/easonsLogo.png';
import pwcLogo from '../../assets/images/pwcLogo.png';
import psniLogo from '../../assets/images/psniLogo.png';
import catalystLogo from '../../assets/images/catalystLogo.png';
import ulsterUniLogo from '../../assets/images/ulsterLogo.jfif';

const experienceDetails:Institution[] = [
  {
    title:"PwC",
    dateRange: "Sep 2020 - Current",
    logo:{
      src:pwcLogo,
      alt:"PwC Logo"
    },
    role:[
      {
        roleName:"AppScript",
        dateRange: "Nov 2022 - Dec 2022", // (21/11/2022 -  30/12/2022)
        description:
          <>
            <p>
              During my time at tech central, I was on a project to develop an internal asset, which would insert data, from an 
              internal data source, directly into a google sheet. This asset took the form of a google workspace add on and was 
              developed using Apps Script. I spent most of my time on this project developing a way to dynamically make requests 
              to the internal API and manipulating the responses. One other key feature, which I also worked on, was the ability 
              to allow the user to preview the response and choose which fields they would like to import into their document. 
            </p>

            <p>
              I demonstrated that I am able to work within a small team and within an <i>agile framework</i>. On this project 
              I gained experience and grew my technical knowledge within <i>Apps Script</i> and <i>REST APIs</i>. I also showed 
              that I am able to <i>work under time constraints</i>, as there were last minute changes requested. 
            </p> 
          </> 
      },
      {
        roleName:"Finance Transformation",
        dateRange: "Sep 2022 - Nov 2022", // (12/09/2022 -  18/11/2022)
        description:
          <>
            <p>
              On this project I was assigned to a large team that was developing both a new ERP and an EPM 
              system for a client. I worked specifically within the EPM side of the project. My role within 
              this project was within PMO and test management of three new work streams in relation to planning 
              IFRS4. This allowed me to interact directly with the client by sending status reports and by 
              attending meetings with the client. 
            </p>

            <p>
              Throughout my time on this project I developed my business acumen within this project and learned 
              new skills such as <i>Oracle Planning and management</i>. I developed an appreciation of the 
              importance of <i>testing</i> and gained knowledge within this field. I once again demonstrated my 
              ability to <i>work in a multicultural team</i> by working directly with colleagues from PwC India 
              and PwC Middle East.
            </p>
          </> 
      },
      {
        roleName:"Vantiq", // (13/06/2022 -  19/06/2022)
        dateRange: "Jun 2022 - Aug 2022",
        description:
          <>
            <p>
              During this placement, I developed two prototype applications, one which monitors temperature
              and humidity sensors and another that acts as a ride management application, for a theme park. 
              These prototypes were developed using Vantiq which is an IoT processing platform. 
              The purpose of these prototypes, was to test if Vantiq is a viable platform for 
              PwC to use when developing smart venue and smart retail solutions.
            </p>

            <p>
              During the course of developing these prototypes I created several test harnesses which would 
              simulate data entering Azure. The first test harness that was created simulated temperature and 
              humidity sensors and the second test harness, which was developed, simulated people entering a queue
              for a ride. These test harnesses, are Web Apps that are deployed on Azure and were developed in 
              <i>Python</i> and used <i>Flask</i>, the <i>Azure SDK</i>, <i>HTML and CSS</i>.
            </p> 
            
            <p>
              I not only developed and improved on the technical skills listed above, but I also demonstrated my ability to 
              <i>work autonomously</i>, <i>manage a project</i> and <i>create innovative solutions</i> to real world business problems.
            </p>
          </> 
      },
      {
        roleName:"Salesforce",
        dateRange: "Jun 2021 - Aug 2021", // (14/06/2021 - 16/08/2021)
        description:
          <>
            <p>
              Within the first half of my first 
              placement, I was trained on several technologies such as <i>Azure</i>,
              <i>Alteryx</i>, <i>UiPath</i> and <i>excel</i>.
            </p>

            <p>
              The second half of my placement I was placed within the configuration
              team of a project which consisted of creating an online loan
              application process. Within this project I worked with <i>salesforce</i>, and
              more specifically <i>salesforce flows</i>, to make changes to the application
              process, which the client requested. I also manage the commercials
              and onboarding for a large project team (50+ colleagues), spanning
              two continents (PwC UK, CTech Poland and PwC South Africa) which
              demonstrates that my <i>ability to work within a multicultural team</i>.
            </p>
          </> 
      }
    ]
  },
  {
    title:"Eason",
    dateRange: "Feb 2020 - Aug 2020",
    logo:{
      src:easonLogo,
      alt:"Eason Logo"
    },
    role:[
      {
        roleName:"Sales Assistant",
        description:
          <>
            My job at Eason’s was heavily communication based. Everyday my role
            as a sales assistant required me to be polite and present myself in a
            friendly yet professional manner to the customers and my co-workers.
            This allowed me to develop my <i>confident demeanour</i>. Alongside this,
            working on the tills required cash handling which granted me the
            opportunity to prove I am <i>trustworthy</i> and thorough in all tasks I am
            asked to undertake.
          </> 
      }
    ]
  },
  {
    title:"PSNI",
    dateRange: "Aug 2019", // (29/07/2019 – 23/08/2019)
    logo:{
      src:psniLogo,
      alt:"PSNI Logo"
    },
    role:[
      {
        roleName:"Software Engineer", 
        description:
          <>
            At my 4 weeks' work experience with the PSNI, where I was placed
            within ICS in which I worked on several projects which were developing
            a facial recognition software, researching different handwriting
            recognition software and assisting ICS in finding a cloud storage
            provider. These projects tested both my <i>problem-solving</i> skills 
            and <i>my logical thinking skills</i>.   
          </> 
      }
    ]
  },
  {
    title:"PwC",
    dateRange: "Jul 2019", // (22/07/2019–26/07/2019)
    logo:{
      src:pwcLogo,
      alt:"PwC Logo"
    },
    role:[
      {
        roleName:"Software Engineer",
        description:
          <>
            This week at PwC taught me how and the <i>importance of sticking to
            deadlines</i> and how to <i>manage my time effectively</i> to achieve 
            this goal. I also got an insight on the day-to-day operations of large
            organisations and the structure in which these organisations may be
            built upon.  
          </> 
      }
    ]
  },
  {
    title:"Catalyst",
    dateRange: "Jun 2019", // (17/06/2019 – 20/06/2019)
    logo:{
      src:catalystLogo,
      alt:"Catalyst Logo"
    },
    role:[
      {
        roleName:"Product Designer", 
        description:
          <>
            When I was at the Generation Innovation work experience program, I
            was placed within a team, and then my team was assigned to
            LibertyIT. My team and I then had to pitch our solution to a problem
            given to us by LibertyIT, to several members of the company. After this
            we had to deliver the same pitch to the other teams on the program.
            This work experience program helped me to become a more <i>confident
            speaker</i>.
          </> 
      }
    ]
  },
  {
    title:"Ulster University",
    dateRange: "Mar 2019", // (17/03/2019 – 20/03/2019)
    logo:{
      src:ulsterUniLogo,
      alt:"Ulster University Logo"
    },
    role:[
      {
        roleName:"Researcher", 
        description:
          <>
            I spent three days at Ulster University, as part of the Sentinus Insight Into
            IT program, and this is where I conducted several experiments on virtual
            laboratories. This work experience program helped me to improve my
            <i>report writing skills</i> and <i>my research skills</i> through researching the
            different experiments which I carried out, such as an experiment on
            Brownian motion, and writing a report on these findings. 
          </> 
      }
    ]
  }
];

export default function Experience() {
  return (
    <>
      <div className="row">
        <h3>
            Experience
        </h3>
      </div>

      {experienceDetails.map((experience:any, key:number) => <ShowInstitution key={key} logo={experience.logo} title={experience.title} dateRange={experience.dateRange} role={experience.role} />)}
    </>
  );
}