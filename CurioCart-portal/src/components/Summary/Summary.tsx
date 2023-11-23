import React from "react";

import { Box, Stack, Typography, Divider, Button } from "@mui/material";
import { CartItemsType } from "../../types";
import { addOrder } from "../../services/AddService";
import { toast, ToastContainer } from "react-toastify";
import { useCartItemsContext } from "../../hooks/useCartItemsContext";
import { CartItemReducerAction } from "../../types";

type SummaryProps = {
  cartItemsList: CartItemsType[];
};

const Summary: React.FC<SummaryProps> = ({ cartItemsList }) => {
  const [totalNumberOfTimes, setTotalNumberOfItems] = React.useState(0);
  const { dispatch }: { dispatch: (action: CartItemReducerAction) => void } =
    useCartItemsContext();

  function calculateOrderTotal(cartItemsList: CartItemsType[]) {
    let total = 0;
    for (let i = 0; i < cartItemsList.length; i++) {
      total += cartItemsList[i].itemPrice;
    }
    return total;
  }

  async function handleCheckout() {
    const response = await addOrder(cartItemsList);
    if (response?.status === 200) {
      toast.success(`Order has been made successfully!`, {
        autoClose: 1500,
      });
      dispatch({
        type: "REMOVE_ALL_ITEMS_FROM_CART",
        payload: {
          _id: "",
          itemName: "",
          itemCategory: "",
          itemType: "",
          itemPrice: 0,
          itemSize: "",
          itemDescription: "",
          itemImageUrl: "",
        },
      });
    } else {
      toast.error(`Something went wrong, re-order!`, {
        autoClose: 1500,
      });
    }
  }

  React.useEffect(() => {
    function calculateTotalNumberOfItems() {
      let totalItemCount = 0;

      cartItemsList.forEach((item) => {
        totalItemCount = totalItemCount + item.quantity;
      });

      setTotalNumberOfItems(totalItemCount);
    }

    calculateTotalNumberOfItems();
  }, [cartItemsList]);

  return (
    <Box sx={{ padding: 3, backgroundColor: "#e7e5e4", height: "100%" }}>
      <ToastContainer />
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
              Total number of Items
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "semi-bold" }}>
              {totalNumberOfTimes}
            </Typography>
          </Box>
        </Box>

        {cartItemsList.map((item, index) => (
          <Box
            key={index}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "semi-bold" }}>
                {item.itemName}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2">{`$${Math.round(
                item.quantity * item.itemPrice
              )}`}</Typography>
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
