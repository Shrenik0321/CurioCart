import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <Typography>Copyright © CurioCart 2023.</Typography>
    </Box>
  );
};

export default Footer;
