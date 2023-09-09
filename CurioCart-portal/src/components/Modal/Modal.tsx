import React from "react";

import {
  Box,
  Modal,
  Typography,
  useMediaQuery,
  Card,
  CardMedia,
  Divider,
  Button,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import headphone from "../../assets/headphones_c_1.webp";
import { ItemType, CartItemReducerAction } from "../../types";
import { useCartItemsContext } from "../../hooks/useCartItemsContext";

type ModalProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  post: ItemType;
};

const PostModal: React.FunctionComponent<ModalProps> = ({
  modalOpen,
  setModalOpen,
  post,
}) => {
  const handleClose = () => setModalOpen(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const { dispatch }: { dispatch: (action: CartItemReducerAction) => void } =
    useCartItemsContext();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: post });
  };

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 300 : 600,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          py: 4,
          px: 2,
        }}
      >
        <Card sx={{ display: "flex", boxShadow: 0 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={headphone}
              alt="Headphone"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
            }}
            gap={1}
          >
            <Box>
              <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
                {post.itemName}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                {`$${post.itemPrice}`}
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                Size:
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                Color:
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                width: "32%",
                borderRadius: "15px",
                textTransform: "none",
                marginTop: 3,
              }}
              size="small"
              endIcon={<ShoppingCartOutlinedIcon />}
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
};

export default PostModal;
