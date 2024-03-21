import ShowInstitution from '../../components/ShowInstitution/ShowInstitution';
import '../../layout.css';

import easonLogo from '../../assets/images/easonsLogo.png';
import pwcLogo from '../../assets/images/pwcLogo.png';
import psniLogo from '../../assets/images/psniLogo.png';
import catalystLogo from '../../assets/images/catalystLogo.png';
import ulsterUniLogo from '../../assets/images/ulsterLogo.jfif';
import { Typography } from '@mui/material';

const experienceDetails: Institution[] = [
	{
		title: 'PwC',
		dateRange: 'Sep 2020 - Current',
		logo: {
			src: pwcLogo,
			alt: 'PwC Logo'
		},
		role: [
      // {
      //   roleName: 'Ministry of Defence', // (04/03/2024 -  29/03/2024)
      //   dateRange: 'Mar 2024',
      //   description: (
      //     <>
      //       <p>
      //         While working with the Ministry of Defence, I assisted in developing a new Data & Digital strategy for the
      //         Royal Navy in regards to ship maintenance. Not only did I work with colleagues from PwC but I also worked
      //         directly with PA consulting and V-Ships. My role consisted of gathering advice and feedback from SMEs across
      //         the consortium, and then consolidating this information into a comprehensive report.
      //       </p>
      //     </>
      //   )
      // },
      {
        roleName: 'Bank of England',
        dateRange: 'Jan 2024 - Feb 2024', // (15/01/2024 -  01/03/2024)
        description: (
          <>
            <p>
              During my time with the Bank of England, I concurrently worked on two workstreams. One focused on 
              scrutinising the Bank's cutover plan for the RTGS system, overseeing CHAPS and other payment methods, 
              while the other involved evaluating the configuration of four critical Oracle databases.
            </p>

            <p>
              My responsibilities included compiling weekly status reports for the client, facilitating workshops 
              with the Bank, and reviewing Slaughter and May's report on the failed TSB cutover in 2018 to assess 
              potential risks in the Bank's cutover plan. Additionally, I conducted thorough analyses of Oracle 
              documentation and the Bank's configurations to identify potential risks during the Oracle database 
              review.
            </p>
          </>
        )
      },
			{
				roleName: 'Prototype Development',
				dateRange: 'Jun 2023 - Jul 2023', // (05/06/2023 -  28/07/2023)
				description: (
					<>
						<p>
							I took over a project that facilitated company service registrations and managed payments between
							customers and these companies. However, this project came with no existing documentation. My initial
							responsibility was to <i>generate comprehensive documentation</i> for the current platform. I meticulously
							crafted <i>README</i> files for both frontend and backend components, elevated the clarity of code through{' '}
							<i>enhanced comments</i>, launched a <i>Jsdoc</i> site that encapsulated details of every frontend
							function, and designed an onboarding guide to aid future developers.
						</p>

						<p>
							I engineered a form builder allowing users to integrate various elements, such as text fields, buttons,
							text descriptions, and radio buttons. These elements were presented in a list format, the order of which
							could be dynamically altered using a custom drag-and-drop feature. Additionally, the properties associated
							with each component were made editable, offering a more flexible and user-centric design approach.
						</p>

						<p>
							As a part of this project, I deepened my expertise in <i>React</i>, <i>Flask</i>, and <i>MySQL</i>.
						</p>
					</>
				)
			},
			{
				roleName: 'University College London (UCL)',
				dateRange: 'Aug 2023 - Sept 2023', // (31/07/2023 -  15/09/2023)
				description: (
					<>
						In this project, I worked within the integration team. My role centered on handling user stories related to
						importing and transforming the JSON data, into a relational format, from various DfE endpoints and
						establishing and verifying unique identifiers in an external data repository. To accomplish this, I
						developed <i>Azure functions</i> in <i>C#</i>, interfaced with several endpoints, and managed data in both a{' '}
						<i>Microsoft SQL</i> database and <i>Dataverse</i>.
					</>
				)
			},
			{
				roleName: 'Internal Tool Development',
				dateRange: 'Nov 2022 - Dec 2022', // (21/11/2022 -  30/12/2022)
				description: (
					<>
						<p>
							During my time at tech central, I was on a project to develop an internal asset, which would insert data,
							from an internal data source, directly into a google sheet. This asset took the form of a google workspace
							add on and was developed using Apps Script. I spent most of my time on this project developing a way to
							dynamically make requests to the internal API and manipulating the responses. One other key feature, which
							I also worked on, was the ability to allow the user to preview the response and choose which fields they
							would like to import into their document.
						</p>

						<p>
							I demonstrated that I am able to work within a small team and within an <i>agile framework</i>. On this
							project I gained experience and grew my technical knowledge within <i>Apps Script</i> and <i>REST APIs</i>
							. I also showed that I am able to <i>work under time constraints</i>, as there were last minute changes
							requested.
						</p>
					</>
				)
			},
			{
				roleName: 'Finance Transformation',
				dateRange: 'Sep 2022 - Nov 2022', // (12/09/2022 -  18/11/2022)
				description: (
					<>
						<p>
							On this project I was assigned to a large team that was developing both a new ERP and an EPM system for a
							client. I worked specifically within the EPM side of the project. My role within this project was within
							PMO and test management of three new work streams in relation to planning IFRS4. This allowed me to
							interact directly with the client by sending status reports and by attending meetings with the client.
						</p>

						<p>
							Throughout my time on this project I developed my business acumen within this project and learned new
							skills such as <i>Oracle Planning and management</i>. I developed an appreciation of the importance of{' '}
							<i>testing</i> and gained knowledge within this field. I once again demonstrated my ability to{' '}
							<i>work in a multicultural team</i> by working directly with colleagues from PwC India and PwC Middle
							East.
						</p>
					</>
				)
			},
			{
				roleName: 'Vantiq', // (13/06/2022 -  19/06/2022)
				dateRange: 'Jun 2022 - Aug 2022',
				description: (
					<>
						<p>
							During this placement, I developed two prototype applications, one which monitors temperature and humidity
							sensors and another that acts as a ride management application, for a theme park. These prototypes were
							developed using Vantiq which is an IoT processing platform. The purpose of these prototypes, was to test
							if Vantiq is a viable platform for PwC to use when developing smart venue and smart retail solutions.
						</p>

						<p>
							During the course of developing these prototypes I created several test harnesses which would simulate
							data entering Azure. The first test harness that was created simulated temperature and humidity sensors
							and the second test harness, which was developed, simulated people entering a queue for a ride. These test
							harnesses, are Web Apps that are deployed on Azure and were developed in
							<i>Python</i> and used <i>Flask</i>, the <i>Azure SDK</i>, <i>HTML and CSS</i>.
						</p>

						<p>
							I not only developed and improved on the technical skills listed above, but I also demonstrated my ability
							to
							<i>work autonomously</i>, <i>manage a project</i> and <i>create innovative solutions</i> to real world
							business problems.
						</p>
					</>
				)
			},
			{
				roleName: 'Provident',
				dateRange: 'Jun 2021 - Aug 2021', // (14/06/2021 - 16/08/2021)
				description: (
					<>
						I was placed within the configuration team of a project which consisted of creating an online loan
						application process. Within this project I worked with <i>salesforce</i>, and more specifically{' '}
						<i>salesforce flows</i>, to make changes to the application process, which the client requested. I also
						manage the commercials and onboarding for a large project team (50+ colleagues), spanning two continents
						(PwC UK, CTech Poland and PwC South Africa) which demonstrates that my{' '}
						<i>ability to work within a multicultural team</i>.
					</>
				)
			}
		]
	},
	{
		title: 'Eason',
		dateRange: 'Feb 2020 - Aug 2020',
		logo: {
			src: easonLogo,
			alt: 'Eason Logo'
		},
		role: [
			{
				roleName: 'Sales Assistant',
				description: (
					<>
						My job at Eason’s was heavily communication based. Everyday my role as a sales assistant required me to be
						polite and present myself in a friendly yet professional manner to the customers and my co-workers. This
						allowed me to develop my <i>confident demeanour</i>. Alongside this, working on the tills required cash
						handling which granted me the opportunity to prove I am <i>trustworthy</i> and thorough in all tasks I am
						asked to undertake.
					</>
				)
			}
		]
	},
	{
		title: 'PSNI',
		dateRange: 'Aug 2019', // (29/07/2019 – 23/08/2019)
		logo: {
			src: psniLogo,
			alt: 'PSNI Logo'
		},
		role: [
			{
				roleName: 'Software Engineer',
				description: (
					<>
						At my 4 weeks' work experience with the PSNI, where I was placed within ICS in which I worked on several
						projects which were developing a facial recognition software, researching different handwriting recognition
						software and assisting ICS in finding a cloud storage provider. These projects tested both my{' '}
						<i>problem-solving</i> skills and <i>my logical thinking skills</i>.
					</>
				)
			}
		]
	},
	// {
	// 	title: 'PwC',
	// 	dateRange: 'Jul 2019', // (22/07/2019–26/07/2019)
	// 	logo: {
	// 		src: pwcLogo,
	// 		alt: 'PwC Logo'
	// 	},
	// 	role: [
	// 		{
	// 			roleName: 'Software Engineer',
	// 			description: (
	// 				<>
	// 					This week at PwC taught me how and the <i>importance of sticking to deadlines</i> and how to{' '}
	// 					<i>manage my time effectively</i> to achieve this goal. I also got an insight on the day-to-day operations
	// 					of large organisations and the structure in which these organisations may be built upon.
	// 				</>
	// 			)
	// 		}
	// 	]
	// },
	{
		title: 'Catalyst',
		dateRange: 'Jun 2019', // (17/06/2019 – 20/06/2019)
		logo: {
			src: catalystLogo,
			alt: 'Catalyst Logo'
		},
		role: [
			{
				roleName: 'Product Designer',
				description: (
					<>
						When I was at the Generation Innovation work experience program, I was placed within a team, and then my
						team was assigned to LibertyIT. My team and I then had to pitch our solution to a problem given to us by
						LibertyIT, to several members of the company. After this we had to deliver the same pitch to the other teams
						on the program. This work experience program helped me to become a more <i>confident speaker</i>.
					</>
				)
			}
		]
	},
	{
		title: 'Ulster University',
		dateRange: 'Mar 2019', // (17/03/2019 – 20/03/2019)
		logo: {
			src: ulsterUniLogo,
			alt: 'Ulster University Logo'
		},
		role: [
			{
				roleName: 'Researcher',
				description: (
					<>
						I spent three days at Ulster University, as part of the Sentinus Insight Into IT program, and this is where
						I conducted several experiments on virtual laboratories. This work experience program helped me to improve
						my
						<i>report writing skills</i> and <i>my research skills</i> through researching the different experiments
						which I carried out, such as an experiment on Brownian motion, and writing a report on these findings.
					</>
				)
			}
		]
	}
];

export default function Experience() {
	return (
		<>
			<div className='row'>
				<Typography variant='h2' gutterBottom>
					Experience
				</Typography>
			</div>

			{experienceDetails.map((experience: any, key: number) => (
				<ShowInstitution
					key={key}
					logo={experience.logo}
					title={experience.title}
					dateRange={experience.dateRange}
					role={experience.role}
				/>
			))}
		</>
	);
}
