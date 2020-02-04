import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './pages/Main/themes/light';
import Routes from './routes';

const App = () => (
  <ThemeProvider theme={light}>
    <Routes />
  </ThemeProvider>

);

export default App;
