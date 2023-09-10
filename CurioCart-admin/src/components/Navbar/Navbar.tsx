import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";

type NavbarPropType = {
  open: boolean;
};

const Navbar: React.FC<NavbarPropType> = ({ open }) => {
  const listItems = [
    { name: "Overview", route: "/", icon: <DashboardIcon /> },
    {
      name: "Billboards",
      route: "/billboards",
      icon: <FeaturedPlayListIcon />,
    },
    { name: "Categories", route: "/categories", icon: <CategoryIcon /> },
    { name: "Orders", route: "/orders", icon: <ShoppingCartIcon /> },
    { name: "Products", route: "/products", icon: <InventoryIcon /> },
  ];
  const navigate = useNavigate();

  return (
    <Box>
      <List>
        {listItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate(item.route)}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
