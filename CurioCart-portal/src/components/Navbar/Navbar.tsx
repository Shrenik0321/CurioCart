import React from "react";

import { Box, Typography, Badge, useMediaQuery } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { useNavigate } from "react-router-dom";
import { fetchAllItemCategories } from "../../services/FetchService";
import { useCartItemsContext } from "../../hooks/useCartItemsContext";
import Sidebar from "../Sidebar/Sidebar";

type ItemCategory = {
  itemCategoryType: string;
};

type CartItemsType = {
  cartItems: [];
};

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [itemCategory, setItemCategory] = React.useState<ItemCategory[]>([]);
  const { cartItems }: CartItemsType = useCartItemsContext();

  React.useEffect(() => {
    const fetchAllItemCategoriesFunc = async () => {
      const response = await fetchAllItemCategories();
      setItemCategory(response);
    };

    fetchAllItemCategoriesFunc();
  }, []);

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
                {itemCategory &&
                  itemCategory.map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        cursor: "pointer",
                        transition: "font-weight 0.3s",
                        fontWeight: "normal",
                      }}
                      variant="body2"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.fontWeight = "bold";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.fontWeight = "normal";
                      }}
                    >
                      {item.itemCategoryType}
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
          <Badge badgeContent={cartItems.length} color="primary">
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
