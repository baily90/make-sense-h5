/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:23:25
 * @LastEditTime: 2021-03-19 00:33:06
 * @LastEditors: zhangyanlong
 * @Description:
 */
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    style: 'css',
  }),
);
