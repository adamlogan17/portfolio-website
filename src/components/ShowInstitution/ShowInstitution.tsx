import '../../layout.css';
import CustomImage from '../CustomImage/CustomImage';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ShowInstitution(props:Institution) {
  return (
    <div className="row">
      <div className="half-col">
        <Typography variant='h3' gutterBottom>
          {props.title}
        </Typography>

        <i>{props.dateRange}</i>

        <br />
        <br />
        <CustomImage  src={props.logo.src} alt={''} width='100px' resizeOnSmallScreen={false} />
      </div>

      <div className="half-col">
        <Typography variant='h4' gutterBottom>
          {props.description?.roleName}
        </Typography>
        <p>
          {props.description?.description}                                 
        </p>
        {
          props.role.length > 1 ? 
          (
            props.role.map((role:any, key:number) => 
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{ width: '33%', flexShrink: 0, textAlign:'left' }}><strong>{role.roleName}</strong></Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{role.dateRange}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {role.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>)
          ) 
          :
          (
            <>
              <Typography variant='h4' gutterBottom>
                {props.role[0].roleName}
              </Typography>
              <p>
                {props.role[0].description}                                 
              </p>
            </>
          )
        }
      </div>
    </div>
  );
}