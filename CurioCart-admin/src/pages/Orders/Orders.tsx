import React from "react";

import { Box, Typography } from "@mui/material";

const Orders: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Orders
        </Typography>
        <Typography variant="body1">All store orders.</Typography>
      </Box>
    </Box>
  );
};

export default Orders;
