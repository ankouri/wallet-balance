import React from "react";
import {
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu,
  LightMode,
  DarkMode,
  HelpOutline,
  MailOutline,
  Check,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../Themes";
import { style } from "./navbar-style";

export default function Navbar(props) {
  const colorMode = React.useContext(ColorModeContext);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  const navigateMenu = (route) => {
    navigate(route);
    setOpen(!open);
  };
  return (
    <style.Wrapper>
      <IconButton color="primary" onClick={toggleDrawer}>
        <Menu />
      </IconButton>
      <style.Logo to="/">
        <Typography color="primary" component="h3">
          ANAWallet{" "}
        </Typography>
      </style.Logo>
      <IconButton color="primary" onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "light" ? <LightMode /> : <DarkMode />}
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer}>
        <List sx={{ width: "245px" }}>
          <style.Logo to="/">
            <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              color="primary"
              component="h3"
            >
              ANAWallet{" "}
            </Typography>
          </style.Logo>

          <ListItem
            button
            key="About"
            onClick={() => {
              navigateMenu("/about");
            }}
          >
            <ListItemIcon>
              <HelpOutline />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            key="Contact"
            onClick={() => {
              navigateMenu("/contact");
            }}
          >
            <ListItemIcon>
              <MailOutline />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItem>
          <ListItem
            button
            key="Terms"
            onClick={() => {
              navigateMenu("/terms");
            }}
          >
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText primary="Terms & services" />
          </ListItem>
        </List>
      </Drawer>
    </style.Wrapper>
  );
}
