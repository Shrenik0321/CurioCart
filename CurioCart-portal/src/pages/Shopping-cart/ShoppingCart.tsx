import React from "react";

import { Box, Typography, Grid, Divider } from "@mui/material";

import CartItem from "../../components/CartItem/CartItem";
import Summary from "../../components/Summary/Summary";
import { useCartItemsContext } from "../../hooks/useCartItemsContext";
import { CartItemsType } from "../../types";
import { CartStateType } from "../../context/CartItemsContext";

const ShoppingCart: React.FC = () => {
  const { cartItems }: CartStateType = useCartItemsContext();
  const [cartItemsList, setCartItemsList] = React.useState<CartItemsType[]>([]);

  React.useEffect(() => {
    setCartItemsList(cartItems);
  }, [cartItems]);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 6 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={9}>
          <Box sx={{ padding: 3 }}>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Shopping Cart
              </Typography>
            </Box>
            <Divider />
            {cartItemsList.map((value) => (
              <CartItem cartItem={value} />
            ))}
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Summary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;
