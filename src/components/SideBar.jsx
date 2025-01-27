import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import { Avatar, List, styled, Typography, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Array1 = [
  { text: "Tableau de Bord", icon: <HomeOutlinedIcon />, path: "/" },
  {
    text: "Actifs",
    icon: <HomeRepairServiceOutlinedIcon />,
    path: "/Gestion",
  },
  {
    text: "Interventions",
    icon: <ConstructionOutlinedIcon />,
    path: "/Interventions",
  },
  {
    text: "Calendrier ",
    icon: <CalendarMonthOutlinedIcon />,
    path: "/Calendrier",
  },
  {
    text: "Profil",
    icon: <ManageAccountsOutlinedIcon />,
    path: "/Profil",
  },
];
const Array2 = [
  {
    text: "Rapports",
    icon: <CandlestickChartOutlinedIcon />,
    path: "/Rapports",
  },
  {
    text: "Tickets",
    icon: <BookOnlineOutlinedIcon />,
    path: "/Tickets",
  },
  {
    text: "Temps Réel",
    icon: <CloudOutlinedIcon />,
    path: "/Suivi",
  },
  {
    text: "Stocks",
    icon: <Inventory2OutlinedIcon />,
    path: "/Stocks",
  },
];
const Array3 = [
  {
    text: "Notifications",
    icon: <NotificationsActiveOutlinedIcon />,
    path: "/Alertes",
  },
  {
    text: "information",
    icon: <AlternateEmailOutlinedIcon />,
    path: "/information",
  },
  {
    text: "ChatBot",
    icon: <SmartToyOutlinedIcon />,
    path: "/IA",
  },
  {
    text: "Formation",
    icon: <MenuBookOutlinedIcon />,
    path: "/Formation",
  },
];

// eslint-disable-next-line react/prop-types
export default function SideBar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 90 : 40,
          height: open ? 90 : 40,
          my: "2px",
          transition: "0.5s",
          border: "2px solid grey",
        }}
        alt="avatar"
        src="../maroc.jpg"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 20 : 0, transition: "0.5s" }}
      >
        FAKHIR Badr
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 16 : 0,
          transition: "0.5s",
          color: theme.palette.info.main,
          fontFamily: "fantasy",
        }}
      >
        ADMIN
      </Typography>

      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : null,
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
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
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
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
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
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
