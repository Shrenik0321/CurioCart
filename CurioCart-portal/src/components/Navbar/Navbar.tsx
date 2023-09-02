import React from "react";

import { Box, Typography, Badge, useMediaQuery } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

type Pages = {
  id: number;
  page: string;
  route: string;
};

const pages: Pages[] = [
  { id: 1, page: "Headphones", route: "headphones" },
  { id: 2, page: "Watches", route: "watches" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

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
                {isMobile ? (
                  <Box
                    sx={{ cursor: "pointer", mt: 0.45 }}
                    onClick={() => setSidebarOpen(true)}
                  >
                    <MenuRoundedIcon />
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ cursor: "pointer", fontWeight: "bold" }}
                      onClick={() => navigate(`/`)}
                    >
                      CurioCart
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
            {!isMobile && (
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
            )}
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
          onClick={() => navigate("/shopping-cart")}
        >
          <Badge badgeContent={3} color="primary">
            <ShoppingCartOutlinedIcon
              sx={{ color: "white", cursor: "pointer" }}
              fontSize="small"
            />
          </Badge>
        </Box>
      </Box>
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
    </Box>
  );
};

export default Navbar;
