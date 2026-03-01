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


import logo from '../../assets/logo.svg'





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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

              <Tab sx={[
                (theme) => ({
                  ...theme.typography.tab,
                  mindWidth: 10,
                  marginLeft: "25px",
                })
              ]}
                component={Link}
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
