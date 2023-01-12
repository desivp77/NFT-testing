import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logo from "../Logo.jsx";
import MenuButtons from "../MenuButtons.jsx";
import SearchBar from "../SearchBar.jsx";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from "@mui/material/Container";
import classNames from "classnames"; 
import styles from "./Example.module.scss";
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import styles from "./Header.scss";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'none',
          boxShadow: 'none',
          paddingLeft: '20px',
          paddingRight: '20px',
          textDecoration: 'none',
          color: 'white'
        },
      },
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#181828',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Header() {
  return (
    <div className={classNames(styles.wrapper)}>
      <ThemeProvider theme={theme}>
      <Container className={classNames(styles.container)} maxWidth="xl"> 
    {/* 
     <Box sx={{ flexGrow: 1 }}> */}
      {/* <AppBar position="static"> */}

        {/* <Toolbar maxwidth="sm"> */}
        <Grid container spacing={1}>
        <Grid item xs={2}>
          <Item><Logo/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><SearchBar/></Item>
        </Grid>
        <Grid item xs>
          <Item><MenuButtons/></Item>
        </Grid>
      </Grid>
        {/* </Toolbar>
   
      </AppBar> */}

    </Container> 
    </ThemeProvider>
    {/* </Box>
*/}
</div>
  );
}

