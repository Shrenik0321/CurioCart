import { Box, Pagination } from "@mui/material";

const PostPagination = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Box>
  );
};

export default PostPagination;
