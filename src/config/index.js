// 本文件用于初始化网络请求，无需更改
import axios from "axios";
import { apis } from "@/api";
// 创建axios实例
const service = axios.create({
  baseURL: apis.baseURL, // api的base_url
  timeout: 60000, // 请求超时时间
  responseType: "json",
  headers: {}
});
// request拦截器
service.interceptors.request.use(
  config => {
    if (config.url.indexOf("/api-cms-") > 0 || config.url.indexOf("/api-wage-") > 0) {
      config.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
    } else {
      config.headers = { "Content-Type": "application/json;charset=UTF-8" };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    const result = response.data;
    // token是否过期
    if (result.message === 'token failure!') {
      localStorage.removeItem('token')
      localStorage.removeItem('UserName')
      localStorage.removeItem('Password')
      localStorage.removeItem('token')
      window.location.href = '#/'
    } else {
      if (
        result.code &&
        result.code != "0" &&
        result.code != 0 &&
        response.status != "200" &&
        response.status != 200 &&
        result.state != "200" &&
        result.state != 200 &&
        result.statusCode != "200" &&
        result.statusCode != 200 &&
        result.code != "200" &&
        result.code != 200 &&
        result.status != "200" &&
        result.status != 200 &&
        result.code != "2000" &&
        result.code != 2000
      ) {
        $message.error(result.msg ? result.msg : result.message);
        return Promise.resolve(result);
      }
    }
    // 业务失败，需要跳转到404页面
    return response;
  },
  error => {
    $message.error("网络连接失败");
    return Promise.reject(error);
  }
);
export default service;