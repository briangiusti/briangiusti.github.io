import * as React from "react";
import Grid from '@mui/material/Grid'; 
import { Typography } from "@material-ui/core";
// import { WelcomeSectionProps } from "./types" { welcomeData }: WelcomeSectionProps

export default function WelcomeSection() {
  return (
    <Grid container spacing={2}>
      <Grid>
        <Typography variant="h1" component="h1">Hi my name is Brian</Typography>
      </Grid>
    </Grid>
  );
}

