import React from "react";

import { Box, Grid, Stack, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";

import Billboard from "../../components/Billboard/Billboard";
import Filter from "../../components/Filter/Filter";
import Posts from "../../components/Posts/Posts";
import PostPagination from "../../components/Pagination/Pagination";

type Pages = {
  id: number;
  page: string;
  route: string;
};

const Home: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();
  const [page, setPage] = React.useState("");
  const pages: Pages[] = [
    { id: 1, page: "Headphones", route: "/headphones" },
    { id: 2, page: "Watches", route: "/watches" },
  ];

  React.useEffect(() => {
    // Make API call based on route location
    for (let i = 0; i < pages.length; i++) {
      if (location.pathname === pages[i].route) {
        setPage(pages[i].page);
      }
    }
  }, [location]);

  return (
    <Box sx={{ marginY: "1%", marginX: "2%", overflowX: "hidden" }}>
      <Billboard />
      {isMobile ? (
        <Box sx={{ marginTop: "2%" }} gap={2}>
          <Posts page={page} />
          <PostPagination />
        </Box>
      ) : (
        <Grid container spacing={1} sx={{ marginTop: "1%" }}>
          <Grid item xs={3}>
            <Filter />
          </Grid>
          <Grid item xs={9}>
            <Stack>
              <Posts page={page} />
              <PostPagination />
            </Stack>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Home;
