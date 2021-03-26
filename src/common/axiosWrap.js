/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:17:33
 * @LastEditTime: 2021-03-19 01:25:03
 * @LastEditors: zhangyanlong
 * @Description:
 */
import axios from 'axios';
import { message } from 'antd';
import { camelCase2UnderScoreCase } from './utils';

const axiosWrap = axios.create({
  baseURL: '/api',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截
axiosWrap.interceptors.request.use((config) => {
  const temp = config;
  const token = '';
  temp.headers['X-Token'] = token;
  if (config.method === 'get') {
    temp.params = camelCase2UnderScoreCase(config.params);
  }
  if (config.method === 'post') {
    temp.data = camelCase2UnderScoreCase(config.data);
  }
  console.log(temp);
  return temp;
});

// 添加响应拦截器
axiosWrap.interceptors.response.use((res) => {
  const { code, data, msg } = res.data;
  if (code !== '0') {
    message.error(msg);
    return Promise.reject(msg);
  } if (!data) {
    message.success(msg);
  }
  return data;
},
(error) => {
  message.error('网络请求错误，请稍候再试');
  Promise.reject(error);
});

export default axiosWrap;
