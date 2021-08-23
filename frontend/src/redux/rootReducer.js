import {combineReducers} from 'redux';
import postReducer from './PostView/postReducer';
import userReducer from './Users/userReducer';

export default combineReducers(
    {
        post:postReducer,
        user:userReducer,
    }
)
