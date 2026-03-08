import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom'


import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


import logo from '../../assets/logo.svg'


const menuItemStyles = (theme) => ({
  "&.MuiMenuItem-root":
  {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    },
    "&.Mui-selected": {
      bgcolor: theme.palette.primary.dark
    }

  }
});

const classes = {
  tab: (theme) => ({
    ...theme.typography.tab,
    mindWidth: 10,
    marginLeft: "25px",
  }),
  drawerIconContainer: {
    ml: "auto",
    "&:hover": {
      bgcolor: "transparent",
    },
  },

  drawerIcon: {
    height: "50px",
    width: "50px",
  },

  drawer: (theme) => ({
    "& .MuiDrawer-paper": {
      bgcolor: theme.palette.common.arcBlue,
    },
  }),
  drawerItem: (theme) => ({
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  }),
  drawerItemEstimate: (theme) => ({
    bgcolor: theme.palette.common.arcOrange,
  }),
  appbar: (theme) => ({
    zIndex: theme.zIndex.modal + 1
  }),
};


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,

  });

  return children
    ? React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
    : null;
}




export default function Header(props) {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const iOS =
    typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)


  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    props.setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development", link: "/customsoftware", activeIndex: 1,
      selectedIndex: 1
    },
    { name: "iOs/Android app Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
    { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3 },
  ]

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined, mouseOver: (event) => handleClick(event)
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact us", link: "/contact", activeIndex: 4 },
  ]

  useEffect(() => {

    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break;
        case "/estimate":
          props.setValue(5)

        default:
          break;
      }
    })


  }, [props.value, menuOptions, props.selectedIndex, routes, props])

  const tabs = (
    <Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        textColor="secondary"   // 👈 selected tab color
        indicatorColor="secondary"
        sx={{
          marginLeft: 'auto',
        }}>

        {routes.map((route, index) => (
          <Tab
            key={`${index}${route}`}
            component={Link}
            to={route.link}
            label={route.name}
            sx={classes.tab}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link} to="/estimate"
        color="secondary"
        variant="contained"
        onClick={() => props.setValue(5)}
        sx={(theme) => ({
          ...theme.typography.estimate,
          "&:hover": {
            bgcolor: theme.palette.secondary.light
          },
          borderRadius: '50px',
          ml: '50px',
          mr: '25px',
          height: '45px',
        })}

      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        // MenuListProps is deprecated
        // MenuListProps={{ onMouseLeave: handleClose }}
        sx={{ zIndex: 1302 }}
        slotProps={{
          list: {
            onMouseLeave: handleClose,
            sx: (theme) => ({
              bgcolor: theme.palette.primary.main,
              color: "white",
              borderRadius: "0px",
            })
          },
        }}
        elevation={0}
        keepMounted

      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${i}${option}`}
            component={Link}
            to={option.link}
            onClick={(event) => { handleMenuItemClick(event, i); props.setValue(1); handleClose() }}
            sx={menuItemStyles}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}

          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  )

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={classes.drawer}
      >
        <Box sx={(theme) => ({
          ...theme.mixins.toolbar,
          mb: '3em',
          [theme.breakpoints.down("md")]: {
            mb: "2.5em"
          },
          [theme.breakpoints.down("xs")]: {
            mb: "1.25em"
          },
        })} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              key={`${index}${route.name}`}
              onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex) }}
              divider
              button
              component={Link} to={route.link}
              sx={[classes.drawerItem, {
                bgcolor: props.value === route.activeIndex && theme.palette.primary.dark,
                opacity: props.value === route.activeIndex && 1
              }]}
            >
              <ListItemText disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            onClick={() => { setOpenDrawer(false); props.setValue(5) }}
            divider
            button
            component={Link} to="/estimate"
            sx={[classes.drawerItem, classes.drawerItemEstimate, {
              bgcolor: props.value === 5 && theme.palette.primary.dark,
              opacity: props.value === 5 && 1
            }]}
          >
            <ListItemText disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>;
      <IconButton
        sx={
          classes.drawerIconContainer
        }
      >
        <MenuIcon
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
          sx={classes.drawerIcon}
        />
      </IconButton>
    </Fragment>
  )

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed"
          sx={classes.appbar}
        >
          <Toolbar disableGutters >
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => props.setValue(0)}
              sx={{
                padding: 0, "&:hover": {
                  bgcolor: "transparent"
                }
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="company logo"
                sx={{
                  height: "8em",
                  [theme.breakpoints.down("md")]: {
                    height: "7em"
                  },
                  [theme.breakpoints.down("xs")]: {
                    height: "5.5em"
                  },
                  // width: 'auto',
                  // maxHeight: '100%',

                }}
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <Toolbar /> */}
      <Box sx={(theme) => ({
        ...theme.mixins.toolbar,
        mb: '3em',
        [theme.breakpoints.down("md")]: {
          mb: "2.5em"
        },
        [theme.breakpoints.down("sx")]: {
          mb: "1.25em"
        },
      })} />
    </Fragment >
  );
}
