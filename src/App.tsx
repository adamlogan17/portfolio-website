import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const lightThemePalette = {
  primary: {
    main:'#000000'
  }, 
  text: {
    primary:'#000000'
  },
  background: {
    default:'#e3f2fd'
  }
}

const darkThemePalette = {
    primary: {
      main: '#0a4275'
    },
    text: {
      primary:'#ffffff'
    },
    background: {
      default:'#0a4275'
    }
}
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightThemePalette : darkThemePalette),
  },
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
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={createTheme(theme)} >
          <CssBaseline />

          <Navbar props={{toggleMode: colorMode.toggleColorMode, mode:mode, palette: mode === 'light' ? lightThemePalette : darkThemePalette}} />
          <h1>Hello!</h1>
          <Footer props={{toggleMode: colorMode.toggleColorMode, mode:mode, palette: mode === 'light' ? lightThemePalette : darkThemePalette}} />
        </ThemeProvider>
      </ColorModeContext.Provider>
      
    </>
  )
}

export default App