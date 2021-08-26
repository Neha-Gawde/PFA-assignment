import { BASE_URL, USERS } from '../../services/APIEndpoints';
import { APIServices } from '../../services/APIServices';
import cogoToast from 'cogo-toast';

export const onGetUser = ()=>{

    return async(dispatch)=>{
        const url = BASE_URL + USERS
        const res = await new APIServices().get(url)
        .then((res)=>{
            // console.log(res.results)
            dispatch(onGetUserSuccess(res.results))
        })
        .catch((error)=>{
            console.log(error)
            //cogo toast message
        })
    }

}
export const onGeIndividualUser = (id)=>{
    return async(dispatch)=>{
        const url = BASE_URL + USERS + `/${id}`
        const res = await new APIServices().get(url)
        .then((res)=>{
            console.log(res.results)
            dispatch(onGetIndividualUserSuccess(res.results))
        })
        .catch((error)=>{
            console.log(error)
            //cogo toast message
        })
    }

}

export const onGetUserSuccess = (data)=>{
    return{
        type:"ON_GETUSER_SUCCESS",
        payload:data
    }
}
export const onGetIndividualUserSuccess = (data)=>{
    return{
        type:"ON_GET_INDIVIDUAL_USER_SUCCESS",
        payload:data
    }
}

