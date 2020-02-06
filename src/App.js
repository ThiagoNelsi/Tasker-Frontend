import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import themes from './themes';

function App() {

  const [currentTheme, setCurrentTheme] = useState(Boolean(localStorage.getItem('theme')) ? localStorage.getItem('theme') : 'lightBlue')

  const changeTheme = (theme) => {
    localStorage.setItem('theme', theme);
    setCurrentTheme(theme);
  }

  return (
    <ThemeProvider theme={themes[themes.findIndex(theme => theme.title === currentTheme)]}>
      <Routes changeTheme={changeTheme} />
    </ThemeProvider>
  )

};

export default App;
