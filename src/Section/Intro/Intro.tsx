import { Link } from '@mui/material';
import './Intro.css';
import '../../layout.css';
import CV from '../../assets/downloads/Adam-Logan-CV.pdf';
import ProfilePic from '../../assets/images/profile_image2.png';

export default function Intro() {
  
  return (
    <div className='row'>
      <div className="half-col">
        <h2>Hello, I'm</h2>

        <h1>Adam Logan</h1>

        <p>You can view my CV <Link href={CV} target="_blank" download>here</Link></p>
      </div>
      
      <div  className="half-col">
        <figure>
          <img id='profile-pic' src={ProfilePic} alt="Profile Picture of Adam Logan" />
        </figure>
      </div>
      
    </div>
  );
}