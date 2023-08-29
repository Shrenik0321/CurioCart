import React from "react";

import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

type Pages = {
  id: number;
  page: string;
  route: string;
};

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

const pages: Pages[] = [
  { id: 1, page: "Headphones", route: "headphones" },
  { id: 2, page: "Watches", route: "watches" },
];

const Sidebar: React.FC<SidebarProps> = ({ setSidebarOpen, sidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <Box>
              <Typography
                variant="h5"
                sx={{ cursor: "pointer", fontWeight: "bold", margin: 1.5 }}
                onClick={() => navigate(`/`)}
              >
                CurioCart
              </Typography>
            </Box>
            <Divider />
            {pages.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  cursor: "pointer",
                  transition: "font-weight 0.3s",
                  fontWeight: "normal",
                }}
                onClick={() => navigate(`/${item.route}`)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.fontWeight = "bold";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.fontWeight = "normal";
                }}
              >
                <ListItemButton>
                  <ListItemText primary={item.page} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Sizes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {["Large", "Medium", "Small", "Extra small"].map(
                  (text, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Colors</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {["Red", "Black", "Blue"].map((text, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
