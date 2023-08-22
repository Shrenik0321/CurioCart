import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import headphone from "../../assets/headphones_c_1.webp";
import { CardActionArea } from "@mui/material";

const SinglePost = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
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
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default SinglePost;
