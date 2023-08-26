import { useState, useEffect } from "react";
import { Box, Grid, Stack } from "@mui/material";
import Billboard from "../../components/Billboard/Billboard";
import Filter from "../../components/Filter/Filter";
import Posts from "../../components/Posts/Posts";
import PostPagination from "../../components/Pagination/Pagination";
import { useLocation } from "react-router-dom";

type Pages = {
  id: number;
  page: string;
  route: string;
};

const Home = () => {
  const location = useLocation();
  const [page, setPage] = useState("");
  const pages: Pages[] = [
    { id: 1, page: "Headphones", route: "/headphones" },
    { id: 2, page: "Watches", route: "/watches" },
  ];

  useEffect(() => {
    // Make API call based on route location
    for (let i = 0; i < pages.length; i++) {
      if (location.pathname === pages[i].route) {
        setPage(pages[i].page);
      }
    }
  }, [location]);

  return (
    <Box sx={{ marginY: "1%", marginX: "2%" }}>
      <Billboard />
      <Grid container spacing={1} sx={{ marginTop: "1%" }}>
        <Grid item xs={4}>
          <Filter />
        </Grid>
        <Grid item xs={8}>
          <Stack>
            <Posts page={page} />
            <PostPagination />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
