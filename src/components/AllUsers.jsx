import { TableBody,TableCell,TableHead,TableRow,Table,makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import {getUsers} from "../Services/api";

const useStyle= makeStyles({
  table:{
    width: "90%",
    margin: "50px 0 0 50px"
  },
  thead:{
    '& > *':{
        background: "black",
        color: "white",
        fontSize: 20
    }
  }
})

const AllUsers=()=>{

  const [users,setUsers]= useState([]);
  const classes= useStyle();

  useEffect(()=>{
    getAllUsers();
  },[])

  const getAllUsers =async()=>{
    const response=await getUsers();
    console.log(response.data);
    setUsers(response.data);
  }
    return(
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
          </TableRow>
          <TableBody>
            {
              users.map(user=>(
                <TableRow>
                  <TableCell>{users.id}</TableCell>
                  <TableCell>{users.name}</TableCell>
                  <TableCell>{users.username}</TableCell>
                  <TableCell>{users.email}</TableCell>
                  <TableCell>{users.mobile}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TableHead>
      </Table>
    )
};
export default AllUsers;