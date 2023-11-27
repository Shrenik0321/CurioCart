import React from "react";
import {
  Box,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import { OrderType } from "../../types";

type ItemHeaders = {
  name: string;
};

type OrderTable = {
  orderData: OrderType[];
  orderHeaders: ItemHeaders[];
};

const OrderTable: React.FC<OrderTable> = ({ orderData, orderHeaders }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {orderHeaders.map((row, index) => (
                <TableCell key={index} sx={{ fontWeight: "bold" }}>
                  {row.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  {row?.items.length > 0 ? (
                    <img
                      src={row.items[0].itemImageUrl}
                      alt="Item"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>
                  {row?.items.length > 0 ? row.items[0].itemName : "-"}
                </TableCell>
                <TableCell>
                  {row?.items.length > 0 ? row.items[0].itemCategory : "-"}
                </TableCell>
                <TableCell>
                  {row?.items.length > 0 ? row.items[0].itemType : "-"}
                </TableCell>
                <TableCell>
                  {row?.items.length > 0 ? row.items[0].itemSize : "-"}
                </TableCell>
                <TableCell>
                  {row?.items.length > 0 ? row.items[0].itemPrice : "-"}
                </TableCell>
                <TableCell>{row?.customerId}</TableCell>
                <TableCell>
                  {row?.items.length > 0 ? row.items[0].quantity : "-"}
                </TableCell>
                <TableCell>{row?.totalCost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
