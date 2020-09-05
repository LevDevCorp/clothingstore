import Axios, {AxiosRequestConfig} from 'axios';

export interface Credentials {
    email:string,
    password:string,
}

export interface CredentialsRegister {
    email:string,
    password:string,
    phoneNumber:string,
    city:string,
    address:string,
}

export const onLogin = async (data:Credentials) => {
    const requestConfig:AxiosRequestConfig = {
        method:"post",
        url:process.env.REACT_APP_API_BASE_URL + '/login',
        data,
    }

    try {
        const {data:response } = await Axios.request(requestConfig);
    } catch(e) {
        console.error(e);
        return {error:e.response.data.message}
    }
}

export const onRegister = async (data:CredentialsRegister) => {
    const requestConfig:AxiosRequestConfig = {
        method:"POST",
        url:process.env.REACT_APP_API_BASE_URL + '/login',
        data,
    }
    const {data:response } = await Axios.request(requestConfig);
    console.log(response);
    // try {
    // } catch(e) {
    //     console.error(e);
    //     return {error:e.response.data.message}
    // }
}