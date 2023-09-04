import React from "react";

import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Page Not Found!
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to Home Page
      </Button>
    </Box>
  );
};

export default PageNotFound;
