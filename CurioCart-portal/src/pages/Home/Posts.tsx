import { Stack, Grid } from "@mui/material";
import SinglePost from "./SinglePost";

const Posts = () => {
  return (
    <Stack>
      <Grid container spacing={2} height={200}>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </Grid>
    </Stack>
  );
};

export default Posts;
