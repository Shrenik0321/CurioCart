import { Box, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

type Pages = {
  id: number;
  page: string;
  route: string;
};

const pages: Pages[] = [
  { id: 1, page: "Headphones", route: "headphones" },
  { id: 2, page: "Watches", route: "watches" },
];

const Navbar = () => {
  const navigate = useNavigate();

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
              <Box sx={{ display: "flex", gap: 1 }}>
                <Box sx={{ cursor: "pointer", mt: 0.45 }}>
                  <MenuIcon />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={() => navigate(`/`)}
                  >
                    CurioCart
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontWeight: "bold",
                gap: 2,
                marginTop: "2%",
              }}
            >
              {pages.map((item) => (
                <Typography
                  sx={{
                    cursor: "pointer",
                    transition: "font-weight 0.3s",
                    fontWeight: "normal",
                  }}
                  variant="body2"
                  onClick={() => navigate(`/${item.route}`)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.fontWeight = "bold";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.fontWeight = "normal";
                  }}
                >
                  {item.page}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "black",
            paddingY: "0.2%",
            paddingX: "1%",
            borderRadius: "15px",
            cursor: "pointer",
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
