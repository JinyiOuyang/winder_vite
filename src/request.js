import axios from 'axios'
import {ElNotification} from "element-plus";

const request = axios.create({
    baseURL: 'http://Winderspringboot-env.eba-tbnygysj.us-east-2.elasticbeanstalk.com ',
    timeout: 5000
})

request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';


    return config
}, error => {
    return Promise.reject(error)
});

request.interceptors.response.use(
    response => {
        let res = response.data;
        if (response.config.responseType === 'blob') {
            return res
        }
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.log(error) // for debug
        if(error.response.status !== 200) {
            ElNotification({
                type: 'error',
                message: 'Something Wrong！'
            })
        }
        return Promise.reject(error)
    }
)


export default request