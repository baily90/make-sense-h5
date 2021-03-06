/*
 * @Author: zhangyanlong
 * @Date: 2021-03-19 01:25:51
 * @LastEditTime: 2021-03-19 01:25:52
 * @LastEditors: zhangyanlong
 * @Description:
 */
export default {
  engineer: {
    getEngineerList: '/user/list',
    getEngineerDetail: '/user/detail',
    getEngineerConfig: '/user/config',
    addUser: '/user/add',
    updateUser: '/user/update',
    resetPassword: '/user/password/change',
    destoryEngineer: '/user/cancel',
  },
  mainBatch: {
    getMianPatchList: '/batch/list',
    getPositionList: '/batch/region/positions',
    getCheckNumbers: '/batch/check/numbers',
    addBatch: '/batch/add',
    editInfo: '/batch/edit/info',
    batchAllot: '/batch/allot',
    batchDetail: '/batch/detail',
    stopTagging: '/batch/stop/tagging',
  },
  subBatch: {
    getSubBatchList: '/subBatch/list',
    getSubBatchDetail: '/subBatch/detail',
  },
  template: {
    getTemplateList: '/template/properties/list',
    addTemplate: '/template/properties/add',
    updateTemplate: '/template/properties/update',
    getDetail: '/template/properties/detail',
    changeStatus: '/template/change/status',
  },
};
