import Lottie from 'react-lottie'
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonArrow from './ui/ButtonArrow';



import animationData from '../animations/landinganimation/data'


const classes = {

    mainContainer: {
        position: "absolute",
        width: "100%",
    },
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

    })
}



const LandingPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <Grid item>
                    <Grid container direction={"row"}>
                        <Grid item>
                            <Box>Bringing West Coast Technology <br />to the Midwest</Box>
                            <Grid container>
                                <Grid item>
                                    <Button variant='contained'>
                                        Free Estimate
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined'>
                                        Learn more
                                        <ButtonArrow width={15} height={15} fill="red" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Lottie
                                options={defaultOptions}
                                height={"100%"}
                                width={"100%"} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    )

}

export default LandingPage