import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import themes from './themes';

const userTheme = Boolean(localStorage.getItem('theme')) ? localStorage.getItem('theme') : 'lightBlue';

const App = () => (
  <ThemeProvider theme={themes[themes.findIndex(theme => theme.title === userTheme)]}>
    <Routes />
  </ThemeProvider>

);

export default App;
