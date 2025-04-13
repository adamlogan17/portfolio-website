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
import PageProgress from '../PageProgress/PageProgress';

export default function Navbar(props: {
	palette: any;
	toggleMode: () => void;
	mode: 'light' | 'dark';
	progress?: boolean;
	stick?: boolean;
}) {
	const [showNav, setShowNav] = useState(false);

	const style = {
		color: props.palette.text.primary
	};

	return (
		<div
			style={
				props.stick
					? {
							position: 'fixed',
							top: '0%',
							width: '100%',
							zIndex: '10'
						}
					: {}
			}
		>
			<Paper sx={{ borderRadius: '0px' }}>
				<MDBNavbar expand='lg'>
					<MDBContainer fluid id='page-wrapper'>
						<MDBNavbarBrand style={style}>
							<MDBNavbarLink href='#'>Adam Logan's Portfolio</MDBNavbarLink>
							<IconButton onClick={() => props.toggleMode()}>
								{props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
							</IconButton>
						</MDBNavbarBrand>

						<MDBNavbarToggler style={style} onClick={() => setShowNav(!showNav)}>
							<MDBIcon icon='bars' fas />
						</MDBNavbarToggler>

						<MDBCollapse show={showNav} navbar>
							<MDBNavbarNav className='me-auto mb-2 mb-lg-0' style={{ justifyContent: 'right' }}>
								<MDBNavbarItem>
									<MDBNavbarLink style={style} href='#about' onClick={() => setShowNav(!showNav)}>
										About
									</MDBNavbarLink>
								</MDBNavbarItem>

								<MDBNavbarItem>
									<MDBNavbarLink style={style} href='#projects' onClick={() => setShowNav(!showNav)}>
										Projects
									</MDBNavbarLink>
								</MDBNavbarItem>

								<MDBNavbarItem>
									<MDBNavbarLink style={style} href='#experience' onClick={() => setShowNav(!showNav)}>
										Experience
									</MDBNavbarLink>
								</MDBNavbarItem>

								<MDBNavbarItem>
									<MDBNavbarLink style={style} href='#education' onClick={() => setShowNav(!showNav)}>
										Education
									</MDBNavbarLink>
								</MDBNavbarItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</MDBContainer>
				</MDBNavbar>
			</Paper>
			<div style={{ marginTop: '-5px' }}>
				{props.progress && <PageProgress backgroundColor={props.palette.primary.main} />}
			</div>
		</div>
	);
}
