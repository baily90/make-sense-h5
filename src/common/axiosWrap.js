/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:17:33
 * @LastEditTime: 2021-03-19 01:25:03
 * @LastEditors: zhangyanlong
 * @Description:
 */
import axios from 'axios';
import { message } from 'antd';

const axiosWrap = axios.create({
  baseURL: '',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截
axiosWrap.interceptors.request.use((config) => {
  const temp = config;
  // const token = store.getState().user.token || localStorage.getItem('token');
  const token = '';
  temp.headers['X-Token'] = token;
  return temp;
});

// 添加响应拦截器
axiosWrap.interceptors.response.use((res) => {
  const { code, data, msg } = res.data;
  if (code !== 0) {
    message.error(msg);
    return Promise.reject(msg);
  }
  return data;
},
(error) => {
  message.error(error);
  Promise.reject(error);
});

export default axiosWrap;
