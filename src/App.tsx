import React from 'react';
import { ThemeProvider } from '@mui/material';
import { MaterialUiTheme } from './MaterialUiTheme';
import '@/styles/global.scss';
import { AddProducts } from './pages/addProducts/addProducts';




function App() {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      <AddProducts />
    </ThemeProvider>
  );
}

export default App;
