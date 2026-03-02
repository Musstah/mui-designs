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


import logo from '../../assets/logo.svg'


const menuItemStyles = (theme) => ({
  "&.MuiMenuItem-root":
  {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }

  }
});


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

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpen(false)
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile app Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },

  ]

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4)
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5)
    }
  }, [value])

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters >
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => setValue(0)}
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
                  height: "8em",          // 👈 fits nicely inside Toolbar
                  width: 'auto',
                  maxHeight: '100%',

                }}
              />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"   // 👈 selected tab color
              indicatorColor="secondary"
              sx={{
                marginLeft: 'auto',
              }}>

              <Tab sx={[
                (theme) => ({
                  ...theme.typography.tab,
                  mindWidth: 10,
                  marginLeft: "25px",
                })
              ]}
                component={Link}
                to="/"
                label="Home" />

              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                sx={[
                  (theme) => ({
                    ...theme.typography.tab,
                    mindWidth: 10,
                    marginLeft: "25px",
                  })
                ]}
                component={Link}
                onMouseOver={(event) => handleClick(event)}
                to="/services"
                label="Services" />

              <Tab sx={[
                (theme) => ({
                  ...theme.typography.tab,
                  mindWidth: 10,
                  marginLeft: "25px",
                })
              ]}
                component={Link}
                to="/revolution"
                label="Revolution" />

              <Tab sx={[
                (theme) => ({
                  ...theme.typography.tab,
                  mindWidth: 10,
                  marginLeft: "25px",
                })
              ]}
                component={Link}
                to="/about"
                label="About Us" />

              <Tab sx={[
                (theme) => ({
                  ...theme.typography.tab,
                  mindWidth: 10,
                  marginLeft: "25px",
                })
              ]}
                component={Link}
                to="/contact"
                label="Contact Us" />
            </Tabs>
            <Button color="secondary" variant="contained"
              sx={(theme) => ({
                ...theme.typography.estimate,
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
              open={open}
              onClose={handleClose}
              // MenuListProps is deprecated
              // MenuListProps={{ onMouseLeave: handleClose }}
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

            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  onClick={(event) => { handleMenuItemClick(event, i); setValue(1); handleClose() }}
                  sx={menuItemStyles}
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}

                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <Toolbar /> */}
      <Box sx={(theme) => ({
        ...theme.mixins.toolbar,
        mb: '3em',
      })} />
    </Fragment>
  );
}
