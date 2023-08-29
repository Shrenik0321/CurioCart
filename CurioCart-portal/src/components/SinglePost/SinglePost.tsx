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

import headphone from "../../assets/headphones_c_1.webp";
import watches from "../../assets/watch_3.webp";
import PostModal from "../Modal/Modal";

type SinglePostType = {
  page: string;
};

const SinglePost: React.FC<SinglePostType> = ({ page }) => {
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
              image={page === "Headphones" ? headphone : watches}
              alt="Headphone"
            />
            <CardContent>
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Headphone
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="text.secondary">
                Technology
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                $99.99
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
      <PostModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};
export default SinglePost;
