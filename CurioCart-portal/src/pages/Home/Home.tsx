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
  const [activePage, setActivePage] = React.useState(1);
  const [itemData, setItemData] = React.useState([]);
  const [itemTotalCount, setItemTotalCount] = React.useState(0);
  const [displayedItems, setDisplayedItems] = React.useState([]);
  const isMobile = useMediaQuery("(max-width:600px)");
  const { dispatch }: { dispatch: (action: ItemReducerAction) => void } =
    useItemContext();
  const { loading } = useItemContext();
  const itemsPerPage: number = 6;

  const fetchAllItemsFunc = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: [],
      loading: true,
    });
    const response = await fetchAllItems();
    dispatch({
      type: "LOAD_ALL_ITEMS",
      payload: response.returnItems,
      loading: false,
    });
    setItemTotalCount(response.returnItems.length);
    setItemData(response.returnItems);
  };

  React.useEffect(() => {
    fetchAllItemsFunc();
  }, [activePage]);

  React.useEffect(() => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const updatedDisplayedItems = itemData.slice(startIndex, endIndex);
    setDisplayedItems(updatedDisplayedItems);
  }, [activePage, itemData]);

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
              <Posts displayedItems={displayedItems} />
              <PostPagination
                onPageChange={(page) => setActivePage(page)}
                itemTotalCount={itemTotalCount}
                itemsPerPage={itemsPerPage}
                currentPage={activePage}
              />
            </Box>
          ) : (
            <Grid container spacing={1} sx={{ marginTop: "1%" }}>
              <Grid item xs={3}>
                <Filter />
              </Grid>
              <Grid item xs={9}>
                <Stack>
                  <Posts displayedItems={displayedItems} />
                  <PostPagination
                    onPageChange={(page) => setActivePage(page)}
                    itemTotalCount={itemTotalCount}
                    itemsPerPage={itemsPerPage}
                    currentPage={activePage}
                  />
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
