import React from "react";

import { Box, Grid, Stack, Skeleton } from "@mui/material";

const numberOfPosts = 6;

const Loader: React.FC = () => {
  return (
    <Box sx={{ marginY: "1%", marginX: "2%", overflowX: "hidden" }}>
      <Skeleton variant="rectangular" height={150} width="100%" />
      <Grid container spacing={1} sx={{ marginTop: "1%" }}>
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width="100%" height="100vh" />
        </Grid>
        <Grid item xs={9}>
          <Stack>
            <Box sx={{ marginBottom: 5 }}>
              <Grid container spacing={1}>
                {Array.from({ length: numberOfPosts }, (_, index) => (
                  <Grid item xs={4} key={index}>
                    <Skeleton variant="rectangular" width={285} height={285} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Loader;
