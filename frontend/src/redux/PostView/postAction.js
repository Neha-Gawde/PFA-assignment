import { BASE_URL, POST } from '../../services/APIEndpoints';
import { APIServices } from '../../services/APIServices';
import cogoToast from 'cogo-toast';

export const onGetPost = ()=>{

    return async(dispatch)=>{
        const url = BASE_URL + POST
        const res = await new APIServices().get(url)
        .then((res)=>{
            // console.log(res.results)
            dispatch(onGetPostSuccess(res.results))
        })
        .catch((error)=>{
            console.log(error)
            //cogo toast message
        })
    }

}


export const onGetPostSuccess = (data)=>{
    return{
        type:"ON_GETPOST_SUCCESS",
        payload:data
    }
}

