import axios from "axios";
const service = axios.create({
  timeout: 21000,
});

// 请求拦截器
service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      return response.data;
    }
    return Promise.reject(new Error("当前请求状态码非200，可能得到错误的数据"));
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default service;
