import React from "react";

import { Box, Stack, Typography, Divider, Button } from "@mui/material";

const Summary = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: "#e7e5e4", height: "100%" }}>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Order Summary
        </Typography>
      </Box>
      <Divider />
      <Stack sx={{ margin: 2 }} spacing={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Number of Items
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "semi-bold" }}>
              1
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Delivery Charge
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "semi-bold" }}>
              $1.00
            </Typography>
          </Box>
        </Box>

        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Order Total
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "semi-bold" }}>
              $99.99
            </Typography>
          </Box>
        </Box>
        <Box sx={{ margin: 2 }}>
          <Button
            sx={{ backgroundColor: "black", width: "100%" }}
            variant="contained"
          >
            Checkout
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Summary;
