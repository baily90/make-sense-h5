/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:46:14
 * @LastEditTime: 2021-03-19 01:53:46
 * @LastEditors: zhangyanlong
 * @Description:
 */
import Home from '../views/home';
import Error404 from '../views/404';

export default [
  { path: '/home', component: Home },
  { path: '/404', component: Error404 },
];
