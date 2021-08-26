import { BASE_URL, COMMENTS, POST } from '../../services/APIEndpoints';
import { APIServices } from '../../services/APIServices';

export const onGetIndividualPostComments = (id)=>{

    return async(dispatch)=>{
        const url = BASE_URL + POST + `/${id}` + COMMENTS
        const res = await new APIServices().get(url)
        .then((res)=>{
            // console.log(res.results)
            dispatch(onGetIndividualPostCommentsSuccess(res.results))
        })
        .catch((error)=>{
            console.log(error)
            //cogo toast message
        })
    }

}


export const onGetIndividualPostCommentsSuccess = (data)=>{
    return{
        type:"ON_GET_INDIVIDUAL_POST_COMMENTS_SUCCESS",
        payload:data
    }
}