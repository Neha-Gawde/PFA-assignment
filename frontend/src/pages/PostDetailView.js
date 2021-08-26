import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import { onGeIndividualUser, onGetUser } from '../redux/Users/userAction';
import { onGetIndividualPost, onGetPost } from '../redux/PostView/postAction';
const useStyles = makeStyles((theme)=>({
    paper:{
        
        borderRadius: "10px",
        backgroundColor:"#Ecf3f9",
        
        marginLeft:theme.spacing(20),
        marginRight:theme.spacing(20)
    },
}));
function PostDetailView(props) {
    console.log(props)
    const userId = props.location.state.userId;
    console.log(userId)

    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(userId)
        dispatch(onGeIndividualUser(userId))
        dispatch(onGetIndividualPost(props.match.params.id))
    },[])
    const userList = useSelector(state => {return state.user})
    const {loading , user} = userList;
    const postList = useSelector((state) => {return state.post})
    const {loading2 , post} = postList
    // console.log(JSON.parse(user)?.filter(({id})=> id === userId))
    console.log(post)
    console.log(user)
    return (
        <div>
            <h3><strong>Post Details</strong></h3>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>
                    <Grid item xs={3} lg={3}>
                       <label><strong>Title of post</strong></label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
 
                       <label style={{textTransform:'capitalize'}}>{post?.title}</label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>  
                </Grid>
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
                       <label><strong>Body</strong></label>
                    </Grid>
                    <Grid item xs={9} lg={3}>
 
                       <label style={{textTransform:'capitalize', justifyContent:'center'}}>{post?.body}</label>
                    </Grid>
                    <Grid item xs={3} lg={3}>
                     
                    </Grid>  
                </Grid>
            </Paper>
        </div>
    )
}

export default PostDetailView
