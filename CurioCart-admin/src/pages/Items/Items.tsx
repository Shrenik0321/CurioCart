import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ItemTable from "../../components/ItemTable/ItemTable";
import { fetchAllItems } from "../../services/FetchService";
import PostPagination from "../../components/Pagination/Pagination";

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [itemData, setItemData] = React.useState([]);

  const itemHeaders = [
    { name: "Item Name" },
    { name: "Item Category" },
    { name: "Item Type" },
    { name: "Item Size" },
    { name: "Item Price" },
    { name: "Item Image" },
    { name: "Item Description" },
  ];

  React.useEffect(() => {
    const fetchAllItemsFunc = async () => {
      const response = await fetchAllItems();
      setItemData(response.returnItems);
    };
    fetchAllItemsFunc();
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", mb: 2, justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Items
          </Typography>
          <Typography variant="body1">All items from your store.</Typography>
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
      <PostPagination />
    </Box>
  );
};

export default Products;
