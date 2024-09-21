import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import FormBuilder from './components/FormBuilder';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormBuilder />
    </ThemeProvider>
  );
};

export default App;
