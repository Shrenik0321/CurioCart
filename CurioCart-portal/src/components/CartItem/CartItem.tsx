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
import CloseIcon from "@mui/icons-material/Close";
import { CartItemsType } from "../../types";
import { useCartItemsContext } from "../../hooks/useCartItemsContext";
import { CartItemReducerAction } from "../../types";

interface CartItemComponentProps {
  cartItem: CartItemsType;
}

const CartItem: React.FC<CartItemComponentProps> = ({ cartItem }) => {
  const { dispatch }: { dispatch: (action: CartItemReducerAction) => void } =
    useCartItemsContext();

  const handleClickClose = (cartItem: CartItemsType) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: cartItem });
  };

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
          image={cartItem.itemImageUrl}
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
                  {cartItem.itemName}
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
                  {`${cartItem.itemPrice}`}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <CloseIcon onClick={() => handleClickClose(cartItem)} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Divider />
    </>
  );
};

export default CartItem;
