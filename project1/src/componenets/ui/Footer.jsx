import { Link } from "react-router-dom"

import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


import footerAdornment from "../../assets/Footer Adornment.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"
import { height, margin, positions } from "@mui/system";


const classes = {
    footer: (theme) => ({
        bgcolor: theme.palette.common.arcBlue,
        width: "100%",
        zIndex: 1302,
        position: "relative",
    }),
    adornment: (theme) => ({
        display: "block",
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("sm")]: {
            width: "15em"
        },

    }),
    mainContainer: {
        position: "absolute",
        width: "100%",
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    },
    icon: (theme) => ({
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("sm")]: {
            height: "2.5em",
            width: "2.5em",
        }
    }),
    socialContainer: (theme) => ({
        position: "absolute",
        width: "100%",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("sm")]: {
            right: "0.6em"
        }
    })

}


const Footer = (props) => {
    const hidden = useMediaQuery(theme => theme.breakpoints.down('md'));
    return (
        <Box sx={classes.footer}>
            {/* page content */}
            {hidden ? null : <Grid sx={classes.mainContainer}
                container
                justifyContent="center">
                <Grid item
                    sx={classes.gridItem}
                >
                    <Grid container direction="column" spacing={2}>
                        <Grid component={Link} to="/"
                            sx={classes.link}
                            onClick={() => props.setValue(0)}
                        >Home</Grid>
                    </Grid>
                </Grid>
                <Grid item sx={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid component={Link} to="/services" sx={classes.link}
                            onClick={() => { props.setValue(1); props.setSelectedIndex(0) }}>Services</Grid>
                        <Grid component={Link} to="/customsoftware" sx={classes.link}
                            onClick={() => { props.setValue(1); props.setSelectedIndex(1) }}>Custom Software Development</Grid>
                        <Grid component={Link} to="/mobileapps" sx={classes.link}
                            onClick={() => { props.setValue(1); props.setSelectedIndex(2) }}>Mobile App Development</Grid>
                        <Grid component={Link} to="/websites" sx={classes.link}
                            onClick={() => { props.setValue(1); props.setSelectedIndex(3) }}>Website Development</Grid>
                    </Grid>
                </Grid>
                <Grid item sx={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid component={Link} to="/revolution" sx={classes.link} item
                            onClick={() => props.setValue(2)}>The Revolution</Grid>
                        <Grid component={Link} to="/revolution" sx={classes.link} item
                            onClick={() => props.setValue(2)}>Vision</Grid>
                        <Grid component={Link} to="/revolution" sx={classes.link} item
                            onClick={() => props.setValue(2)}>Technology</Grid>
                        <Grid component={Link} to="/revolution" sx={classes.link} item
                            onClick={() => props.setValue(2)}>Process</Grid>
                    </Grid>
                </Grid>
                <Grid item sx={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid component={Link} to="/about" sx={classes.link} item
                            onClick={() => props.setValue(3)}>About Us</Grid>
                        <Grid component={Link} to="/about" sx={classes.link} item
                            onClick={() => props.setValue(3)}>History</Grid>
                        <Grid component={Link} to="/about" sx={classes.link} item
                            onClick={() => props.setValue(3)}>Team</Grid>
                    </Grid>
                </Grid>
                <Grid item sx={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid component={Link} to="/contact" sx={classes.link} item
                            onClick={() => props.setValue(4)}>Contact Us</Grid>
                    </Grid>
                </Grid>

            </Grid>}

            {/* Image box */}
            <Box
                component="img"
                alt="Black decorative slash"
                src={footerAdornment}
                sx={classes.adornment}
            />
            <Grid
                container
                justifyContent="flex-end"
                spacing={2}
                sx={classes.socialContainer}>
                <Grid
                    component={"a"}
                    href="http://www.facebook.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    item>
                    <Box
                        component="img"
                        alt="facebook logo"
                        src={facebook}
                        sx={classes.icon}
                    />
                </Grid>
                <Grid component={"a"}
                    href="http://www.twitter.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    item>
                    <Box
                        component="img"
                        alt="twitter logo"
                        src={twitter}
                        sx={classes.icon}
                    />
                </Grid>
                <Grid component={"a"}
                    href="http://www.instagram.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    item>
                    <Box
                        component="img"
                        alt="instagram logo"
                        src={instagram}
                        sx={classes.icon}
                    />
                </Grid>
            </Grid>
        </Box>

    )
}

export default Footer