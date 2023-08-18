import React from "react";
import { Grid, Paper } from "@mui/material";
import LeftPanel from "../components/LeftPanel";

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      {/* Second Component */}
      <Grid item xs={12} sm={6}>
        <Paper
          style={{ height: "100px", textAlign: "center", padding: "10px" }}
        >
          <LeftPanel />
        </Paper>
      </Grid>

      {/* First Component */}
      <Grid item xs={12} sm={6}>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Paper style={{ flex: 1, textAlign: "center", padding: "10px" }}>
            Component 1
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
