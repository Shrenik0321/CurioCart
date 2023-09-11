import React from "react";

import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const Overview: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Overview
        </Typography>
        <Typography variant="body1">Overview of your store.</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Total Revenue
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                $99.99
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Sales
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                +2
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Products in Stock
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                6
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
