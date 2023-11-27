import React from "react";

import { Box, Typography } from "@mui/material";
import { fetchAllOrders } from "../../services/FetchService";
import { useAuthContext } from "../../hooks/useAuthContext";
import Loader from "../../components/Loader/Loader";
import PostPagination from "../../components/Pagination/Pagination";
import OrderTable from "../../components/OrderTable/OrderTable";

const Orders: React.FC = () => {
  const [activePage, setActivePage] = React.useState(1);
  const [orderData, setOrderData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [itemTotalCount, setItemTotalCount] = React.useState(0);
  const { auth } = useAuthContext();
  const ordersPerPage: number = 5;
  const startIndex = (activePage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const displayedItems = orderData.slice(startIndex, endIndex);

  const orderHeaders = [
    { name: "Item Image" },
    { name: "Item Name" },
    { name: "Item Category" },
    { name: "Item Type" },
    { name: "Item Size" },
    { name: "Item Price" },
    { name: "Customer Name" },
    { name: "Order Quantity" },
    { name: "Total Price" },
  ];

  const fetchAllOrdersFunc = async () => {
    const response = await fetchAllOrders(auth, {
      limit: ordersPerPage,
      skip: (activePage - 1) * ordersPerPage,
    });

    if (response) {
      setLoading(false);
      setOrderData(response.returnOrders);
      setItemTotalCount(response.totalOrderCount);
    }

    return response;
  };

  React.useEffect(() => {
    fetchAllOrdersFunc();
  }, []);

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Orders
            </Typography>
            <Typography variant="body1">All store orders.</Typography>
          </Box>
          {orderData.length > 0 && (
            <OrderTable
              orderData={displayedItems}
              orderHeaders={orderHeaders}
            />
          )}
        </>
      )}
      <PostPagination
        onPageChange={(page) => setActivePage(page)}
        itemTotalCount={itemTotalCount}
        itemsPerPage={ordersPerPage}
      />
    </Box>
  );
};

export default Orders;
