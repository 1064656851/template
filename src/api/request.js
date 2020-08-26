import axios from 'axios';
import Vue from 'vue'
import router from '@/router'

// 创建axios实例
const service = axios.create({
    timeout: 100000 * 30,
    withCredentials: true,
    headers: {
        'tokenId':sessionStorage.getItem('tokenId'),
        'source':sessionStorage.getItem('source'),
        // 'Content-Type': 'application/json; charset=utf-8'
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

// request拦截器
service.interceptors.request.use(config => {
    let tokenId = sessionStorage.getItem('tokenId');
    let source = sessionStorage.getItem('source');
    if(tokenId && tokenId!=null && tokenId!="" && config.url.indexOf("login") == -1  ){
      config.headers['tokenId'] = tokenId;
    }
    if(source && source!=null && source!="" && config.url.indexOf("login") == -1  ){
      config.headers['source'] = source;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// response拦截器
// service.interceptors.response.use(response => {
//     console.log(response)
//     if (response.data && response.data.code === -1 ||
//         response.data && response.data.code === 401) { // -1, token失效 401 没有token
//         Vue.cookie.delete('token');
//         Vue.router.push({name: 'login'});
//     }
//     return response;
// }, error => {
//     return Promise.reject(error);
// });
service.interceptors.response.use(response => {
    if (response.data && response.data.code == '5') { // 5, Token 不存在或过期 重新登录,直接跳至本系统登录页
        sessionStorage.clear();
        router.replace('/login')
        this.$Message.destroy()
    }else if(response.data && response.data.code == '6'){ //6, Token 不存在或过期 重新登录,直接跳至主系统登录页（Token7小时有效）
        sessionStorage.clear();
        sessionStorage.setItem('data',response.data.result);
        sessionStorage.setItem('msg',response.data.msg);
        router.replace('/default')
        this.$Message.destroy()
    }
    return response;
}, error => {
    // if(error.response.status ==401){
    // // this.$Message.loading("缓存过期或账号在其他位置使用，请从新登录！");
    //   Vue.cookie.delete('token')
    //   window.location.href="/";
    //   return response;
    // }
    return Promise.reject(error);
});

export default service;
