import { Box, Grid } from "@mui/material";
import SinglePost from "../SinglePost/SinglePost";

const Posts = ({ page }: any) => {
  const numberOfPosts = 6;

  return (
    <Box height="123vh">
      <Grid container spacing={3} height={200}>
        {Array.from({ length: numberOfPosts }, (_, index) => (
          <SinglePost key={index} page={page} />
        ))}
      </Grid>
    </Box>
  );
};

export default Posts;
