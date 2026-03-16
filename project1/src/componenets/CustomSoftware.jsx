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
import lightbuld from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import roots from '../assets/root.svg'

import documentsAnimation from '../animations/documentsAnimation/data'
import scaleAnimation from '../animations/scaleAnimation/data.json'
import automationAnimation from '../animations/automationAnimation/data.json'
import uxAnimation from '../animations/uxAnimation/data'
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
    itemContainer: { maxWidth: "80em" }
}

const CustomSoftware = (props) => {

    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    const documentsOptions = {
        loop: true,
        // autoplay: true,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }
    const scaleOptions = {
        loop: true,
        // autoplay: true,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }
    const automationOptions = {
        loop: true,
        // autoplay: true,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }
    const uxOptions = {
        loop: true,
        // autoplay: true,
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column"

        >
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
                            to="/services"
                            onClick={() => props.setSelectedIndex(0)}
                            sx={{ bgcolor: 'transparent' }}>
                            <Box
                                component="img"
                                alt="Back to services page"
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
                            Custom Software Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                </Grid>
                {!matchesMD &&
                    (<Grid item sx={classes.arrowContainer}>

                        <IconButton
                            component={Link}
                            to="/mobileapps"
                            onClick={() => props.setSelectedIndex(2)}
                            sx={{ bgcolor: 'transparent' }}>
                            <Box
                                component="img"
                                alt="Forward to iOS/Android Development Page"
                                src={forwardArrow}
                            />
                        </IconButton>

                    </Grid>)}
            </Grid>
            <Grid
                container
                direction={matchesMD ? "column" : "row"}
                spacing={matchesMD ? 8 : 4}
                justifyContent={matchesMD ? "center" : "space-between"}
                alignItems={matchesMD ? "center" : undefined}
                sx={[classes.rowContainer, { width: "100%", mt: "15em", mb: "20em" }]}>
                <Grid item
                    container
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <Box component="img" alt="lightbulb" src={lightbuld} />
                    </Grid>
                </Grid>

                <Grid item
                    container
                    alignItems="center"
                    direction="column"
                    sx={{ maxWidth: "25em", mt: matchesSM ? "10em" : 0, mb: matchesSM ? "10em" : 0 }}
                >
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <Box component="img" alt="stopwatch" src={stopwatch} />
                    </Grid>
                </Grid>

                <Grid item
                    container
                    alignItems="center"
                    direction="column">
                    <Grid item>
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <Box component="img" alt="cash" src={cash} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item
                container
                direction={matchesMD ? "column" : "row"}
                alignItems={matchesMD ? "center" : undefined}
                justifyContent="space-around"
                sx={classes.rowContainer}
            >
                <Grid
                    item
                    container
                    direction={matchesMD ? "column" : "row"}
                    alignItems={matchesMD ? "center" : undefined}
                    sx={[classes.itemContainer, { mb: matchesMD ? "15em" : 0 }]} xs={12} md={6}>
                    <Grid
                        item
                        container
                        direction="column"
                        xs={12} md={6}>
                        <Grid item>
                            <Typography
                                variant="h4"
                                align={matchesMD ? "center" : undefined}
                            >
                                Digital Documents & Data
                            </Typography>
                        </Grid>
                        <Grid item
                            sx={{ maxWidth: matchesMD ? "100%" : "28em" }}>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : undefined}
                                sx={{ mb: 2 }}
                            >
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : undefined}
                                sx={{ mb: 2 }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum, voluptatibus fuga dolorum eos error
                                libero velit hic delectus repellat, minima, quis quod?
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : undefined}
                                sx={{ mb: 2 }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Iusto ad reiciendis, ratione excepturi consequuntur
                                unde facilis quas aperiam!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}>
                        <Lottie options={documentsOptions} />
                    </Grid>
                </Grid>
                <Grid item
                    container
                    direction={matchesMD ? "column" : "row"}
                    alignItems={matchesMD ? "center" : undefined}
                    sx={classes.itemContainer} xs={12} md={6}>
                    <Grid item xs={12} md={6}
                        sx={{ maxHeight: 260, maxWidth: 280 }}>
                        <Lottie options={scaleOptions} />
                    </Grid>
                    <Grid item container alignItems="right"
                        direction="column"
                        xs={12} md={6}>
                        <Grid item>
                            <Typography
                                align={matchesMD ? "center" : "right"}
                                variant="h4">Scale</Typography>
                        </Grid>
                        <Grid item
                            sx={{ maxWidth: matchesMD ? "100%" : "28em" }}>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : "right"}
                                sx={{ mb: 2 }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum, voluptatibus fuga dolorum eos error
                                libero velit hic delectus repellat, minima, quis quod?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { my: "16em" }]}
            >
                <Grid item container direction="column" alignItems="center"
                    sx={{ width: "100%" }}>
                    <Grid item>
                        <Box component="img" alt="tree with roots extending out" src={roots}
                            sx={{
                                height: matchesMD ? "18em" : "35em",
                                width: matchesMD ? "18em" : "35em"
                            }}
                        />

                    </Grid>

                    <Grid item
                        sx={{ maxWidth: matchesMD ? "100%" : "28em" }}>
                        <Typography variant="h4" align="center" gutterBottom>Root-Couse Analysis</Typography>
                        <Typography variant="body1"
                            align="center"
                            sx={{ mb: 2 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{ mb: 2 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum accusamus commodi
                            dignissimos? Repudiandae dicta voluptatibus maiores?
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item
                container
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                justifyContent="space-around"
                sx={[classes.rowContainer, { mb: "10em" }]}
            >
                <Grid
                    item
                    container
                    direction={matchesMD ? "column" : "row"}
                    alignItems={matchesMD ? "center" : undefined}
                    sx={[classes.itemContainer, { mb: matchesMD ? "15em" : 0 }]} xs={12} md={6}>
                    <Grid item container direction="column" xs={12} md={6}>
                        <Grid item>
                            <Typography variant="h4"
                                align={matchesMD ? "center" : undefined}
                            >Automation</Typography>
                        </Grid>
                        <Grid item
                            sx={{ maxWidth: matchesMD ? "100%" : "28em" }}>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : undefined}
                                sx={{ mb: 2 }}
                            >
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : undefined}
                                sx={{ mb: 2 }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum, voluptatibus fuga dolorum eos error
                                libero velit hic delectus repellat, minima, quis quod?
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : undefined}
                                sx={{ mb: 2 }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Iusto ad reiciendis, ratione excepturi consequuntur
                                unde facilis quas aperiam!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{ maxHeight: 290, maxWidth: 280 }}>
                        <Lottie options={automationOptions} />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction={matchesMD ? "column" : "row"}
                    alignItems={matchesMD ? "center" : undefined}
                    sx={classes.itemContainer} xs={12} md={6}>
                    <Grid item xs={12} md={6}
                        sx={{ maxHeight: 310, maxWidth: 155 }}>
                        <Lottie options={uxOptions} />
                    </Grid>
                    <Grid item container alignItems="right" direction="column" xs={12} md={6}>
                        <Grid item>
                            <Typography

                                align={matchesMD ? "center" : "right"}
                                variant="h4">User Experiance Design</Typography>
                        </Grid>
                        <Grid item
                            sx={{ maxWidth: matchesMD ? "100%" : "28em" }}>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : "right"}
                                sx={{ mb: 2 }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum, voluptatibus fuga dolorum eos error
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : "right"}
                                sx={{ mb: 2 }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum, voluptatibus fuga dolorum eos error Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                align={matchesMD ? "center" : "right"}
                                sx={{ mb: 2 }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum, voluptatibus fuga dolorum eos error
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid >
    )
}

export default CustomSoftware