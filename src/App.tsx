import React from 'react';
import {Products} from '@/pages/products/products';
import { ThemeProvider } from '@mui/material';
import { MaterialUiTheme } from './MaterialUiTheme';
import '@/styles/global.scss';




function App() {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      <Products />
    </ThemeProvider>
  );
}

export default App;
