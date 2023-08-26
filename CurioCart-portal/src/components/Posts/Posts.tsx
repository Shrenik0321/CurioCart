import { Box, Stack, Grid, useMediaQuery } from "@mui/material";
import SinglePost from "../SinglePost/SinglePost";

const Posts = ({ page }: any) => {
  const numberOfPosts = 6;
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ marginBottom: 5 }}>
      {isMobile ? (
        <Stack spacing={2}>
          {Array.from({ length: numberOfPosts }, (_, index) => (
            <SinglePost key={index} page={page} />
          ))}
        </Stack>
      ) : (
        <Grid container spacing={3}>
          {Array.from({ length: numberOfPosts }, (_, index) => (
            <SinglePost key={index} page={page} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Posts;
