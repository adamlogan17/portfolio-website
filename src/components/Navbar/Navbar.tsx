import { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from '@mui/material/IconButton';

export default function Navbar({props}:any) {
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  const style = {
    color: props.palette.text.primary
  }
  
  return (
    <>
      <MDBNavbar expand='lg' light style={{ backgroundColor: props.palette.background.default }}>
        <MDBContainer fluid>
          <MDBNavbarBrand style={style} href='#'>Adam Logan's Portfolio</MDBNavbarBrand>
          
          <MDBNavbarToggler
            style={style}
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <IconButton sx={{border: '1px solid black'}} onClick={() => props.toggleMode()} >
            {props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink style={style} href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink style={style} href='#about'>About</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink style={style} href='#'>Projects</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink style={style} href='#'>Experience</MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                <MDBNavbarLink style={style} href='#'>Education</MDBNavbarLink>
              </MDBNavbarItem>
          
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}