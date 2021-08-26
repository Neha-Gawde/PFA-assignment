import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { onGeIndividualUser } from '../redux/Users/userAction';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
    paper:{
        
        borderRadius: "10px",
        backgroundColor:"#Ecf3f9",
        
        marginLeft:theme.spacing(20),
        marginRight:theme.spacing(20)
    },
}));
function UserDetails(props) {
    const classes = useStyles()
    console.log(props)
    const userId = props.location.state.userId;
    console.log(userId)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(onGeIndividualUser(userId))
    },[])
    const userInfo = useSelector(state => {return state.user})
    const {loading , user} = userInfo;
    console.log(user)
    const handleClick = () =>{
        let path = "/"
        props.history.push(path)
    }
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={2} sm={2} lg={2}>
                    <ArrowBackIosIcon onClick={handleClick}> </ArrowBackIosIcon>
                </Grid>
                <Grid item xs={1} sm={1} lg={1}>
                 
                </Grid>
                <Grid item xs={6} sm={6} lg={6}>
                    <h3><strong>User Details</strong></h3>
                </Grid>
            </Grid>
            
           
            <Paper className={classes.paper}>
              
                <Grid container spacing={3}>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>
                    <Grid item xs={3} lg={3}>
                       <label><strong>User Name</strong></label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
 
                       <label>{user?.username}</label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>  
                </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>
                    <Grid item xs={3} lg={3}>
                       <label><strong>Name</strong></label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
 
                       <label style={{textTransform:'capitalize'}}>{user?.name}</label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>  
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>
                    <Grid item xs={3} lg={3}>
                       <label><strong>Email</strong></label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
 
                       <label style={{textTransform:'capitalize', justifyContent:'center'}}>{user?.email}</label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>  
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>
                    <Grid item xs={3} lg={3}>
                       <label><strong>Website</strong></label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
 
                       <label style={{textTransform:'capitalize', justifyContent:'center'}}>{user?.website}</label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>  
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>
                    <Grid item xs={3} lg={3}>
                       <label><strong>Company Name</strong></label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
 
                       <label style={{textTransform:'capitalize', justifyContent:'center'}}>
                           {user?.company?.name}
                       </label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>  
                </Grid>
            </Paper>
        </div>
    )
}

export default UserDetails
