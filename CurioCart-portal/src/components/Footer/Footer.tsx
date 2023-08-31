import React from "react";

import { Box, Typography } from "@mui/material";

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
        <Typography
          sx={{ fontSize: "12px", fontWeight: "bold", color: "#334155" }}
        >
          CurioCart Inc. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
