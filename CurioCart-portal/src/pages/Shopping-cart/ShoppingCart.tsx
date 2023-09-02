import React from "react";

import { Box, Typography, Grid, Divider } from "@mui/material";

import CartItem from "../../components/CartItem/CartItem";
import Summary from "../../components/Summary/Summary";

const ShoppingCart: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 6 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={9}>
          <Box sx={{ padding: 3 }}>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Shopping Cart
              </Typography>
            </Box>
            <Divider />
            <CartItem />
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Summary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;
