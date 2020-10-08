import React from "react";
import "./Men.css";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";

import MenCompo from "../components/MenCompo";

function Men() {
  return (
    <div className="men">
      <Navbar />
      <div className="men__body">
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <MenCompo />
          </Grid>
          <Grid item xs={3}>
            <MenCompo />
          </Grid>
          <Grid item xs={3}>
            <MenCompo />
          </Grid>
          <Grid item xs={3}>
            <MenCompo />
          </Grid>
          <Grid item xs={3}>
            <MenCompo />
          </Grid>
          <Grid item xs={3}>
            <MenCompo />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Men;
