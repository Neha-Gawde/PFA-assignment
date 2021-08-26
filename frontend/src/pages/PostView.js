import { Box, Grid, InputBase, makeStyles, Paper, Table, ThemeProvider, TableBody, TableCell, TableHead, TableRow, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux'
import { onGetPost } from '../redux/PostView/postAction'
import { onGetUser } from '../redux/Users/userAction'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
    paper:{
        
        borderRadius: "10px",
        backgroundColor:"#Ecf3f9",
        height:80
    },
    search: {
       marginLeft:theme.spacing(-20),
       marginTop:theme.spacing(1)
      },
      searchIcon: {
        marginRight:theme.spacing(50),
        marginTop:theme.spacing(1.5)
      },

}))
const columns = [
    {id: 'postid', label: 'Post Id', minWidth: 170, fontWeight:'bold', backgroundColor:'white', color: '#2d3667', align:'center'},
    {id: 'postid', label: 'Post Title', minWidth: 170, fontWeight:'bold', backgroundColor:'white', color: '#2d3667',align:'center'},
    {id: 'postid', label: 'User Id', minWidth: 170, fontWeight:'bold', backgroundColor:'white', color: '#2d3667',align:'center'},
    
    // {id: 'topicfile', label: 'Topic File', minWidth: 170, fontWeight:'bold', backgroundColor:'white', color: '#2d3667'},
    // {id: 'action', label: 'Action', minWidth: 170, fontWeight:'bold', backgroundColor:'white', color: '#2d3667'},
  ];
function PostView() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [search, searchItem] = useState("");
    useEffect(() => {
       dispatch(onGetPost())
       dispatch(onGetUser())
    }, [])
    const postList = useSelector((state) => {return state.post})
    const {loading , post} = postList
    const userList = useSelector((state) => {return state.user})
    const {loading2 , user} = userList
    console.log(post)
    //console.log(post?.filter((data)=> user?.map(e=>e.id).includes(data.userId)))
    //console.log(user?.filter((data)=> post?.map(e=>e.userId).includes(data.id)).map(el=>el.username))
    console.log(user)
    const query = (rows) => {
        const columns = ["title"]
        return rows?.filter(row =>
            columns.some(column => (row[column])?.toString().toLowerCase().indexOf(search.toLowerCase()) > -1)
  
        )
    }
    return (
        <div>
           <div style={{marginRight:0, marginTop:10}}>
                <Box bgcolor='white' style={{marginLeft:520,border:"1px solid rgba(0, 0, 0, 0.274)", height:50, width:450, borderRadius:10}}>
                        
                    <SearchIcon className={classes.searchIcon} />
                    <div style={{marginTop:-40}}>
                        <InputBase className={classes.search} placeholder="Search">
                        </InputBase>
                        
                    </div>
                </Box>
            
            </div>
           {/* <Grid container item spacing={3} className="grid">
            {post.length > 0 ?
               query(post).map((el,i)=>{
                    return (
                        <Grid item xs={12} lg={6} xl={5.5} key={i}>
                            <Paper className={classes.paper}>
                                <Grid item xs={12} lg={3}>
                                    <span className="title">{el.title}</span>                                   
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <span>{user?.filter((data)=> el.userId.includes(data.id)).map(el=>el.username)}</span>
                                </Grid> 
                                <Grid item xs={12} lg={3}>

                                </Grid>
                                <Grid item xs={12} lg={3}>

                                </Grid>     
                            </Paper>
                        </Grid>

                    )
                })
             
            :<p>No data found</p>
            }
            
           </Grid> */}
            <Paper elevation={3} className={
                classes.topicpaper}>
                
                {loading?<div className={classes.loading}><CircularProgress/></div>:
                <Table className={classes.head} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth, fontWeight:column.fontWeight, backgroundColor:column.backgroundColor, color:column.color }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {post && post.length>0 
                        ? query(post).map((element, index)=>(
                        <TableRow key={index}>
                            
                            <TableCell align="center">{element.id}</TableCell>
                            <TableCell align="center" className={classes.fontcolor} component={Link} to={{pathname:`/postDetails/${element.id}`, state:{userId:element.userId}}}>{element.title}</TableCell>
                            <TableCell align="center"component={Link} to={{pathname:`/userDetails/${element.id}`, state:{userId:element.userId}}}>{element.userId}</TableCell>
                        </TableRow>
                    )):<div className={classes.nodata}><p>No Record Found</p></div>}
                </TableBody>
                </Table>}  
                
            </Paper>
        </div>
    )
}

export default PostView
