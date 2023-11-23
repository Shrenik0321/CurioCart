import React from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
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
  const [itemQuantity, setItemQuantity] = React.useState(1);
  const { dispatch }: { dispatch: (action: CartItemReducerAction) => void } =
    useCartItemsContext();

  const handleClickClose = (cartItem: CartItemsType) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: cartItem });
  };

  const handleQuantityChange = (e: any) => {
    const intQuantity = Number(e.target.value);
    if (isNaN(intQuantity)) {
      setItemQuantity(1);
    } else {
      setItemQuantity(intQuantity);
      dispatch({
        type: "UPDATE_ITEM_QUANTITY_IN_CART",
        payload: cartItem,
        quantity: intQuantity,
      });
    }
  };

  React.useEffect(() => {
    setItemQuantity(cartItem.quantity);
  }, [cartItem]);

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
            <Grid item xs={3}>
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
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                >
                  {`$${cartItem.itemPrice}`}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ paddingY: 1 }}>
                  <Typography
                    component="div"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    Quantity
                  </Typography>
                </Box>
                <TextField
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  value={itemQuantity}
                  onChange={handleQuantityChange}
                />
              </Box>
            </Grid>

            <Grid item xs={3}>
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
