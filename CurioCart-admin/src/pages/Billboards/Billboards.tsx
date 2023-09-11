import React from "react";
import { Box, Typography } from "@mui/material";

const Billboards: React.FC = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Billboards
      </Typography>
      <Typography variant="body1">All store billboards.</Typography>
    </Box>
  );
};

export default Billboards;
