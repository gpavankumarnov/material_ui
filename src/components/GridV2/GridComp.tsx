import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

const GridComp = () => {
  return (
    <>
      <Grid container>
      <Typography variant="h4">data</Typography>
      <Grid container  style={{margin: 0, width: '100vw'}}>
        <Grid md={4}>
          <TextField label="username" style={{width:'245px'}} />
        </Grid>
        <Grid md={4}>
          <TextField label="username" style={{width:'245px'}} />
        </Grid>
        <Grid md={4}>
          <TextField label="username" style={{width:'245px'}}/>
        </Grid>
        <Grid md={4}>
          <TextField label="username" style={{width:'245px'}} />
        </Grid>
        <Grid md={4}>
          <TextField label="username"  style={{width:'245px'}}/>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GridComp;
