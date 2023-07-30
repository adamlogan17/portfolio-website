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
import { Paper } from '@mui/material';

import '../../layout.css';

export default function Navbar({props}:any) {
  const [showNav, setshowNav] = useState(false);

  const style = {
    color: props.palette.text.primary
  }
  
  return (
    <Paper sx={{borderRadius: '0px'}}>
      <MDBNavbar expand='lg'>
        <MDBContainer fluid id='page-wrapper'>
          <MDBNavbarBrand style={style} href='#'>
            <span>Adam Logan's Portfolio</span>
            <IconButton onClick={() => props.toggleMode()} >
              {props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </MDBNavbarBrand>
          
          <MDBNavbarToggler style={style} onClick={() => setshowNav(!showNav)}>
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          

          <MDBCollapse show={showNav} navbar >
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0' style={{justifyContent:'right'}}>
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
    </Paper>
  );
}