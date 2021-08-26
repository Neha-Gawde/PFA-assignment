import {combineReducers} from 'redux';
import postCommentsReducer from './Comments/commentsReducer';
import postReducer from './PostView/postReducer';
import userReducer from './Users/userReducer';

export default combineReducers(
    {
        post:postReducer,
        user:userReducer,
        postcomments: postCommentsReducer
    }
)
