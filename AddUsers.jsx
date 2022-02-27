import { InputLabel,FormGroup,FormControl,Input,Button,makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    container:{
        width: '50%'
    }
})

const AddUsers=()=>{
    const classes= useStyle();
    return(
        <FormGroup className={classes.container}>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Mobile</InputLabel>
                <Input />
            </FormControl>
            <Button>Add Users</Button>
        </FormGroup>
    )
};
export default AddUsers; 