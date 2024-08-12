import React from "react";

import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Stocks = () => {
  return (
    <>
      ssssssss
      <Box>
        <Grid container spacing={7}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Stocks;
