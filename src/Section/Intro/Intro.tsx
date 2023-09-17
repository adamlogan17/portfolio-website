import { Link, Typography } from '@mui/material';
import '../../layout.css';

import CV from '../../assets/downloads/Adam-Logan-CV.pdf';
import ProfilePic from '../../assets/images/profile_image2.png';
import CustomImage from '../../components/CustomImage/CustomImage';

export default function Intro() {
  
  return (
    <div className='row'>
      <div className="half-col">
        <Typography variant='h2'>
          Hello, I'm
        </Typography>

        <Typography variant='h1'>
          Adam Logan
        </Typography>

        <p>You can view my CV <Link href={CV} target="_blank" download>here</Link></p>
      </div>
      
      <div  className="half-col">
        <CustomImage src={ProfilePic} alt="Profile Picture of Adam Logan" />
      </div>
      
    </div>
  );
}