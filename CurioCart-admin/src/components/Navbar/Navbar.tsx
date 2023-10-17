import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Stack,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { userSignOut } from "../../services/AuthService";

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
    { name: "Items", route: "/items", icon: <InventoryIcon /> },
  ];
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut();
    navigate("/");
  };

  return (
    <Box sx={{ position: "relative", height: "100%" }}>
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
      <ListItem
        disablePadding
        sx={{ position: "absolute", bottom: 0, width: "100%" }}
      >
        <ListItemButton
          sx={{ justifyContent: "center" }}
          onClick={handleSignOut}
        >
          <ListItemText>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src={`${localStorage.getItem("profilePic")}`}
                sx={{ width: 35, height: 35 }}
              />
              <Typography variant="body1">
                {localStorage.getItem("name")}
              </Typography>
            </Stack>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default Navbar;
