import { CircularProgress,createTheme,makeStyles, ThemeProvider } from '@material-ui/core';
import React, { lazy } from 'react';
import { Suspense } from 'react';
import {  BrowserRouter as Router , Redirect, Route, Switch, withRouter} from 'react-router-dom';
const outertheme = createTheme({
  palette:{
    
    background:{
      default:'#222222',
    }
  },
 
});


const PostView = lazy(()=> import('../pages/PostView'))
const PostDetails = lazy(()=> import('../pages/PostDetailView'))
const UserDetails = lazy(()=> import('../pages/UserDetails'))
const AdminRoutes = withRouter(({location})=>{
    
    return (
      <ThemeProvider theme={outertheme}>
        <Router>
          <Suspense fallback={<div><CircularProgress/></div>}>
            <Switch>
              <Route exact path="/" component={PostView}></Route>
              <Route exact path="/postDetails/:id" component={PostDetails}></Route>
              <Route exact path="/userDetails/:id" component={UserDetails}></Route>
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    )
}) 

export default AdminRoutes