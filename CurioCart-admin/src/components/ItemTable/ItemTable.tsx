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
import { ItemType } from "../../types";

type ItemHeaders = {
  name: string;
};

type ItemTable = {
  itemData: ItemType[];
  itemHeaders: ItemHeaders[];
};

const ItemTable: React.FC<ItemTable> = ({ itemData, itemHeaders }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {itemHeaders.map((row) => (
                <TableCell sx={{ fontWeight: "bold" }}>{row.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {itemData.map((row) => (
              <TableRow>
                <TableCell>
                  <img
                    src={row.itemImageUrl}
                    alt="Item"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                </TableCell>
                <TableCell>{row.itemName}</TableCell>
                <TableCell>{row.itemCategory}</TableCell>
                <TableCell>{row.itemType}</TableCell>
                <TableCell>{row.itemSize}</TableCell>
                <TableCell>{row.itemPrice}</TableCell>
                <TableCell>{row.itemDescription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ItemTable;
