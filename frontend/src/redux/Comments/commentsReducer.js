const initialState={
    postcomments:{},
    error_msg:null,
    success_msg:null,
    loading:true,
    isSuccess:false,
}

const postCommentsReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_GET_INDIVIDUAL_POST_COMMENTS_SUCCESS":
            return{
                
                ...state,
                postcomments:action.payload,
                loading:false,  
                
            }
        default:{
            return{
                ...state
            }
        }    
    }
}

export default postCommentsReducer;
