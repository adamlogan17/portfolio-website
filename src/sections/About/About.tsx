import { Paper, Typography } from '@mui/material';
import CurrentTechSkills from '../../assets/images/currentTechSkills.png';
import '../../layout.css';

import DownloadList from '../../components/DownloadList/DownloadList';

import Vantiq from '../../assets/images/vantiqSquareLogo.jpeg';
import Microsoft from '../../assets/images/microsoftLogo.png';
import PwC from '../../assets/images/pwcLogo.png';
import DofEd from '../../assets/images/dofeLogo.svg';
import QUB from '../../assets/images/qubLogo.jpg';
import Alteryx from '../../assets/images/alteryxLogo.png';
import CCEA from '../../assets/images/cceaLogo.png';
import AWS from '../../assets/images/awsLogo.png';

import CivicaAward from '../../assets/downloads/Qualifications/Civica-Award.pdf';
import AI900 from '../../assets/downloads/Qualifications/Microsoft-AI-Fundamentals-Certificate.pdf';
import AZ900 from '../../assets/downloads/Qualifications/Microsoft-Azure-Fundamentals-Certificate.pdf';
import SC900 from '../../assets/downloads/Qualifications/Microsoft-Security-Fundamentals-Certificate.pdf';
import DP900 from '../../assets/downloads/Qualifications/Microsoft-Data-Fundamentals-Certificate.pdf';
import AlteryxCert from '../../assets/downloads/Qualifications/Alteryx-Designer-Core-Certification.pdf';
import DofEdCert from '../../assets/downloads/Qualifications/DofEd.pdf';
import UBELT from '../../assets/downloads/Qualifications/GCSE/CCEA/UBELT/UBELT.pdf';
import VantiqCert from '../../assets/downloads/Qualifications/VANTIQ-Developer-Level-1.pdf';

import CustomImage from '../../components/CustomImage/CustomImage';

const microsoftAvatar: Image = {
	src: Microsoft,
	alt: 'Microsoft Logo',
	background: 'white',
	imageStyle: {
		width: '75%',
		height: '75%'
	}
};

const awsLogo: Image = {
  src: AWS,
  alt: 'AWS Logo'
};

const qualifications: DownloadItem[] = [
	{
		name: 'Civica Award',
		description: 'Awarded by achieving highest in the year in the module CSC2058 Systems Development',
		download: CivicaAward,
		avatar: {
			src: QUB,
			alt: "Queen's University Belfast Logo"
		}
	},
	{
		name: 'AWS Cloud Practitioner',
		download: 'https://www.credly.com/badges/37c52349-f1e9-4cd1-985e-4886d5aab234/public_url',
		avatar: awsLogo
	},
  {
		name: 'AWS Certified AI Practitioner',
		download: 'https://www.credly.com/badges/ca0e8cd0-3942-4137-8647-f4c1f86a52c4/public_url',
		avatar: awsLogo
	},
	{
		name: 'Microsoft AI Fundamentals (AI-900)',
		download: AI900,
		avatar: microsoftAvatar
	},
	{
		name: 'Microsoft Security Fundamentals (SC-900)',
		download: SC900,
		avatar: microsoftAvatar
	},
	{
		name: 'Microsoft Azure Fundamentals (AZ-900)',
		download: AZ900,
		avatar: microsoftAvatar
	},
	{
		name: 'Microsoft Data Fundamentals (DP-900)',
		download: DP900,
		avatar: microsoftAvatar
	},
	{
		name: 'Vantiq Developer (Level 1)',
		download: VantiqCert,
		avatar: {
			src: Vantiq,
			alt: 'Vantiq Logo'
		}
	},
	{
		name: 'Alteryx Designer Core',
		download: AlteryxCert,
		avatar: {
			src: Alteryx,
			background: 'white',
			alt: 'Alteryx Logo'
		}
	},
	{
		name: 'PwC Digital Acumen Badge',
		download: 'https://www.credly.com/badges/93896f07-7099-4864-9797-c01c6b92bb9c/public_url',
		avatar: {
			src: PwC,
			alt: 'PwC Logo'
		}
	},
	{
		name: 'Understanding Business, Language and Tourism (Level 2)',
		download: UBELT,
		avatar: {
			src: CCEA,
			background: 'white',
			imageStyle: { objectFit: 'contain' },
			alt: 'CCEA Logo'
		}
	},
	{
		name: 'Bronze Duke of Edinburgh Award',
		download: DofEdCert,
		avatar: {
			src: DofEd,
			alt: 'Duke Of Edinburgh Award Logo',
			background: 'white',
			imageStyle: { objectFit: 'contain' }
		}
	}
];

export default function About() {
	return (
		<Paper
			className='row'
			sx={{
				borderRadius: '50px',
				padding: '10px',
				paddingTop: '25px',
				paddingBottom: '25px'
			}}
		>
			<Typography variant='h2'>About Me</Typography>

			<Typography variant='h4'>A little bit about me</Typography>

			<br />
			<br />

			<p>
				I am currently a Software Engineer within the Machine Learning Engineering team at EverQuote. Previously, I was
				apart of the flying start technology degree programme, as a technology consultant at PwC studying Software
				Engineering at Queen's University Belfast.
			</p>

			<p>
				I'm a dedicated software engineer, passionate about technical innovation and collaborative teamwork. My
				experience spans diverse domains such as machine learning, IoT, and finance transformation, and I possess
				hands-on expertise in tools such as React, Python, and Java. I've consistently demonstrated my ability to work
				in multicultural environments, manage my time effectively, and approach challenges with innovative solutions.
				Throughout my career, I've navigated projects of all scales, from individual initiatives to expansive team
				collaborations. My commitment to continuous learning and best practices in software development is rooted both
				in a solid academic foundation and real-world experience.
			</p>

			<p>
				Additionally, I take pride in being an active member of the tech community, regularly attending talks and
				participating in hackathons. Notably, I have attended conferences such as the AWS cloud day and NIDC. These
				events have allowed me to network with industry professionals and engage with topics which are not covered
				within my day-to-day work.
			</p>

      <p>
        I also volunteer at Acorn Primary School through the Time to Code programme, where I teach P7 students how to 
        use Scratch, helping them build foundational programming skills. This experience has strengthened my ability to 
        communicate technical concepts clearly to non-technical audiences and reflects my enthusiasm for making technology 
        more accessible.
      </p>

			<Typography variant='h4'>Technical Skills</Typography>

			<CustomImage src={CurrentTechSkills} alt='Tech Skills Logos' boxShadow={false} width='70%' />

			<Typography variant='h4'>Qualifications</Typography>

			<DownloadList items={qualifications} />
		</Paper>
	);
}
