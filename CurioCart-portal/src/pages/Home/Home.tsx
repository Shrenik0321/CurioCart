import { Box, Grid } from "@mui/material";
import Billboard from "./Billboard";
import Filter from "./Filter";
import Posts from "./Posts";

const Home = () => {
  return (
    <Box sx={{ marginY: "1%", marginX: "2%" }}>
      <Billboard />
      <Grid container spacing={1} sx={{ marginY: "1%" }}>
        <Grid item xs={4}>
          <Filter />
        </Grid>
        <Grid item xs={8}>
          <Posts />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
