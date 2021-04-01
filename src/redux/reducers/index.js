/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:09:46
 * @LastEditTime: 2021-03-19 01:13:05
 * @LastEditors: zhangyanlong
 * @Description:
 */
import { combineReducers } from 'redux';
import setting from './setting';
import engineer from './engineer';
import mainBatch from './mainBatch';
import subBatch from './subBatch';

export default combineReducers({
  setting, engineer, mainBatch, subBatch,
});
