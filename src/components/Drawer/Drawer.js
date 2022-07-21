import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import AdjustIcon from "@mui/icons-material/Adjust";

import "./Drawer.css";
import { MyAppbar, MyBreadcrums, MyTreeview } from "..";
import { KnowledgeBase } from "../../containers";

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
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

export const MyDrawer = () => {
  const [open, setOpen] = React.useState(true);
  const [breadcrumsArray, setBreadcreumsArray] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleBreadCrums = (arr) => setBreadcreumsArray(arr);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div className="u-flex-align-center u-pl-8 u-cp">
            <span onClick={handleDrawerOpen}>
              <img
                width="40px"
                height="40px"
                src="https://pixinvent.com/demo/vuexy-angular-admin-dashboard-template/demo-1/assets/images/logo/logo.svg"
                alt="brand-logo"
              />
            </span>
            <span className="brand-logo">Vivid</span>
          </div>
          <IconButton onClick={handleDrawerClose}>
            <AdjustIcon style={{ color: "#7367f0" }} />
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <div className="apps-and-pages u-fw-500 u-my-8 u-text-left u-ml-20">
          APPS AND PAGES
        </div>
        <MyTreeview getBreadcrumsArray={handleBreadCrums} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <MyAppbar />
        <div className="breadcrum-section u-w-100p u-flex-align-center u-mt-16">
          <MyBreadcrums
            pageName="Knowledge Base"
            breadcrumsArray={breadcrumsArray}
          />
        </div>
        <KnowledgeBase />
      </Box>
    </Box>
  );
};
