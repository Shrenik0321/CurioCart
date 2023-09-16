import React from "react";

import { Box, Pagination } from "@mui/material";

interface PostPaginationProps {
  onPageChange: (page: number) => void;
  itemTotalCount: number;
}

const PostPagination: React.FC<PostPaginationProps> = ({
  onPageChange,
  itemTotalCount,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={itemTotalCount}
        variant="outlined"
        shape="rounded"
        size="small"
        onChange={(_event, page) => onPageChange(page)}
      />
    </Box>
  );
};

export default PostPagination;
