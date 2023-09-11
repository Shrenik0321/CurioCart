import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
const AddItem: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Add Item
        </Typography>
        <Typography variant="body1">Add new items to your store.</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Images
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#cbd5e1",
              color: "black",
              borderColor: "transparent",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#cbd5e1",
                color: "black",
                borderColor: "transparent",
              },
            }}
          >
            Upload Item Image
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Name
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Name"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Price
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Price"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Category
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Category"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Size
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Size"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Color
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Color"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Type
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Type"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Description
          </Typography>
          <TextField
            multiline
            id="outlined-basic"
            placeholder="Description"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Box sx={{ my: 2 }}>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "black",
            color: "white",
            borderColor: "transparent",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
              borderColor: "transparent",
            },
          }}
        >
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default AddItem;
