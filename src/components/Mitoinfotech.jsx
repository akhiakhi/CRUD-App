import {Box,makeStyles} from "@material-ui/core";
import Flower from "../Assets/Images/Flower.jpg";

const useStyle= makeStyles({
    image: {
        width: '100%',
        height: '60%'
    }
})
const Mitoinfotech=()=>{
    const classes= useStyle();
    return(
         <Box style={{display:'flex'}}>
         <img className={classes.image}src={Flower} />

         </Box>
    )
};
export default Mitoinfotech;