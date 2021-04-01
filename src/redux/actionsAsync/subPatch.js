import {
  setLoadingAction,
  getListAction,
} from '../actions/subPatch';

export const getSubPatchList = (params) => async (dispatch) => {
  try {
    console.log(params, dispatch);
    dispatch(setLoadingAction({ loading: true }));
    setTimeout(() => {
      dispatch(getListAction({
        dataSource: {
          data: [{
            id: 1,
            c1: 'ZBZ0000000001',
            c2: '标记结节特征',
            c3: '刘帅兵',
            c4: '甲状腺',
            c5: 'BZ000000001',
            c6: '600',
            c7: '500',
            c8: '标注中',
            c9: '2020-11-24 13:23',
            c10: '2020-11-24 13:23',
          }],
          total: 25,
          perPage: 10,
          currentPage: 1,
        },
      }));
      dispatch(setLoadingAction({ loading: false }));
    }, 3000);
  } catch (error) {
    console.log(error);
  } finally {
    // dispatch(setLoadingAction({ loading: false }));
  }
};

export const test = '';
