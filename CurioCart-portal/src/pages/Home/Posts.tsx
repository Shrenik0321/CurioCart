import { Box, Grid } from "@mui/material";
import SinglePost from "./SinglePost";

const Posts = () => {
  return (
    <Box height="123vh">
      <Grid container spacing={3} height={200}>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </Grid>
    </Box>
  );
};

export default Posts;
