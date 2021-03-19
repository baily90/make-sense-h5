/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 00:39:51
 * @LastEditTime: 2021-03-19 00:51:17
 * @LastEditors: zhangyanlong
 * @Description:
 */
let routes = [];
const routerContext = require.context('./modules', true, /\.js$/);
routerContext.keys().forEach((router) => {
  if (router.indexOf('./index') === 0) {
    return;
  }
  const routerModule = routerContext(router);
  routes = [...routes, ...(routerModule.default || routerModule)];
});

export default routes;
