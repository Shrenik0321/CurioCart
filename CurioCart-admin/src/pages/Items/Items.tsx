import React from "react";
import {
  Box,
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Products: React.FC = () => {
  const navigate = useNavigate();

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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Products;
