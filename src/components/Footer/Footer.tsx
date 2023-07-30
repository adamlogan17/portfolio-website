import { Paper } from '@mui/material';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

/**
 * @todo make top of footer have same effect as bottom of navbar
 * @returns 
 */
export default function Footer({props}:any) {
  const style = {
    color: props.palette.text.primary
  }

  // The color is set by MDB and therefore can only be one of the following options
  const BUTTONCOLOR:"primary" | "link" | "white" | "light" | "none" | "secondary" | "success" | "danger" | "warning" | "dark" | "muted" | "info" | "tertiary" | undefined = 'dark';
  
  return (
    <Paper sx={{borderRadius: '0px'}}>
    <MDBFooter className='text-center shadow-5' expand='lg'>
      <MDBContainer className='p-4 pb-0 text-white'>
        <section className='mb-4'>
          <MDBBtn color={BUTTONCOLOR} style={{ backgroundColor: '#dd4b39' }} floating className='m-1' href='mailto:adamlogan42@gmail.com' role='button'>
            <MDBIcon fas icon="envelope" />
          </MDBBtn>

          <MDBBtn color={BUTTONCOLOR} style={{ backgroundColor: '#0082ca' }} floating className='m-1' href='https://www.linkedin.com/in/adamlogan42' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn color={BUTTONCOLOR} style={{ backgroundColor: '#333333' }} floating className='m-1' href='https://github.com/adamlogan17' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>

          <MDBBtn color={BUTTONCOLOR} style={{ backgroundColor: '#00A4EF' }} floating className='m-1' href='https://learn.microsoft.com/en-gb/users/adamlogan42' role='button'>
            <MDBIcon fab icon="microsoft" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <span style={style}>© 2023 Copyright:</span>
        <a style={style} href='/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </Paper>
  );
}