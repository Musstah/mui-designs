import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonArrow from './ui/ButtonArrow';
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';



import customSofwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'

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

    learnButton: (theme) => ({
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 2.5,
        [theme.breakpoints.down("md")]: {
            mb: "2em"
        }
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
        mt: "10em",
        [theme.breakpoints.down("md")]: {
            padding: 2.5
        }
    }),
}

const Services = (props) => {

    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Grid container direction="column">
            <Grid item
                sx={{
                    ml: matchesMD ? 0 : "5em",
                    mt: matchesMD ? "1em" : "2em"
                }}
            >
                <Typography
                    variant="h2"
                    gutterBottom
                    alignItems={matchesMD ? "center" : undefined}
                >Services</Typography>
            </Grid>
            <Grid item>
                {" "}
                {/* iOS/Android Block */}
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesMD ? "center" : "flex-end"}
                    sx={[classes.serviceContainer, { mt: matchesMD ? "1em" : "5em" }]}>
                    <Grid item sx={{
                        textAlign: matchesMD ? "center" : undefined,
                        width: matchesMD ? undefined : "35em"
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
                            sx={[classes.icon, { width: "15em" }]}
                        />
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
                {/*Websites Block*/}
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesMD ? "center" : "flex-end"}
                    sx={[classes.serviceContainer, { mb: "10em" }]}>
                    <Grid item sx={{
                        textAlign: matchesMD ? "center" : undefined,
                        width: matchesMD ? undefined : "35em"
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
                    <Grid item sx={{ mr: matchesMD ? 0 : "5em", }}>
                        <Box
                            component="img"
                            alt="website icon"
                            src={websitesIcon}
                            sx={[classes.icon, { width: "15em" }]}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Services