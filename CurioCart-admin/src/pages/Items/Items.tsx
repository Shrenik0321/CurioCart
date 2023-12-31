import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ItemTable from "../../components/ItemTable/ItemTable";
import { fetchAllItems } from "../../services/FetchService";
import PostPagination from "../../components/Pagination/Pagination";
import { useItemContext } from "../../hooks/useItemContext";
import Loader from "../../components/Loader/Loader";
import { ItemReducerAction } from "../../types";
import { useAuthContext } from "../../hooks/useAuthContext";

const Items: React.FC = () => {
  const [activePage, setActivePage] = React.useState(1);
  const navigate = useNavigate();
  const { loading } = useItemContext();
  const [itemData, setItemData] = React.useState([]);
  const [itemTotalCount, setItemTotalCount] = React.useState(0);
  const { dispatch }: { dispatch: (action: ItemReducerAction) => void } =
    useItemContext();
  const { auth } = useAuthContext();
  const itemsPerPage: number = 5;
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = itemData.slice(startIndex, endIndex);

  const itemHeaders = [
    { name: "Item Image" },
    { name: "Item Name" },
    { name: "Item Category" },
    { name: "Item Type" },
    { name: "Item Size" },
    { name: "Item Price" },
    { name: "Item Description" },
  ];

  const fetchAllItemsFunc = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: [],
      loading: true,
    });
    const response = await fetchAllItems(auth, {
      limit: itemsPerPage,
      skip: (activePage - 1) * itemsPerPage,
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
          {itemData.length > 0 && (
            <ItemTable itemData={displayedItems} itemHeaders={itemHeaders} />
          )}
        </>
      )}
      <PostPagination
        onPageChange={(page) => setActivePage(page)}
        itemTotalCount={itemTotalCount}
        itemsPerPage={itemsPerPage}
      />
    </Box>
  );
};

export default Items;
