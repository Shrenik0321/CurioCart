import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ItemTable from "../../components/ItemTable/ItemTable";
import { fetchAllItems } from "../../services/FetchService";
import PostPagination from "../../components/Pagination/Pagination";
import { useItemContext } from "../../hooks/useItemContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../components/Loader/Loader";
import { ItemReducerAction } from "../../types";

const Items: React.FC = () => {
  const [activePage, setActivePage] = React.useState(1);
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const { loading } = useItemContext();
  const [itemData, setItemData] = React.useState([]);
  const [itemTotalCount, setItemTotalCount] = React.useState(0);
  const { dispatch }: { dispatch: (action: ItemReducerAction) => void } =
    useItemContext();
  const itemPerPageCount: number = 2;

  const itemHeaders = [
    { name: "Item Name" },
    { name: "Item Category" },
    { name: "Item Type" },
    { name: "Item Size" },
    { name: "Item Price" },
    { name: "Item Image" },
    { name: "Item Description" },
  ];

  const fetchAllItemsFunc = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: [],
      loading: true,
    });
    const response = await fetchAllItems(axiosPrivate, {
      limit: itemPerPageCount,
      skip: (activePage - 1) * itemPerPageCount,
    });
    dispatch({
      type: "LOAD_ALL_ITEMS",
      payload: response.returnItems,
      loading: false,
    });
    setItemData(response.returnItems);
    setItemTotalCount(response.totalItemCount);
  };

  React.useEffect(() => {
    fetchAllItemsFunc();
  }, [activePage]);

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box sx={{ display: "flex", mb: 2, justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Items
              </Typography>
              <Typography variant="body1">
                All items from your store.
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "transparent",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "transparent",
                  },
                }}
                onClick={() => navigate("/add-new-item")}
              >
                Add new item
              </Button>
            </Box>
          </Box>
          <ItemTable itemData={itemData} itemHeaders={itemHeaders} />
        </>
      )}
      <PostPagination
        onPageChange={(page) => setActivePage(page)}
        itemTotalCount={itemTotalCount}
      />
    </Box>
  );
};

export default Items;
