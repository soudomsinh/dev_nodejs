import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Navbar() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} >
            <a href="./app" style={{textDecoration:"none"}} >Allianz Insurance Laos</a>

            
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="./app"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#product"
              sx={{ my: 1, mx: 1.5 }}
            >
              Product
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="./dashboard"
              sx={{ my: 1, mx: 1.5 }}
            >
              Customer Service
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#pricing"
              sx={{ my: 1, mx: 1.5 }}
            >
              Pricing
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#contact"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact Us
            </Link>
          </nav>
          <Button href="./login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>   
    </ThemeProvider>
  );
}