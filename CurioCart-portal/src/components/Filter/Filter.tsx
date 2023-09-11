import React from "react";

import { Box, Stack, Typography, Button } from "@mui/material";

const Filter: React.FC = () => {
  const buttonStyles = {
    textTransform: "none",
    color: "black",
    borderColor: "gray",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      borderColor: "transparent",
    },
  };

  return (
    <Stack spacing={5}>
      <Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Sizes
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={1}>
          <Box>
            <Button variant="outlined" sx={buttonStyles} size="small">
              Medium
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" sx={buttonStyles} size="small">
              Large
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" sx={buttonStyles} size="small">
              Small
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" sx={buttonStyles} size="small">
              Extra small
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Colors
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={1}>
          <Box>
            <Button variant="outlined" sx={buttonStyles} size="small">
              Blue
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" sx={buttonStyles} size="small">
              White
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" sx={buttonStyles} size="small">
              Red
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" sx={buttonStyles} size="small">
              Black
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Filter;
