import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import headphone from "../../assets/headphones_c_1.webp";
import { CardActionArea } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FitScreenOutlinedIcon from "@mui/icons-material/FitScreenOutlined";
import PostModal from "../../components/Modal/Modal";

const SinglePost = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <Grid item xs={4}>
        {/* <Skeleton variant="rounded" height={180} /> */}
        <Card sx={{ minWidth: 275 }}>
          <CardActionArea
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CardMedia
              component="img"
              height="250"
              image={headphone}
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
