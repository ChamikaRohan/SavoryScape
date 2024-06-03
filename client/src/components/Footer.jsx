import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Theme from '../utils/Theme';
import { Paper, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <ThemeProvider theme={Theme}>
      <Paper elevation={4} sx={{ backgroundColor: Theme.palette.primary.main, minHeight: "200px", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography variant='body1' sx={{ fontFamily: "Poppins Regular", color: Theme.palette.third.main, textAlign: "center", mb: 2 }}>
            We're passionate about sharing delicious recipes from around the world. Our mission is to inspire home cooks to explore new cuisines and create memorable meals for their families and friends.
          </Typography>
          <Typography variant='body1' sx={{ fontFamily: "Poppins Thin", color: Theme.palette.third.main, textAlign: "center", mb: 2 }}>
            savoryscape@example.com
          </Typography>
          <Typography variant='body1' sx={{ fontFamily: "Poppins Thin", color: Theme.palette.third.main, textAlign: "center", mb: 2 }}>
            +94 7168686110 | +94 718902356
          </Typography>
          <div style={{ marginTop: "20px" }}>
            <IconButton size="small" sx={{ color: Theme.palette.third.main }}>
              <Facebook />
            </IconButton>
            <IconButton size="small" sx={{ color: Theme.palette.third.main }}>
              <Twitter />
            </IconButton>
            <IconButton size="small" sx={{ color: Theme.palette.third.main }}>
              <Instagram />
            </IconButton>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
