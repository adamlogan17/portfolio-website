import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

/**
 * @todo make buttons, change colour depending on light mode or dark mode
 * @todo make top of footer have same effect as bottom of navbar
 * @returns 
 */
export default function Footer({props}:any) {
  const style = {
    color: props.palette.text.primary
  }

  const BUTTONCOLOR:string = 'dark';
  
  return (
    <MDBFooter className='text-center' expand='lg' light style={{ backgroundColor: props.palette.background.default }}>
      <MDBContainer className='p-4 pb-0 text-white'>
        <section className='mb-4'>

          <MDBBtn color={BUTTONCOLOR} style={{ backgroundColor: '#dd4b39' }} floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn color={BUTTONCOLOR} style={{ backgroundColor: '#0082ca' }} floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn color={BUTTONCOLOR} style={{ backgroundColor: '#333333' }} floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
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
  );
}