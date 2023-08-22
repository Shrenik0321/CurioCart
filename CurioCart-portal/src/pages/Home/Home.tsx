import { Box, Grid, Stack } from "@mui/material";
import Billboard from "./Billboard";
import Filter from "./Filter";
import Posts from "./Posts";
import PostPagination from "../../components/Pagination/Pagination";

const Home = () => {
  return (
    <Box sx={{ marginY: "1%", marginX: "2%" }}>
      <Billboard />
      <Grid container spacing={1} sx={{ marginTop: "1%" }}>
        <Grid item xs={4}>
          <Filter />
        </Grid>
        <Grid item xs={8}>
          <Stack>
            <Posts />
            <PostPagination />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
