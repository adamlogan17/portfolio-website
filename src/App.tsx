import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Intro from './Section/Intro/Intro';
import About from './Section/About/About';
import Projects from './Section/Projects/Projects';
import PageProgress from './components/PageProgress/PageProgress';

// link and button color is set by primary.main
const lightThemePalette = {
  primary: {
    main:'#000000'
  },
  secondary: {
    main: '#313552'
  },
  text: {
    primary:'#000000'
  },
  background: {
    default:'#e3f2fd',
    paper: '#b8c4cc'
  }
}

const darkThemePalette = {
  primary: {
    main: '#368af6'
  },
  text: {
    primary:'#ffffff'
  },
  background: {
    // #1f2235
    // #0a4275
    default:'#1f2235',
    paper: '#313552'
  }
}
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightThemePalette : darkThemePalette),
  }
});

/**
 * @todo maybe use the dark blue colour on mdb footer instead of the original colour scheme
 */
function App() {
  // default dark
  // const [mode, setMode] = useState<'light' | 'dark'>(sessionStorage.getItem("MODE") !== 'light' ? 'dark' : 'light');

  // default light
  const [mode, setMode] = useState<'light' | 'dark'>(sessionStorage.getItem("MODE") !== 'dark' ? 'light' : 'dark');

  const ColorModeContext = createContext({ toggleColorMode: () => {} });
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light'
          sessionStorage.setItem("MODE", newMode);
          return newMode;
        });
      },
    }),
    [],
  );

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={createTheme(theme)}>
          <CssBaseline />
          <div id="wrapper">

            <PageProgress backgroundColor={mode === 'light' ? lightThemePalette.primary.main : darkThemePalette.primary.main} />

            <Navbar props={{toggleMode: colorMode.toggleColorMode, mode:mode, palette: mode === 'light' ? lightThemePalette : darkThemePalette}} />

            <div id='page-wrapper'>
              <div className='section'>
                <Intro />
              </div>

              <div className='section' id='about'>
                <About />
              </div>

              <div className='section' id='projects'>
                <Projects />
              </div>
            </div>

            <Footer props={{toggleMode: colorMode.toggleColorMode, mode:mode, palette: mode === 'light' ? lightThemePalette : darkThemePalette}} />
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App
