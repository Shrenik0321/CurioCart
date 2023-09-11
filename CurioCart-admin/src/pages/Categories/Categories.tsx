import React from "react";
import { Box, Typography } from "@mui/material";

const Categories: React.FC = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Categories
      </Typography>
      <Typography variant="body1">All item categories</Typography>
    </Box>
  );
};

export default Categories;
