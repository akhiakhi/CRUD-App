import {AppBar,Toolbar,makeStyles} from "@material-ui/core";
import App from "../App";
import { NavLink } from "react-router-dom";

const useStyle= makeStyles({
    header:{
        background: "black"
    },
    tabs:{
        color: "white",
        textDecoration: "none",
        marginRight: 20,
        fontSize: 20
    },
})
const Navbar = () =>{
    const classes= useStyle();
return(
    <AppBar className={classes.header} position="static">
       <Toolbar>
           <NavLink className={classes.tabs}to="./" exact>Mitoinfotech</NavLink>
           <NavLink className={classes.tabs} to="AllUsers" exact>AllUsers</NavLink>
           <NavLink className={classes.tabs} to="AddUsers" exact>AddUsers</NavLink>
        </Toolbar>
    </AppBar>
)
};
export default Navbar;