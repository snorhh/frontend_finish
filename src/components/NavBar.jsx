import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from 'react-router-dom';
import '../index.css';

// Codes used:
// https://www.geeksforgeeks.org/how-to-create-a-navigation-bar-with-material-ui/
// https://muhimasri.com/blogs/how-to-create-button-link-with-mui/ 
// https://www.shecodes.io/athena/43505-how-to-place-two-buttons-side-by-side-in-html-css
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const small = useMediaQuery("(max-width:600px)");
    const full = useMediaQuery("(min-width:600px)");
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    {full && (
                        <>
                            <Typography
                                variant="h6"
                                color="inherit"
                            >
                                Fitness Center
                            </Typography>

                            <div className='navBar'>
                                <div className='customers'>
                                    <Button variant="contained" component={Link} to="/customers">
                                        Customers
                                    </Button>
                                </div>

                                <div className='trainings'>
                                    <Button variant="contained" component={Link} to="/trainings">
                                        Trainings
                                    </Button>
                                </div>

                            </div>


                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
