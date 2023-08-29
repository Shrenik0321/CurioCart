import React from "react";

import { Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ marginTop: "auto", borderTop: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          padding: "1%",
        }}
      >
        Footer
      </Box>
    </Box>
  );
};

export default Footer;
