import React from "react";

import { Box, Pagination } from "@mui/material";

const PostPagination: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination count={10} variant="outlined" shape="rounded" size="small" />
    </Box>
  );
};

export default PostPagination;
