import React from "react";

import Banner from "./Banner";
import Category from "./Category";
import Post from "./Post";
import { Box, Grid } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Box style={{ marginTop: 85, marginLeft: 0, marginRight: 0 }}>
        {/* by default size will be 64 but we have increase padding so we can use 100 here to show content behing and it and in material ui navbar will always be fixed */}
        <Banner />
      </Box>
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Category />
        </Grid>
        <Grid container item lg={10} xs={12} sm={10}>
          <Post />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
