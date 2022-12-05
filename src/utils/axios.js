import axios from "axios";

//设置请求超时时间
axios.defaults.timeout = 10000;

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//返回其他状态吗
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500; // 默认的
};
//请求发送前相关配置
axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error)
});
//请求结果处理相关配置
axios.interceptors.response.use(res => {
    return res;
}, error => {
    return Promise.reject(new Error(error));
});

export default axios;