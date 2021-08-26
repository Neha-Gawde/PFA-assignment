const initialState={
    user:{},
    error_msg:null,
    success_msg:null,
    loading:true,
    isSuccess:false,
}

const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_GETUSER_SUCCESS":
            return{
                
                ...state,
                user:action.payload,
                loading:false,  
                
            }
        case "ON_GET_INDIVIDUAL_USER_SUCCESS":
            return{
                
                ...state,
                user:action.payload,
                loading:false,  
                
            }
        default:{
            return{
                ...state
            }
        }    
    }
}

export default userReducer;
