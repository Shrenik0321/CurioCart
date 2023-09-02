import React from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import watches from "../../assets/watch_3.webp";
import CloseIcon from "@mui/icons-material/Close";

const CartItem: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={watches}
          alt="Live from space album cover"
        />
        <CardContent
          sx={{
            width: "100%",
          }}
        >
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={4}>
              <Box>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                >
                  Headhphones
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Chip label="Deletable" />
              <Chip label="Deletable" variant="outlined" />
            </Grid>

            <Grid item xs={4}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                >
                  $99.99
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <CloseIcon />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Divider />
    </>
  );
};

export default CartItem;
