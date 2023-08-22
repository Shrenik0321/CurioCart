import { Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          padding: "1%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", gap: 5 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                CurioCart
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontWeight: "bold",
                gap: 2,
                marginTop: "2%",
              }}
            >
              <Typography variant="body2">Item One</Typography>
              <Typography variant="body2">Item Two</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "black",
            paddingY: "0.2%",
            paddingX: "1%",
            borderRadius: "15px",
          }}
        >
          <Badge badgeContent={3} color="primary">
            <ShoppingCartOutlinedIcon
              sx={{ color: "white" }}
              fontSize="small"
            />
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
