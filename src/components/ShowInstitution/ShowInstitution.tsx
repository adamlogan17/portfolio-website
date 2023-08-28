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
        <h3>{props.title}</h3>

        <i>{props.dateRange}</i>

        <br />
        <br />
        <CustomImage  src={props.logo.src} alt={''} width='100px' resizeOnSmallScreen={false} />
      </div>

      <div className="half-col">
        <h4>
          {props.description?.roleName}
        </h4>
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
              <h4>
                {props.role[0].roleName}
              </h4>
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