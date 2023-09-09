import React from "react";

import { Box, Stack, Grid, useMediaQuery } from "@mui/material";

import SinglePost from "../SinglePost/SinglePost";
import { useItemContext } from "../../hooks/useItemContext";
import { ItemType } from "../../types";
import { ItemStateType } from "../../context/ItemContext";

const Posts: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [item, setItem] = React.useState<ItemType[]>([]);
  const { items }: ItemStateType = useItemContext();

  React.useEffect(() => {
    setItem(items);
  }, [items]);

  return (
    <Box sx={{ marginBottom: 5 }}>
      {isMobile ? (
        <Stack spacing={2}>
          {item.map((post) => (
            <SinglePost post={post} />
          ))}
        </Stack>
      ) : (
        <Grid container spacing={3}>
          {item.map((post, index) => (
            <SinglePost key={index} post={post} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Posts;
