import Lottie from "react-lottie"
import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'
import technologyAnimation from '../animations/technologyAnimation/data.json'

const classes = {
    rowContainer: (theme) => ({
        pl: "5em",
        pr: "5em",
        [theme.breakpoints.down("md")]: {
            pl: "1.5em",
            pr: "1.5em",
        }
    })
}

const Revolution = () => {

    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    const defaultOptions = {
        loop: true,
        // autoplay: true,
        animationData: technologyAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column">
            <Grid item sx={[classes.rowContainer, { mt: "2em" }]}>
                <Typography variant="h2" sx={{ fontFamily: "Pacifico" }}>The Revolution</Typography>
            </Grid>
            <Grid
                item
                alignItems="center"
                container
                direction="row"
                sx={classes.rowContainer}>
                <Grid item size={{ xs: 12, lg: 6 }}>
                    <Box
                        component="img"
                        alt="mountain through binoculars"
                        src={vision}
                        sx={{ maxWidth: "36em", mr: "5em" }}
                    />
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    size={{ xs: 12, lg: 6 }}
                    sx={{ maxwidth: "36em" }}
                >
                    <Grid item >
                        <Typography variant="h4" align="right" gutterBottom>Vision</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1"
                            component="p"
                            align="right"
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align="right"
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Esse ab reprehenderit odio deleniti quo.
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align="right"
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                            consequatur at. In, sequi? Doloremque accusantium enim voluptatibus officiis!
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align="right"
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam.
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align="right"
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum.
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align="right"
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            align="right"
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                alignItems="center"
                container
                direction="row"
                sx={classes.rowContainer}>
                <Grid
                    item
                    container
                    direction="column"
                    size={{ xs: 12, lg: 6 }}
                    sx={{ maxwidth: "36em" }}
                >
                    <Grid item >
                        <Typography variant="h4" gutterBottom>Technology</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1"
                            component="p"

                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Odit autem magni aliquam accusamus magnam fuga quod voluptatum. Eveniet, quod quia.
                        </Typography>
                        <Typography variant="body1"
                            component="p"

                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Esse ab reprehenderit odio deleniti quo.
                        </Typography>
                        <Typography variant="body1"
                            component="p"

                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                            consequatur at. In, sequi? Doloremque accusantium enim voluptatibus officiis!
                        </Typography>
                        <Typography variant="body1"
                            component="p"

                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam.
                        </Typography>
                        <Typography variant="body1"
                            component="p"
                            sx={{ mb: 2 }}
                        >
                            Wheter we're replacing old software or inventing new solution,
                            Arc Development is here to help your business tackle technology.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end" size={{ xs: 12, lg: 6 }}>
                    <Lottie options={defaultOptions} isStopped={true}
                        style={{ maxWidth: "36em", margin: 0 }}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justifyContent="center"
                sx={classes.rowContainer}>
                <Grid item>
                    <Typography variant="h4" gutterBottom>Process</Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { bgcolor: "#b3b3b3", height: "90em" }]}>
                <Grid item container direction="column" size={{ xs: 12, lg: 6 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                            sx={{ color: "#000", mt: "5em" }}
                        >Consultation</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Sapiente perferendis recusandae incidunt consectetur,
                            nisi rerum totam exercitationem deleniti dolore atque molestias.
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur.
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ex itaque qui veritatis nostrum minima debitis, praesentium,
                            iste nulla reprehenderit reiciendis modi aspernatur!
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }} sx={{ alignSelf: "center" }}>
                    <Box
                        component="img"
                        alt="handshake"
                        src={consultation}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { bgcolor: "#ff7373", height: "90em" }]}>
                <Grid item container direction="column" size={{ xs: 12, lg: 6 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                            sx={{ color: "#000", mt: "5em" }}
                        >Mockup</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Sapiente perferendis recusandae incidunt consectetur,
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ex itaque qui veritatis nostrum minima debitis, praesentium,
                            iste nulla reprehenderit reiciendis modi aspernatur!
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }} sx={{ alignSelf: "center" }}>
                    <Box
                        component="img"
                        alt="basic website design outline"
                        src={mockup}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { bgcolor: "#39b54a", height: "90em" }]}>
                <Grid item container direction="column" size={{ xs: 12, lg: 6 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                            sx={{ color: "#000", mt: "5em" }}
                        >Review</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Sapiente perferendis recusandae incidunt consectetur,
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ex itaque qui veritatis nostrum minima debitis, praesentium,
                            iste nulla reprehenderit reiciendis modi aspernatur!
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }} sx={{ alignSelf: "center" }}>
                    <Box
                        component="img"
                        alt="magnifying glacc"
                        src={review}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { bgcolor: "#a67c52", height: "90em" }]}>
                <Grid item container direction="column" size={{ xs: 12, lg: 6 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                            sx={{ color: "#000", mt: "5em" }}
                        >Design</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Sapiente perferendis recusandae incidunt consectetur,
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }} sx={{ alignSelf: "center" }}>
                    <Box
                        component="img"
                        alt="paint brush leaving stroke of paint"
                        src={design}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { bgcolor: "#39b54a", height: "90em" }]}>
                <Grid item container direction="column" size={{ xs: 12, lg: 6 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                            sx={{ color: "#000", mt: "5em" }}
                        >Review</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Sapiente perferendis recusandae incidunt consectetur,
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }} sx={{ alignSelf: "center" }}>
                    <Box
                        component="img"
                        alt="magnifying glass"
                        src={review}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { bgcolor: "#fbb03b", height: "90em" }]}>
                <Grid item container direction="column" size={{ xs: 12, lg: 6 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                            sx={{ color: "#000", mt: "5em" }}
                        >Build</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                            totam soluta libero, adipisci enim quibusdam ipsam quasi omnis modi, repellat magnam minus!
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam eum nemo ipsa delectus sed assumenda voluptatem!
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Magni, natus? Officia necessitatibus ab dolore possimus nam laudantium,
                            ut rerum architecto velit odio officiis voluptate temporibus itaque!
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }} sx={{ alignSelf: "center" }}>
                    <Box
                        component="img"
                        alt="building construction site"
                        src={build}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { bgcolor: "#c1272d", height: "90em" }]}>
                <Grid item container direction="column" size={{ xs: 12, lg: 6 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                            sx={{ color: "#000", mt: "5em" }}
                        >Launch</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?

                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Sapiente perferendis recusandae incidunt consectetur,
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }} sx={{ alignSelf: "center" }}>
                    <Box
                        component="img"
                        alt="rocker"
                        src={launch}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { bgcolor: "#8e45ce", height: "90em" }]}>
                <Grid item container direction="column" size={{ xs: 12, lg: 6 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                            sx={{ color: "#000", mt: "5em" }}
                        >Maintain</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.


                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Sapiente perferendis recusandae incidunt consectetur,
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }} sx={{ alignSelf: "center" }}>
                    <Box
                        component="img"
                        alt="rench tightening bolts"
                        src={maintain}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                sx={[classes.rowContainer, { bgcolor: "#29abe2", height: "90em" }]}>
                <Grid item container direction="column" size={{ xs: 12, lg: 6 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                            sx={{ color: "#000", mt: "5em" }}
                        >Iterate</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.


                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam veritatis, totam vitae alias repellendus dolore?
                            Sapiente perferendis recusandae incidunt consectetur,
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                maxWidth: "20em"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus doloremque voluptate perferendis,
                            natus voluptatem eius nostrum. Lorem ipsum dolor
                            sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, eveniet?
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }} sx={{ alignSelf: "center" }}>
                    <Box
                        component="img"
                        alt="falling dominos"
                        src={iterate}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Revolution