import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};
