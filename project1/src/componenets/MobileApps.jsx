import Lottie from "react-lottie"
import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagement from '../assets/increaseEngagement.svg'

import integrationAnimation from '../animations/integrationAnimation/data.json'
import CallToAction from "./ui/CallToAction";

const classes = {
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        mt: "0.5em"
    },
    rowContainer: (theme) => ({
        pl: "5em",
        pr: "5em",
        [theme.breakpoints.down("md")]: {
            pl: "1.5em",
            pr: "1.5em",
        }
    }),
}

const MobileApps = (props) => {


    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    const defaultOptions = {
        loop: true,
        // autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }


    return (
        <Grid container direction="column">
            <Grid item
                container
                direction="row"
                justifyContent={matchesMD ? "center" : undefined}
                sx={[classes.rowContainer, { mt: matchesSM ? "1em" : "2em" }]}
            >
                {!matchesMD &&
                    (<Grid item sx={[classes.arrowContainer, {
                        mr: "1em",
                        ml: "-3.5em"
                    }]}>
                        <IconButton
                            component={Link}
                            to="/customsoftware"
                            onClick={() => props.setSelectedIndex(1)}
                            sx={{ bgcolor: 'transparent' }}>
                            <Box
                                component="img"
                                alt="Back to custom Software Development page"
                                src={backArrow}
                            />
                        </IconButton>

                    </Grid>)}
                <Grid item container direction="column" sx={classes.heading}
                >
                    <Grid item>
                        <Typography
                            variant="h2"
                            align={matchesMD ? "center" : undefined}
                        >
                            iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,

                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ mb: 2 }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto eveniet consectetur voluptate nihil accusamus temporibus
                            vitae quis tempore, neque inventore.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Officiis quidem quis ipsum?
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ mb: 2 }}
                        >
                            Lorem ipsum dolor sit.
                        </Typography>
                    </Grid>
                </Grid>
                {!matchesMD &&
                    (<Grid item sx={classes.arrowContainer}>

                        <IconButton
                            component={Link}
                            to="/websites"
                            onClick={() => props.setSelectedIndex(3)}
                            sx={{ bgcolor: 'transparent' }}>
                            <Box
                                component="img"
                                alt="Forward Website Page"
                                src={forwardArrow}
                            />
                        </IconButton>
                    </Grid>)}
            </Grid>
            <Grid
                container
                spacing={4}
                direction={matchesMD ? "column" : "row"}
                justifyContent={!matchesMD ? "space-between" : undefined}
                sx={[classes.rowContainer, { mt: "15em", mb: "15em" }]}>
                <Grid item xs={12} md={4} container direction="column"
                    sx={{ maxWidth: !matchesMD ? "30%" : undefined }}>
                    <Grid item>
                        <Typography
                            variant="h4"
                            gutterBottom
                            align={matchesMD ? "center" : undefined}
                        >
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ mb: 2 }}>
                            Whether we're replacing old software or inventing new solution
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus ducimus quia necessitatibus.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Lottie options={defaultOptions} isStopped={true} style={{ maxWidth: "16em" }} />
                </Grid>
                <Grid item container direction="column" xs={12} md={4}
                    sx={{ maxWidth: !matchesMD ? "30%" : undefined }}>
                    <Grid item>
                        <Typography
                            align={matchesMD ? "center" : "right"}
                            variant="h4"
                            gutterBottom>Simultenous Platform Support</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            align={matchesMD ? "center" : "right"}
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : "right"}
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesMD ? "column" : "row"}
                alignItems="center"
                justifyContent={!matchesMD ? "space-between" : undefined}
                sx={[classes.rowContainer, { mb: "15em" }]}>
                <Grid
                    item
                    conrainer
                    direction="column"
                    alignItems="center"
                    xs={12} md={6}>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom >
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            component="img"
                            alt="swiss army knife"
                            src={swiss}
                            sx={{ maxWidth: "24em" }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    conrainer
                    direction="column"
                    alignItems="center"
                    xs={12} md={6}
                    sx={{
                        mt: matchesMD ? "10em" : 0,
                        mb: matchesMD ? "10em" : 0
                    }}
                >
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom >
                            Extend Acess
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            component="img"
                            alt="tear-one-off sign"
                            src={access}
                            sx={{ maxWidth: matchesSM ? "20em" : "28em" }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    conrainer
                    direction="column"
                    alignItems="center"
                    xs={12} md={6}>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom >
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            component="img"
                            alt="app with notification"
                            src={engagement}
                            sx={{ maxWidth: "24em", ml: "2.5em" }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )
}

export default MobileApps