import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import analytics from "../assets/analytics.svg"
import seo from "../assets/seo.svg"
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'

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
    parapgraphContainer: {
        maxWidth: "30em"
    }
}

const Websites = (props) => {

    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Grid
            container
            direction="column">
            <Grid item
                container
                direction={matchesMD ? "column" : "row"}
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
                            to="/mobileapps"
                            onClick={() => props.setSelectedIndex(2)}
                            sx={{ bgcolor: 'transparent' }}>
                            <Box
                                component="img"
                                alt="Back to iOS/AndroidApp Development Page"
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
                            Website Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                            ad voluptatum reprehenderit nobis vel?

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
                            Officiis quidem quis ipsum? dolor sit amet consectetur
                        </Typography>

                    </Grid>
                </Grid>
                {!matchesMD &&
                    (<Grid item sx={classes.arrowContainer}>

                        <IconButton
                            component={Link}
                            to="/services"
                            onClick={() => props.setSelectedIndex(0)}
                            sx={{ bgcolor: 'transparent' }}>
                            <Box
                                component="img"
                                alt="Forward to Services Page"
                                src={forwardArrow}
                            />
                        </IconButton>
                    </Grid>)}
            </Grid>
            <Grid
                item
                container
                direction={matchesMD ? "column" : "row"}
                alignItems="center"
                sx={[classes.rowContainer, { mt: "15em" }]}
            >
                <Grid item>
                    <Grid
                        container
                        direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>Analytics</Typography>
                        </Grid>
                        <Grid item>
                            <Box
                                component="img"
                                alt="Graph with magnifying glass revealing 1's and 0's"
                                src={analytics}
                                sx={{ ml: "-2.75em" }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        sx={classes.parapgraphContainer}>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ "mb": 2 }}
                        > Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nam molestias nisi magni a cum adipisci eaque, illum alias eveniet,
                            facere voluptatem dolore? a cum adipisci eaque, illum alias eveniet,
                            facere voluptatem dolore?
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesMD ? "column" : "row"}
                alignItems="center"
                justifyContent="flex-end"
                sx={[classes.rowContainer, { mb: "15em", mt: "15em" }]}
            >
                <Grid item>
                    <Grid
                        container
                        direction="column">
                        <Grid item sx={{ ml: "1em" }}>
                            <Typography align="center" variant="h4" gutterBottom>E-Commerce</Typography>
                        </Grid>
                        <Grid item>
                            <Box
                                component="img"
                                alt="world outline made of dollar signs"
                                src={ecommerce}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        sx={[classes.parapgraphContainer, { ml: matchesMD ? 0 : "1em" }]}>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ "mb": 2 }}
                        > Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ "mb": 2 }}
                        > Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nam molestias nisi magni a cum adipisci eaque, illum alias eveniet,
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesMD ? "column" : "row"}
                alignItems="center"
                sx={classes.rowContainer}
            >
                <Grid item>
                    <Grid
                        container
                        direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <Box
                                component="img"
                                alt="Megaphone"
                                src={outreach}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={[classes.parapgraphContainer, { ml: matchesMD ? 0 : "1em" }]}>
                    <Typography variant="body1"
                        component="p"
                        align={matchesMD ? "center" : undefined}
                        sx={{ "mb": 2 }}
                    > Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam molestias nisi magni a cum adipisci eaque, illum alias eveniet,
                        facere voluptatem dolore? a cum adipisci eaque, illum alias eveniet,
                        facere voluptatem dolore?
                    </Typography>


                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesMD ? "column" : "row"}
                alignItems="center"
                justifyContent="flex-end"
                sx={[classes.rowContainer, { mb: "15em", mt: "15em" }]}
            >
                <Grid item>
                    <Grid
                        container
                        direction="column">
                        <Grid item sx={{ ml: "1em" }}>
                            <Typography align="center" variant="h4" gutterBottom>
                                Search Engine <br /> Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box
                                component="img"
                                alt="website standing on winner's podium"
                                src={seo}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        sx={[classes.parapgraphContainer, { ml: matchesMD ? 0 : "1em" }]}>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ "mb": 2 }}
                        > Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ "mb": 2 }}
                        > Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nam molestias nisi magni a cum adipisci eaque, illum alias eveniet,
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align={matchesMD ? "center" : undefined}
                            sx={{ "mb": 2 }}
                        > Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nam molestias nisi magni a cum adipisci eaque, illum alias eveniet,
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )
}

export default Websites