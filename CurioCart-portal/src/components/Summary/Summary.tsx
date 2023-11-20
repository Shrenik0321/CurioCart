import React from "react";

import { Box, Stack, Typography, Divider, Button } from "@mui/material";
import { CartItemsType } from "../../types";

type SummaryProps = {
  cartItemsList: CartItemsType[];
};

const Summary: React.FC<SummaryProps> = ({ cartItemsList }) => {
  function calculateOrderTotal(cartItemsList: CartItemsType[]) {
    let total = 0;
    for (let i = 0; i < cartItemsList.length; i++) {
      total += cartItemsList[i].itemPrice;
    }
    return total;
  }

  function handleCheckout() {
    console.log(cartItemsList);
  }

  return (
    <Box sx={{ padding: 3, backgroundColor: "#e7e5e4", height: "100%" }}>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Order Summary
        </Typography>
      </Box>
      <Divider />
      <Stack sx={{ margin: 2 }} spacing={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Number of Items
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "semi-bold" }}>
              {cartItemsList.length}
            </Typography>
          </Box>
        </Box>

        {cartItemsList.map((item) => (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "semi-bold" }}>
                {item.itemName}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2">{`$${item.itemPrice}`}</Typography>
            </Box>
          </Box>
        ))}

        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Order Total
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "semi-bold" }}>
              {`$${calculateOrderTotal(cartItemsList)}`}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ margin: 2 }}>
          <Button
            sx={{ backgroundColor: "black", width: "100%" }}
            variant="contained"
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Summary;
