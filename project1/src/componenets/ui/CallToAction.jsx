import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ButtonArrow from "./ButtonArrow"
import useMediaQuery from '@mui/material/useMediaQuery';

import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'


const classes = {
    learnButton: (theme) => ({
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 2.5,
        [theme.breakpoints.down("md")]: {
            mb: "2em"
        }
    }),
    background: (theme) => ({
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
        },

    }),
    estimateButton: (theme) => ({
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        bgcolor: theme.palette.common.arcOrange,
        fontSize: "1.5rem",
        mr: "5em",
        ml: "2em",
        [theme.breakpoints.down("md")]: {
            mr: 0,
            ml: 0,
        },
        "&:hover": {
            bgcolor: theme.palette.secondary.light
        }
    })

}



const CallToAction = (props) => {
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <Grid
            container
            direction={matchesMD ? "column" : "row"}
            alignItems="center"
            justifyContent={matchesMD ? "center" : "space-between"}
            sx={classes.background}
        >
            <Grid item sx={{ ml: matchesMD ? 0 : "5em", textAlign: matchesMD ? "center" : "inherit" }}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software.
                            <br />
                            Revolutionary Results
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontSize: "1.5rem" }}>
                            Take advantage of the 21st century.
                        </Typography>
                        <Grid
                            container
                            item
                            justifyContent={matchesMD ? "center" : undefined}
                        >
                            <Button
                                component={Link} to="/revolution"
                                onClick={() => props.setValue(2)}
                                variant='outlined'
                                sx={classes.learnButton}>
                                <span style={{ marginRight: 5 }}>Learn more</span>
                                <ButtonArrow
                                    width={15}
                                    height={15}
                                    fill={theme.palette.common.arcBlue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button
                    component={Link} to="/estimate"
                    onClick={() => props.setValue(5)}
                    variant='contained'
                    sx={classes.estimateButton}>
                    Free Estimate
                </Button>
            </Grid>

        </Grid>
    )
}

export default CallToAction