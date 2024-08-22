import React from 'react';
import { ThemeProvider } from '@mui/material';
import { MaterialUiTheme } from './MaterialUiTheme';
import '@/styles/global.scss';
import Routes from '@/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      <Routes/>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
