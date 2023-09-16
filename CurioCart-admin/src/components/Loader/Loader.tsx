import React from "react";

import { Box, CircularProgress, Backdrop } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box sx={{ marginY: "1%", marginX: "2%", overflowX: "hidden" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default Loader;
