import { motion, useCycle } from 'framer-motion';
import { NavButton } from './NavButton';

import './AdvancedNavBar.css';
import { MenuItem } from './MenuItem';
import { Paper } from '@mui/material';

import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from '@mui/material/IconButton';

// Defines the animations for opening and closing the sidebar
const sidebarAnimation = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 160px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2
		}
	}),
	closed: {
		clipPath: 'circle(30px at 160px 40px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40
		}
	}
};

const navItemAnimation = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
};

const itemIds = [
	{
		href: '#about',
		text: 'About'
	},
	{
		href: '#projects',
		text: 'Project'
	}
];

export const AdvancedNavBar = ({ props }: any) => {
	const [isOpen, toggleOpen] = useCycle(false, true);

	return (
		<Paper>
			<motion.div
				// disables the initial animation
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				className='background'
				variants={sidebarAnimation}
				style={{ backgroundColor: 'inherit' }}
			>
				<NavButton color={props.palette.text.primary} toggle={() => toggleOpen()} />

				<motion.ul variants={navItemAnimation} className='nav-list'>
					<IconButton onClick={() => props.toggleMode()}>
						{props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
					</IconButton>
					{itemIds.map((item, key) => (
						<MenuItem text={item.text} href={item.href} key={key} />
					))}
				</motion.ul>
			</motion.div>
		</Paper>
	);
};
