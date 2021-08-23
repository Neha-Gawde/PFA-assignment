const initialState={
    post:{},
    error_msg:null,
    success_msg:null,
    loading:true,
    isSuccess:false,
}

const postReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_GETPOST_SUCCESS":
            return{
                
                ...state,
                post:action.payload,
                loading:false,  
                
            }
        default:{
            return{
                ...state
            }
        }    
    }
}

export default postReducer;
