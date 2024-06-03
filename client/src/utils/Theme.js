import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0C0C0C', 
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#F2613F',
      contrastText: '#481E14', 
    },
    third: {
        main: '#ffffff',
        contrastText: '#0C0C0C', 
      }
  },
});

export default theme;
