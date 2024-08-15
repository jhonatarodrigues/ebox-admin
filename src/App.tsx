import React from 'react';
import { ThemeProvider } from '@mui/material';
import { MaterialUiTheme } from './MaterialUiTheme';
import '@/styles/global.scss';
import Routes from '@/routes';




function App() {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
