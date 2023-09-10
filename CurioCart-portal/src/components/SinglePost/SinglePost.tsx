import React from "react";

import {
  Box,
  Grid,
  useMediaQuery,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FitScreenOutlinedIcon from "@mui/icons-material/FitScreenOutlined";
import { ItemType } from "../../types";
import PostModal from "../Modal/Modal";

type SinglePostType = {
  post: ItemType;
};

const SinglePost: React.FC<SinglePostType> = ({ post }) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <Grid item xs={4}>
        <Card sx={{ minWidth: isMobile ? 255 : 275 }}>
          <CardActionArea
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CardMedia
              component="img"
              height="250"
              image={post.itemImageUrl}
              alt="Headphone"
            />
            <CardContent>
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                {post.itemName}
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                {post.itemCategory}
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                {`$${post.itemPrice}`}
              </Typography>
              {hovered && (
                <>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "65%",
                      left: "40%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 1,
                      padding: "2%",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon fontSize="small" />
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "65%",
                      left: "60%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 1,
                      padding: "2%",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => setModalOpen(true)}
                  >
                    <FitScreenOutlinedIcon fontSize="small" />
                  </Box>
                </>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <PostModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        post={post}
      />
    </>
  );
};
export default SinglePost;
