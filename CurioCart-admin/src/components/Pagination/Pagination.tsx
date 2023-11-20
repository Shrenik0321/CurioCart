import React from "react";

import { Box, Pagination } from "@mui/material";

interface PostPaginationProps {
  onPageChange: (page: number) => void;
  itemTotalCount: number;
  itemsPerPage: number;
}

const PostPagination: React.FC<PostPaginationProps> = ({
  onPageChange,
  itemTotalCount,
  itemsPerPage,
}) => {
  const pageCount = Math.ceil(itemTotalCount / itemsPerPage);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={pageCount}
        variant="outlined"
        shape="rounded"
        size="small"
        onChange={(_event, page) => onPageChange(page)}
      />
    </Box>
  );
};

export default PostPagination;
