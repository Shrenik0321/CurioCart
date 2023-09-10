import React from "react";

import { Box, Grid, Stack, useMediaQuery } from "@mui/material";

import Billboard from "../../components/Billboard/Billboard";
import Filter from "../../components/Filter/Filter";
import Posts from "../../components/Posts/Posts";
import PostPagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import { useItemContext } from "../../hooks/useItemContext";
import { ItemReducerAction } from "../../types";
import { fetchAllItems } from "../../services/FetchService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { dispatch }: { dispatch: (action: ItemReducerAction) => void } =
    useItemContext();
  const { loading } = useItemContext();

  React.useEffect(() => {
    const fetchAllItemsFunc = async () => {
      const response = await fetchAllItems();
      dispatch({ type: "LOAD_ALL_ITEMS", payload: response });
    };
    fetchAllItemsFunc();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box sx={{ marginY: "1%", marginX: "2%", overflowX: "hidden" }}>
          <ToastContainer />
          <Billboard />
          {isMobile ? (
            <Box sx={{ marginTop: "2%" }} gap={2}>
              <Posts />
              <PostPagination />
            </Box>
          ) : (
            <Grid container spacing={1} sx={{ marginTop: "1%" }}>
              <Grid item xs={3}>
                <Filter />
              </Grid>
              <Grid item xs={9}>
                <Stack>
                  <Posts />
                  <PostPagination />
                </Stack>
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </>
  );
};

export default Home;
