import React from "react";

import { Box, Stack, Grid, useMediaQuery } from "@mui/material";

import SinglePost from "../SinglePost/SinglePost";
import { ItemType } from "../../types";

interface PostProps {
  displayedItems: ItemType[];
}

const Posts: React.FC<PostProps> = ({ displayedItems }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ marginBottom: 5 }}>
      {isMobile ? (
        <Stack spacing={2}>
          {displayedItems.map((post) => (
            <SinglePost post={post} />
          ))}
        </Stack>
      ) : (
        <Grid container spacing={2}>
          {displayedItems.map((post, index) => (
            <SinglePost key={index} post={post} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Posts;
