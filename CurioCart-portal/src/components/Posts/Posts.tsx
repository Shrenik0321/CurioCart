import React from "react";

import { Box, Stack, Grid, useMediaQuery } from "@mui/material";

import SinglePost from "../SinglePost/SinglePost";

type PostsType = {
  page: string;
};

const Posts: React.FC<PostsType> = ({ page }) => {
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
