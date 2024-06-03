import React from 'react';
import Grid from '@mui/material/Grid';

export default function SectionBreak() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={8} sm={9} md={10} >
        <hr className="section-break" />
      </Grid>
    </Grid>
  );
}
