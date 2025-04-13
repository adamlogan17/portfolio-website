import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { useMemo, useState } from 'react';

import './App.css';

import Footer from './components/Footer/Footer';
import Intro from './sections/Intro/Intro';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Experience from './sections/Experience/Experience';
import Education from './sections/Education/Education';
import { BackgroundGradientDemo } from './sections/Sandbox/Sandbox';

// link and button color is set by primary.main
// it is also important to note that the only 'offical' attributes of 'text' are primary, secondary and disabled, the other attributes are custom and are used in the typography section, in getDesignTokens
const lightThemePalette = {
	primary: {
		main: '#000000'
	},
	secondary: {
		main: '#313552'
	},
	text: {
		primary: '#000000'
	},
	background: {
		default: '#e3f2fd',
		paper: '#b8c4cc'
	}
};

const darkThemePalette = {
	primary: {
		main: '#368af6'
	},
	text: {
		primary: '#ffffff',
		h2: '#368af6'
	},
	background: {
		// #1f2235
		// #0a4275
		default: '#1f2235',
		paper: '#313552'
	}
};

// Potential light theme
// 379683
// const lightThemePalette = {
//   primary: {
//     main: '#05386B'
//   },
//   secondary: {
//     main: '#14A098'
//   },
//   text: {
//     primary:'#EDF5E1'
//   },
//   background: {
//     default:'#5CDB95',
//     paper: '#379683'
//   }
// };

// Potential dark theme
// 501F3A
// const darkThemePalette = {
//   primary: {
//     main: '#CB2D6F'
//   },
//   secondary: {
//     main: '#14A098'
//   },
//   text: {
//     primary:'#CCCCCC'
//   },
//   background: {
//     default:'#0F292F',
//     paper: '#0F292F'
//   }
// };

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light' ? lightThemePalette : darkThemePalette)
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: (themeParam: any) => `
        h1 {
          color: ${themeParam.palette.text.h1};
        },
        h2 {
          color: ${themeParam.palette.primary.main};
        },
        h4 {
          color: ${themeParam.palette.text.h4};
        },
      `
		}
	},
	typography: {
		h1: {
			fontWeight: 500,
			fontSize: '2.5rem'
		},
		h2: {
			fontWeight: 3500,
			fontSize: '2rem'
		},
		h3: {
			fontWeight: 500,
			fontSize: '1.75rem'
		},
		h4: {
			fontSize: '2rem'
		}
	}
});

function App() {
	// default dark
	const [mode, setMode] = useState<'light' | 'dark'>(sessionStorage.getItem('MODE') !== 'light' ? 'dark' : 'light');

	// default light
	// const [mode, setMode] = useState<'light' | 'dark'>(sessionStorage.getItem("MODE") !== 'dark' ? 'light' : 'dark');

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => {
					const newMode = prevMode === 'light' ? 'dark' : 'light';
					sessionStorage.setItem('MODE', newMode);
					return newMode;
				});
			}
		}),
		[]
	);

	return (
		<ThemeProvider theme={createTheme(theme)}>
			<CssBaseline />

			<div id='wrapper'>
				<Navbar
					stick={true}
					progress={true}
					toggleMode={() => colorMode.toggleColorMode()}
					mode={mode}
					palette={mode === 'light' ? lightThemePalette : darkThemePalette}
				/>

				<div id='page-wrapper'>
					<div className='section'>
						<Intro />

						<BackgroundGradientDemo />
					</div>

					<div className='section' id='about'>
						<About />
					</div>

					<div className='section' id='projects'>
						<Projects />
					</div>

					<div className='section' id='experience'>
						<Experience />
					</div>

					<div className='section' id='education'>
						<Education />
					</div>
				</div>

				<Footer stick={false} palette={mode === 'light' ? lightThemePalette : darkThemePalette} />
			</div>
		</ThemeProvider>
	);
}

export default App;
