import Axios, {AxiosRequestConfig} from 'axios';

export interface Credentials {
    email:string,
    password:string,
}

export const onLogin = async (data:Credentials) => {
    const requestConfig:AxiosRequestConfig = {
        method:"POST",
        url:'Login',
        data,
    }

    try {
        const {data:response } = await Axios.request(requestConfig);
    } catch(e) {
        console.error(e);
        return {error:e.response.data.message}
    }
}