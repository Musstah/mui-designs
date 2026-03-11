import Lottie from 'react-lottie'
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonArrow from './ui/ButtonArrow';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CallToAction from './ui/CallToAction';


import animationData from '../animations/landinganimation/data'
import customSofwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from "../assets/infoBackground.svg"


const classes = {

    mainContainer: (theme) => ({
        mt: "5em",
        [theme.breakpoints.down("md")]: {
            mt: "3em"
        },
        [theme.breakpoints.down("sm")]: {
            mt: "2em"
        },
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
    animation: (theme) => ({
        maxWidth: "50em",
        minWidth: "21em",
        mt: "2em",
        ml: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        },
    }),
    estimateButton: (theme) => ({
        ...theme.typography.estimate,
        bgcolor: theme.palette.common.arcOrange,
        borderRadius: 50,
        height: 45,
        width: 145,
        mr: 4,
        "&:hover": {
            bgcolor: theme.palette.secondary.light
        }
    }),
    buttonContainer: {
        mt: "1em"
    },
    learnButtonHero: (theme) => ({
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        widrh: 145
    }),
    learnButton: (theme) => ({
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 2.5,
        [theme.breakpoints.down("md")]: {
            mb: "2em"
        }
    }),
    heroTextContainer: (theme) => ({
        mindWidth: "21.5em",
        ml: "1em",
        [theme.breakpoints.down("sm")]: {
            ml: "0em",
        },
    }),
    specialText: (theme) => ({
        fontFamily: 'Pacifico',
        color: theme.palette.common.arcOrange
    }),
    subtitle: {
        mb: "1em"
    },
    icon: (theme) => ({
        ml: '2em',
        [theme.breakpoints.down("sm")]: {
            ml: 0
        }
    }),
    serviceContainer: (theme) => ({
        mt: "12em",
        [theme.breakpoints.down("md")]: {
            padding: 2.5
        }
    }),
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    revolutionCard: (theme) => ({
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("md")]: {
            pt: "8em",
            pb: "8em",
            pl: "0em",
            pr: "0em",
            borderRadius: 0,
            widrh: "100%"
        }
    }),
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
}



const LandingPage = (props) => {

    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    const defaultOptions = {
        loop: true,
        // autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column" sx={classes.mainContainer}>
            {/* Hero Block */}
            <Grid item>
                <Grid container justifyContent="flex-end" alignItems="center" direction="row">
                    <Grid item sm={12} md={6} sx={classes.heroTextContainer}>
                        <Typography variant='h2' align='center'>
                            Bringing West Coast Technology
                            <br />to the Midwest
                        </Typography>
                        <Grid container justifyContent="center" sx={classes.buttonContainer}>
                            <Grid item>
                                <Button
                                    component={Link} to="/estimate"
                                    onClick={() => props.setValue(5)}
                                    variant='contained'
                                    sx={classes.estimateButton}
                                >
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    component={Link} to="/revolution"
                                    onClick={() => props.setValue(2)}
                                    sx={classes.learnButtonHero}>
                                    <span style={{ marginRight: 10 }}>Learn more</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={6} sx={classes.animation}>
                        <Lottie
                            options={defaultOptions}
                            height={"100%"}
                            width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {" "}
                {/* Custom Software Block */}
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesMD ? "center" : undefined}
                    sx={classes.serviceContainer}>
                    <Grid item sx={{
                        ml: matchesMD ? 0 : "5em",
                        textAlign: matchesMD ? "center" : undefined
                    }}>
                        <Typography variant='h4'>
                            Custom Software Development
                        </Typography>
                        <Typography variant='subtitle1' sx={classes.subtitle}>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant='subtitle1'>
                            Complete digital solutions, from ivestigation to{" "}
                            <span style={{
                                fontFamily: 'Pacifico',
                                color: theme.palette.common.arcOrange
                            }}>celebration</span>
                        </Typography>
                        <Button
                            component={Link} to="/customsoftware"
                            onClick={() => { props.setValue(1); props.setSelectedIndex(1) }}
                            variant='outlined'
                            sx={[classes.learnButton]}>
                            <span style={{ marginRight: 10 }}>Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Box
                            component="img"
                            alt="custom software icon"
                            src={customSofwareIcon}
                            sx={classes.icon}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {" "}
                {/* iOS/Android Block */}
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesMD ? "center" : "flex-end"}
                    sx={classes.serviceContainer}>
                    <Grid item sx={{
                        textAlign: matchesMD ? "center" : undefined
                    }}>
                        <Typography variant='h4'>
                            iOS/Android App Development
                        </Typography>
                        <Typography variant='subtitle1' sx={classes.subtitle}>
                            Extend Functionality. Extend Access, Increase Engagement
                        </Typography>
                        <Typography variant='subtitle1'>
                            Integrate your web experiance or create a standalone
                            {matchesMD ? null : <br />}with eaither mobile platform
                        </Typography>
                        <Button
                            component={Link} to="/mobileapps"
                            onClick={() => { props.setValue(1); props.setSelectedIndex(2) }}
                            variant='outlined'
                            sx={[classes.learnButton]}>
                            <span style={{ marginRight: 10 }}>Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                        </Button>
                    </Grid>
                    <Grid item sx={{ mr: matchesMD ? 0 : "5em", }}>
                        <Box
                            component="img"
                            alt="mobile phone icon"
                            src={mobileAppsIcon}
                            sx={classes.icon}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {" "}
                {/*Websites Block*/}
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesMD ? "center" : undefined}
                    sx={classes.serviceContainer}>
                    <Grid item sx={{
                        ml: matchesMD ? 0 : "5em",
                        textAlign: matchesMD ? "center" : undefined
                    }}>
                        <Typography variant='h4'>
                            Website Development
                        </Typography>
                        <Typography variant='subtitle1' sx={classes.subtitle}>
                            Reach more. Discover More. Sell More.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button
                            component={Link} to="/websites"
                            onClick={() => { props.setValue(1); props.setSelectedIndex(3) }}
                            variant='outlined'
                            sx={[classes.learnButton]}>
                            <span style={{ marginRight: 10 }}>Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Box
                            component="img"
                            alt="website icon"
                            src={websitesIcon}
                            sx={classes.icon}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/* The Revolution Block */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: "100em", mt: "12em" }}
                >
                    <Card sx={classes.revolutionCard}>
                        <CardContent>
                            <Grid
                                container
                                direction="column"
                                sx={{ textAlign: "center" }}>
                                <Grid item>
                                    <Typography
                                        variant='h3'
                                        gutterBottom
                                    >
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <Typography
                                        variant='subtitle1'>
                                        Visionary insights coupled with cutting-edge
                                        technologyis a recipe for revolution.
                                    </Typography>
                                    <Button
                                        component={Link} to="/revolution"
                                        onClick={() => props.setValue(2)}
                                        variant='outlined'
                                        sx={classes.learnButtonHero}>
                                        <span style={{ marginRight: 10 }}>Learn more</span>
                                        <ButtonArrow
                                            width={15}
                                            height={15}
                                            fill={theme.palette.common.arcBlue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Box sx={classes.revolutionBackground} />
                </Grid>
            </Grid>
            <Grid item>
                {/* The Information Block */}
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    sx={{ height: "80em" }}
                >
                    <Grid
                        item
                        container
                        justifyContent="space-between"
                        direction={matchesSM ? "column" : "row"}
                        // spacing={matchesSM ? 10 : 0}
                        sx={{
                            position: "absolute",
                            width: "100%",
                            textAlign: matchesSM ? "center" : "inherit"
                        }}
                    >
                        <Grid item sm={6} sx={{ ml: matchesSM ? 0 : matchesMD ? "2em" : "5em" }}>
                            <Grid
                                container
                                direction="column"
                                sx={{ mb: matchesSM ? 10 : 0 }}
                            >
                                <Typography
                                    variant='h2'
                                    sx={{ color: "white" }}
                                >
                                    About Us
                                </Typography>
                                <Typography
                                    variant='subtitle2'>
                                    Let's get personal
                                </Typography>
                                <Grid item>
                                    <Button
                                        component={Link} to="/about"
                                        onClick={() => props.setValue(3)}
                                        variant='outlined'
                                        sx={[classes.learnButton, {
                                            color: "white",
                                            borderColor: "white"
                                        }]}>
                                        <span style={{ marginRight: 10 }}>Learn more</span>
                                        <ButtonArrow
                                            width={15}
                                            height={15}
                                            fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            sm={6}
                            sx={{
                                mr: matchesSM ? 0 : matchesMD ? "2em" : "5em",
                                textAlign: matchesSM ? "center" : "right"
                            }}>
                            <Grid
                                container
                                direction="column">
                                <Typography
                                    variant='h2'
                                    sx={{ color: "white" }}
                                >
                                    Contact Us
                                </Typography>
                                <Typography
                                    variant='subtitle2'>
                                    Say hello!
                                </Typography>
                                <Grid item>
                                    <Button
                                        component={Link} to="/contact"
                                        onClick={() => props.setValue(4)}
                                        variant='outlined'
                                        sx={[classes.learnButton, {
                                            color: "white",
                                            borderColor: "white"
                                        }]}>
                                        <span style={{ marginRight: 10 }}>Learn more</span>
                                        <ButtonArrow
                                            width={15}
                                            height={15}
                                            fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Box sx={classes.infoBackground} />
                </Grid>
            </Grid>
            <Grid item>
                {/* Call To Action */}
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )
}

export default LandingPage